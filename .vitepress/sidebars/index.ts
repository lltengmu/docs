// 自动导入 modules 目录下的所有 sidebar 模块
// 此文件由 generate-index.js 自动生成，请勿手动编辑
import DA from './modules/DA'
import Http from './modules/Http'
import canvas from './modules/canvas'
import computerBasics from './modules/computer-basics'
import computerNetwork from './modules/computer-network'
import desingPatterns from './modules/desingPatterns'
import git from './modules/git'
import javascript from './modules/javascript'
import linux from './modules/linux'
import mysql from './modules/mysql'
import php from './modules/php'
import react from './modules/react'
import typescript from './modules/typescript'
import vue from './modules/vue'
import webApi from './modules/web-api'
import zustand from './modules/zustand'

// 合并所有 sidebar 配置
export default {
  ...DA,
  ...Http,
  ...canvas,
  ...computerBasics,
  ...computerNetwork,
  ...desingPatterns,
  ...git,
  ...javascript,
  ...linux,
  ...mysql,
  ...php,
  ...react,
  ...typescript,
  ...vue,
  ...webApi,
  ...zustand,
}
