const { Router } = require("express")
const { getAllProducts, updateProduct, deleteProduct } = require("../controllers/product.controller")

const productRouter = Router()

productRouter.get("/all",getAllProducts)

productRouter.patch("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)

module.exports = productRouter;