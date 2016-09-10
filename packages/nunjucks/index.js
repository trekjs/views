const nunjucks = require('nunjucks')

function install (root, options) {
  nunjucks.configure(root, options)
}

function render (path, state) {
  return new Promise((resolve, reject) => {
    nunjucks.render(path, state, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

function renderString (str, state) {
  return nunjucks.renderString(str, state)
}

module.exports = {

  install,

  render,

  renderString

}
