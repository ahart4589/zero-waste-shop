const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = {
  getProducts: (req, res) => {
    const db = req.app.get('db')

    db.get_products()
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with getting products')
    })
  },
  getCart: (req, res) => {
    // console.log(req.session)
    res.send(req.session.cart)
  },
  getProduct: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    
    db.get_product(id)
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with getting product')
    })
  },
  addToCart: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const index = req.session.cart.findIndex((p)=>{
      return p.id === +id
    })
    if(index !== -1){
      req.session.cart[index].quantity++
      console.log(req.session.cart)
      res.send(req.session.cart)
    }else {
      db.get_product(id).then(results => {
        let product = results[0]
        product.quantity = 1
        req.session.cart.push(product)
        console.log(req.session.cart)
          res.send(req.session.cart)
        })
      }
  },
  updateQuantity: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    console.log(11111111,req.query)
    const {quantity, update} = req.query
      const index = req.session.cart.findIndex(p => p.id === +id)
        if(index !== -1 && update === 'up'){
          req.session.cart[index].quantity++
          console.log(22222222, quantity)
          res.send(req.session.cart)
        }
        else if(index !== -1 && update === 'down'&& quantity > 1){
          req.session.cart[index].quantity--
          console.log(22222222, quantity)
          res.send(req.session.cart)
        }
  },
  deleteFromCart: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
      const index = req.session.cart.findIndex(p => p.id === +id)
      if(index !== -1) {
        req.session.cart.splice(index, 1)
        res.send(req.session.cart)
      }
  },
  checkout: (req, res) => {
    const db = req.app.get('db')

    let { cart } = req.session
    let total = cart.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)

    let products = cart.map(item => ({ id: item.id, quantity: item.quantity, price: item.price }))

    stripe.charges.create(req.body)
      .then((results) => {
        let userId = req.session.user ? req.session.user.id : null
        db.add_to_orders([results.id, userId, total, products]).then((id) => {
          res.send({orderId: id[0].id})
        })
      })
    .then(()=> {
      req.session.cart = []
    })
  }
}
