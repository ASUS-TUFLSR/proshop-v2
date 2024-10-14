import asyncHandler from "../middleware/asyncHandler.js" 
import Product from '../models/productModel.js'

//@ desc FETCH all products
// @route get /api/products
// @access Public

const getProducts = asyncHandler(async (req, res)  => {
     const products = await Product.find({});
    res.json(products)
 })

 //@ desc FETCH a product
// @route get /api/products/:id
// @access Public
const getProductsById = asyncHandler(async (req, res)  => {
    const product = await Product.findById(req.params.id)

    if(product){
    return res.json(product)
    }
    res.status(404);
    throw new Error('Resource Not Found');

 })

 export {getProducts, getProductsById};