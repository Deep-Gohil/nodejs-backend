const express = require('express');
const connectToDatabase = require('./config/db');
const userRouter = require('./routes/userRouter');
require("dotenv").config()
const cors = require('cors');
const path = require("path");
const productRouter = require('./routes/product.router');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors());
app.use(express.static(path.join(__dirname, "./client")));

app.get("/",(req,res)=>{
    res.status(200).json({msg:"Default Route "});
});

app.use("/user",userRouter)
app.use("/product",productRouter)


const PORT = process.env.PORT || 8090;
app.listen(PORT,()=>{
    console.log(`listening on https:localhost:${PORT}`);
    connectToDatabase()
})