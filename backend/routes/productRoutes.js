import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'


// @desc    Fetch all products
// @routes  GET /api/products
// @access  Public
router.get('/', asyncHandler(async (req, res) => {
    const products = await Product.find({})

    res.json(products)
  }))

// @desc    Fetch single product
// @routes  GET /api/products/:id
// @access  Public  
router.get('/:id',  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    } else {
        res.status(404)  //if we dont put this, it will throw 500(server error)
        throw new Error('Product not found')
    }
}))


  export default router