const pug = require('pug')

function install () {
  require('pug/register')
}

function render (path, options) {
  return new Promise((resolve, reject) => {
    pug.renderFile(path, options, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

function renderString (str, options) {
  return new Promise((resolve, reject) => {
    pug.render(str, options, (err, res) => {
      err ? reject(err) : resolve(res)
    })
  })
}

module.exports = {

  install,

  render,

  renderString

}
