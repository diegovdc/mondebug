# Mondebug

Super simple module for debugging that reloads code on the Chrome Debugger on save and keeps the file running with an express server for further exploration of the code.

## Usage
On any file:
```js
//anyfile.js
const mondebug = require('mondebug')

//your code
const something = {
  hola: 'mundo'
}

const somefunc = () => {
  console.log('I did something!...')
}


//call mondebug specifying port and a callback function with the code you want to execute
mondebug(3333, () => {
  somefunc()
  console.log('Writing `something` in the console')
  global.something = something // you may use global to make your code available in the Chrome Inspector
})
```

On the terminal:
`node --inspect anyfile.js`

Or for an even better approach:
`nodemon --inspect anyfile.js`
