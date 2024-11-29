const Product = require("../models/product.model")

const createProduct = async (req, res) => {
    if (req.file) {
        req.body.image = req.file.image;
    }
    try {
        req.body.user = req.body.user; 

        let product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        res.status(400).json({ err: e.message });
    }
}


const getAllProducts = async (req, res) => {
    try {
        let products = await Product.find().populate('user')
        res.status(200).send(products)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        let { id } = req.params
        let product = Product.findByIdAndUpdate(id, req.body, { new: true })
        res.status(200).send(product)
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}
const deleteProduct = async(req,res)=>{
    try {
        let {id} = req.params
        await Product.findByIdAndDelete(id)
        res.status(200).send({msg:"Product deleted successfully"})
    } catch (error) {
        res.status(404).json({ err: error.message })
    }
}


module.exports = {getAllProducts,updateProduct,deleteProduct,createProduct}