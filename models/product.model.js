const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    title:{
        type:String,
        required: true
    },
    image:{
        type:String,
    },
    price:{
        type:Number,
        required: true
    },
    discription:{
        type:String,
        required: true
    },
    createAt:{
        type: Date,
        default: Date.now()
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;