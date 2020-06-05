const base = require('./base')
const react = require('./react')
const vue = require('./vue')
const typescript = require('./typescript')

const {demo} = process.env

const presets= [base]

if (demo === 'react') {
  presets.push(react)
} else if (demo === 'vue') {
  presets.push(vue)
} else if (demo === 'ts') {
  presets.push(typescript)
} else if (demo === 'tsr') {
  presets.push(react)
  presets.push(typescript)
}

module.exports = {
  presets
}