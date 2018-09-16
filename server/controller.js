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
    // const db = req.app.get('db')
    // if(req.session.user){
    //   if(req.session.cart.length) {
    //     let promises = []
    //     db.checkout().then(() => {
    //       req.session.cart.forEach(p => {
    //         promises.push(db.add_to_cart(p.quantity, p.id, p.users))
    //       })
    //       Promise.all(promises).then(() => {
    //         db.get_cart().then(results => {
    //           req.session.cart = []
    //           res.status(200).send(results)
    //         })
    //       })
    //     })
    //   } else {
    //     db.get_cart()
    //     .then(results => {
    //       res.status(200).send(results)
    //     }).catch(err => {
    //       console.log(err)
    //       res.status(500).send('Something went wrong with getting cart')
    //     })
    //   }
    // }else {
    //   console.log(req.session)
    //   res.send(req.session.cart)
    // }
    console.log(req.session)
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

    // if(req.session.user){
    //   console.log(req.session.user)
    //   db.add_to_cart([1, id, req.session.user.id])
    //   .then(results => {
    //     res.status(200).send(results)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     res.status(500).send('Something went wrong with adding to cart')
    //   })
    // } else {
      const index = req.session.cart.findIndex((p)=>{
        return p.id === +id
      })
      if(index !== -1){
        req.session.cart[index].quantity++
        res.send(req.session.cart)
      }else {
        db.get_product(id).then(results => {
          let product = results[0]
          product.quantity = 1
          req.session.cart.push(product)
          res.send(req.session.cart)
        })
      }
    // }
  },
  updateQuantity: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    const {quantity} = req.query

    // if(req.session.user){
    //   db.update_quantity([+quantity, id, req.session.user.id])
    //   .then(results => {
    //     res.status(200).send(results)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     res.status(500).send('Something went wrong with updating quantity')
    //   })
    // } else {
      const index = req.session.cart.findIndex(p => p.id === +id)
        if(index !== -1){
          req.session.cart[index].quantity++
          res.send(req.session.cart)
        }
    // }
  },
  deleteFromCart: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    // if(req.session.user){
    //   db.delete_from_cart([id])
    //   .then(results => {
    //     res.status(200).send(results)
    //   })
    //   .catch(err => {
    //     console.log(err)
    //     res.status(500).send('Something went wrong with deleting item from cart')
    //   })
    // } else {
      const index = req.session.cart.findIndex(p => p.id === +id)
      if(index !== -1) {
        req.session.cart.splice(index, 1)
        res.send(req.session.cart)
      }
    // }

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







// column in cart referencing user_id in users 
// middleware on routes where checkout could occer and sees if logged in 

// added to cart needs to be added to req.session
// checkout req.session.cart
// max age on cookie 