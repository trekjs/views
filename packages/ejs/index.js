'use strict'

const ejs = require('ejs')

let defaults = {}

function install (root, options = {}) {
  defaults.root = root
  Object.assign(defaults, options)
}

function render (path, state) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(path, state, defaults, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

function renderString (str, state) {
  return ejs.render(str, state, defaults)
}

module.exports = {

  install,

  render,

  renderString

}
