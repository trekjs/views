'use strict'

const { resolve } = require('path')

let rootPath = ''

/**
 * Install marko
 *
 * @param {Object} options
 */

function install (root, options) {
  rootPath = root
  require('marko/node-require').install(options)
}

/**
 * Stream render view
 *
 * @param {String} view
 * @param {Object} state
 * @return {Stream}
 */

function render (view, state) {
  return require(resolve(rootPath, view)).stream(state)
}

module.exports = {

  install,

  render

}
