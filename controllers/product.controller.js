const Product = require("../models/product.model")

const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find()
        res.status(200).json(products)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params
        let product = Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}
const deleteProduct = async(req,res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).json({msg:"Product deleted successfully"})
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}


module.exports = {getAllProducts,updateProduct,deleteProduct}