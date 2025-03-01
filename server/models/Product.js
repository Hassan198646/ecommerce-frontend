import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },

    image:{
        fileName:String,
        path:String
    },
    price:{ 
        type:Number,
        required:true

    },
    description: {
        type:String,
        required:true

    },

    stock:{
        type:Number,
        require:true
    }
});
const Product = mongoose.model('Product', ProductSchema);

export default Product;