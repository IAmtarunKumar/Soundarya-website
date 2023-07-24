const express = require("express")
const { ProductModel } = require("../model/product.model")


const productRouter = express.Router()


productRouter.get("/products" , async(req,res)=>{
   let data = await ProductModel.find()
   res.send(data)
})

productRouter.post("/post" , async(req,res)=>{
    const payload = req.body
    // let user = new ProductModel(payload)
    //  await user.save()

    let data = await ProductModel.insertMany(payload)


     res.send({msg : "product is posted"})
})

module.exports={productRouter}