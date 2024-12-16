import canvas from './canvas'
import DA from './DA'
import desingPatterns from './desingPatterns'
import git from './git'
import Http from './Http'
import javascript from './javascript'
import linux from './linux'
import mysql from './mysql'
import react from './react'
import typescript from './typescript'
import zustand from './zustand'

const sidebars = [git, mysql, typescript, javascript, react, zustand, canvas, DA, desingPatterns, Http, linux]

export default sidebars.reduce((prev, item) => Object.assign(prev, item), {})
