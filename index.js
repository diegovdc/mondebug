const express = require('express')
const app = express()

module.exports = (port, cb) => {
  app.listen(port, () => {
    if(typeof cb === 'function') {
      console.log(`[mondebug] running on ${port}!`)
      cb()
    } else {
      console.error('The second argument to mondebug must be function')
    }
})
}