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
    const db = req.app.get('db')

    db.get_cart()
    .then(results => {
      res.status(200).send(results)
    }).catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with getting cart')
    })
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

    // let item = {
    //   product_id: id,
    //   quantity: 1
    // }
    // if (!req.session.cart) {
    //   req.session.cart = [item]
    // } else {
    //   req.session.cart.push(item)
    // }

    // res.send(req.session.cart)

    db.add_to_cart([1, id])
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with adding to cart')
    })
  },
  updateQuantity: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {quantity} = req.query

    db.update_quantity([+quantity, id])
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with updating quantity')
    })
  },
  deleteFromCart: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_from_cart([id])
    .then(results => {
      res.status(200).send(results)
    })
    .catch(err => {
      console.log(err)
      res.status(500).send('Something went wrong with deleting item from cart')
    })
  },
  checkout: (req, res) => {
    const db = req.app.get('db')
    stripe.charges.create(req.body)
    .then((results) => {
      let id = req.session.user ? req.session.user.id : null
      db.add_to_orders([results.id, id]).then((id) => {
        res.send({orderId: id[0].id})
      db.checkout()
      })
  })}
}







// column in cart referencing user_id in users 
// middleware on routes where checkout could occer and sees if logged in 

// added to cart needs to be added to req.session
// checkout req.session.cart
// max age on cookie 