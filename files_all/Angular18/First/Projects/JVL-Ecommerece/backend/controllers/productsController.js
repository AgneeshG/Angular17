const productModel = require('../models/productModel')

// Get Product API - /api/v1/Products
exports.getProducts = async (req, res, next) => {
    const query = req.query.keyword ? { name: {
        $regex: req.query.keyword,
        $options: 'i'
    }
} : {}
    const products = await productModel.find(query)
    res.json({
        success: true,
        // message:'sample message'
        products
    })
}


// Get Single Product API - /api/v1/product/:id
exports.getSingleProduct = async (req, res, next) => {
    const product = await productModel.findById(req.params.id)

    res.json({
        success: true,
        product
    })
}

