const express = require ('express')
      , bodyParser = require ('body-parser')
      , massive = require ('massive')

require ('dotenv').config()

const controller = require ('./controller')

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db is connected')
})

app.get('/api/products', controller.getProducts)
app.get('/api/cart', controller.getCart)
app.get('/api/products/:id', controller.getProduct)

app.post('/api/cart/:id', controller.addToCart)

app.put('/api/cart/:id', controller.updateQuantity)

app.delete('/api/cart/:id', controller.deleteFromCart)
app.delete('/api/checkout', controller.checkout)

app.listen(SERVER_PORT, () => console.log('Server is running on port:', SERVER_PORT))