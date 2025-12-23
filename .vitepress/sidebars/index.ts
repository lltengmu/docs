import canvas from './canvas'
import computerBasics from './computer-basics'
import computerNetwork from './computer-network'
import DA from './DA'
import desingPatterns from './desingPatterns'
import git from './git'
import Http from './Http'
import javascript from './javascript'
import linux from './linux'
import mysql from './mysql'
import php from './php'
import react from './react'
import typescript from './typescript'
import vue from './vue'
import zustand from './zustand'
import webApi from './web-api'

const sidebars = [
  computerBasics,
  computerNetwork,
  git,
  mysql,
  typescript,
  javascript,
  react,
  zustand,
  canvas,
  DA,
  desingPatterns,
  Http,
  linux,
  php,
  vue,
  webApi,
]

export default sidebars.reduce((prev, item) => Object.assign(prev, item), {})
