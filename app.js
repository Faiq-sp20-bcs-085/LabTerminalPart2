
const { json } = require('body-parser');
const express=require('express');
const mongoose=require('mongoose');
const expressLayout=require('express-ejs-layouts')
const indexRouter=require('./Routes/index');
const productRouter=require('./Routes/Products');


const app=express();


app.set('view engine','ejs');
app.use(expressLayout)
app.use(json());
app.use(express.urlencoded({extended:true}));
app.use('/',indexRouter);

app.use('/products',productRouter);

mongoose.connect('mongodb://127.0.0.1/LabTerminal').then(()=>{
    console.log('You are connected to MongoDb')
}).catch((e)=>{
    console.log(e)
})

app.listen(3000);