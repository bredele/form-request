

/**
 * Send form request drivent by markup and
 * prevent page reload
 *
 * @param {element} form
 * @param {Function} cb
 * @return {FormData}
 * @api public
 */

module.exports = function(form, cb) {
  var data = new FormData(form)
  var type = form.enctype;
  form.addEventListener('submit', function(event) {
    var request = new XMLHttpRequest
    request.addEventListener('load', cb)
    request.addEventListener('error', cb)
    request.open(form.method, form.action)
    request.send(encode(data, type))
    event.preventDefault()
  })
  return data
}

/**
 * Encode data according form enctype.
 *
 * @param {FormData} data
 * @param {String} type
 * @api private
 */

function encode(data, type) {
  if(type === 'application/x-www-form-urlencoded') {
    var query = ''
    for(var entry of data.entries()) {
      query += entry[0] + '=' + encoreURI(entry[1]) + '&'
    }
    return query
  }
  return data;
}
