/**
 * Install marko
 *
 * @param {Object} options
 */

function install (options) {
  require('marko/node-require').install(options)
}

/**
 * Render the view
 *
 * @param {String} view
 * @param {Object} state
 * @return {Stream}
 */

function render (view, state) {
  return require(view)
}

module.exports = {

  install,

  render

}
