require ('dotenv').config()

const express = require ('express')
      , bodyParser = require ('body-parser')
      , massive = require ('massive')
      ,session = require ('express-session')



const controller = require ('./controller')
const authCtrl = require('./authCtrl')

const app = express()


const {SERVER_PORT, CONNECTION_STRING} = process.env

app.use(bodyParser.json())

massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log('db is connected')
})


// Authentication
app.use(session({
  secret: process.env.SESSION_SECRET,
  saveUninitialized: false,
  resave: false
}))

app.get('/api/products', controller.getProducts)
app.get('/api/cart', controller.getCart)
app.get('/api/products/:id', controller.getProduct)

app.post('/api/cart/:id', controller.addToCart)

app.put('/api/cart/:id', controller.updateQuantity)

app.delete('/api/cart/:id', controller.deleteFromCart)
app.post('/api/checkout', controller.checkout)


// Authentication
app.get('/auth/callback',authCtrl.auth)
app.get('/api/currentUser', (req,res) => {
  res.send(req.session.user)
} )
app.get('/api/logout', (req, res) => {
  req.session.destroy()
  res.sendStatus(200)
})


app.listen(SERVER_PORT, () => console.log('Server is running on port:', SERVER_PORT))