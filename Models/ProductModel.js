const mongoose=require('mongoose');

const ProductSchema=mongoose.Schema({
    name:String,
    description:String,
    title:String,
    price:Number
})

const ProductModel=mongoose.model('products',ProductSchema);

module.exports=ProductModel;