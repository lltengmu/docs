import { readdirSync, writeFileSync } from 'fs'
import { join, dirname, basename } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 读取 modules 目录下的所有 .ts 文件
const modulesDir = join(__dirname, 'modules')
const files = readdirSync(modulesDir)
  .filter(file => file.endsWith('.ts'))
  .sort()

// 生成导入语句
const imports = files.map(file => {
  const name = basename(file, '.ts')
  // 将 kebab-case 转换为 camelCase 作为变量名
  const varName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  return `import ${varName} from './modules/${name}'`
}).join('\n')

// 生成导出对象
const exports = files.map(file => {
  const name = basename(file, '.ts')
  const varName = name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
  return `  ...${varName},`
}).join('\n')

// 生成完整的文件内容
const content = `// 自动导入 modules 目录下的所有 sidebar 模块
// 此文件由 generate-index.js 自动生成，请勿手动编辑
${imports}

// 合并所有 sidebar 配置
export default {
${exports}
}
`

// 写入文件
const indexPath = join(__dirname, 'index.ts')
writeFileSync(indexPath, content, 'utf-8')

console.log('✅ index.ts 已成功生成！')
console.log(`📦 已导入 ${files.length} 个 sidebar 模块`)

