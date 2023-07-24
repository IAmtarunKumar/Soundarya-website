const mongoose = require("mongoose")

//schema

const productSchema = mongoose.Schema({
    "id": String,
    "title": String,
    "price":String,
    "category": String,
    "image": String
})


//model

const ProductModel = mongoose.model("product" , productSchema)


module.exports={ProductModel}