//1.import mongoose

const mongoose = require('mongoose')

//2.define connection string
                //connection string
mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('Connected to mongodb');
})

//3.model creation

const Product=mongoose.model('Product',{
   id:Number,     
   title:String,
   price:Number,
   description:String,            //this is the schema of database
   category:String,
   image:String,
   rating:{
    rate:Number,
    count:Number
   }
})
//wishlist model creation
const Wishlist=mongoose.model('Wishlist',{
   id:Number,     
   title:String,
   price:Number,
   description:String,            //this is the schema of database
   image:String
})

//4.export 

module.exports={
    Product,
    Wishlist
}