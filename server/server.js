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
  console.log('db connected')
})

app.listen(SERVER_PORT, () => console.log('Running on: ', SERVER_PORT))