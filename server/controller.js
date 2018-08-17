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
      db.add_to_orders(results.id).then(() => {
        db.checkout()
        .then(results => {
          res.status(200).send(results)
        })
        .catch(err => {
          console.log(err)
          res.status(500).send('Something went wrong with emptying cart')
        })

      })
  })}
}