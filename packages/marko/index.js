/**
 * Install marko
 *
 * @param {Object} options
 */

function install (options) {
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
  return require(view).stream(state)
}

module.exports = {

  install,

  render

}
