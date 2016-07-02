

/**
 * Send form request drivent by markup and
 * prevent page reload
 *
 * @param {element} form
 * @param {Function} cb
 * @api public
 */

module.exports = function(form, cb) {
  form.addEventListener('submit', function(event) {
    var request = new XMLHttpRequest
    request.addEventListener('load', cb)
      request.addEventListener('error', cb)
    request.open(form.method.toUpperCase(), form.action)
    request.send(new FormData(form))
    event.preventDefault()
  })
}
