const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const productsController = require('./controller/productsController')
require('dotenv').config()

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('connected to db')
})

//get all products
app.get('/api/getProducts', productsController.getProducts)
app.post('/api/postProduct', productsController.createProduct)

const port = 4005
app.listen(port, () => console.log(`on port, ${port}`))