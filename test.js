const mondebug = require('./')

const something = {
  hola: 'mundo'
}

const somefunc = () => console.log('I did something!...')

mondebug(3333, () => {
  somefunc()
  console.log('Writing `something` in the console')
  global.something = something
})
