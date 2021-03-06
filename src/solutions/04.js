const { doAsyncWork } = require('../helpers/asyncFunctions')
const { handleError, handleSuccess } = require('../helpers/handleResults')

/*
  04 Handling functions that return promises
  - doAsyncWork now returns a promise instead of taking a callback
  - use the .then and .catch methods to wait for your promise
  - if there is an error, pass it to handleError()
  - otherwise, pass the results to handleSuccess()
*/

/* doAsyncWork()
  @returns {Promise}
*/

const main = () =>
  doAsyncWork()
    .then(handleSuccess)
    .catch(handleError)

module.exports = main
