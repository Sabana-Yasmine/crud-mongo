//schema for our products
const mongoose = require("mongoose")


//schema creation
const productSchema = new mongoose.Schema({
    productName:{type:String, required: true},
    price:{type:String, required:true},
    quantity:{type:String, rquired:false}
})

//exporrting created schema
module.exports = mongoose.model("product", productSchema)