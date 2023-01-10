const express=require('express');
const productModel=require('../Models/ProductModel');
const router=express.Router();

router.get('/',async(req,res)=>{
        const products= await productModel.find();
    res.render('Products',{products});
})

router.get('/add',async(req,res)=>{
    res.render('AddProduct');
})

router.post('/add',async(req,res)=>{
    
    const product= new productModel();
    product.name=req.body.name;
    product.title=req.body.title;
    product.description=req.body.description;
    product.price=req.body.price;
   await product.save();
   res.redirect('/Products')
})

router.get('/edit/:id',async(req,res)=>{
    const product= await productModel.findById(req.params.id);

    res.render('EditProduct',{product});
})

router.post('/edit/:id',async(req,res)=>{
const product = await productModel.findById(req.params.id);
product.name=req.body.name;
product.title=req.body.title;
product.price=req.body.price;
product.description=req.body.description;
await product.save();
res.redirect('/Products');
})

router.get('/delete/:id',async(req,res)=>{
    const product=await productModel.findByIdAndDelete(req.params.id)
res.redirect('/Products');
})


module.exports=router;