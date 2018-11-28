const mondebug = require('./')

const something = {
  hola: 'mundo'
}

const somefunc = () => console.log('I did something!...')

mondebug(3333, () => {
  console.clear()
  somefunc()
  console.log('Write`something` in the console')  
  global.something = something
})
