const { Router } = require("express")
const { getAllProducts, updateProduct, deleteProduct, createProduct } = require("../controllers/product.controller")
const upload = require("../utils/image.upload")

const productRouter = Router()

productRouter.get("/all",getAllProducts)

productRouter.post("/",upload.single("image"),createProduct)
productRouter.patch("/update/:id",updateProduct)
productRouter.delete("/delete/:id",deleteProduct)

module.exports = productRouter;