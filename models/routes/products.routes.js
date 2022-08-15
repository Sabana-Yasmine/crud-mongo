const router = require("express").Router();
const productSchema = require("../product.models");

//CREATE / add product

router.post('/addproduct',async(req,res)=>{
    try{
    const productDetails = req.body
    const result = productSchema(productDetails)
    const newProduct = await result.save()
    return res.status(200).json({"status": "success", "message":"product added successfully", "result": newProduct})
    } catch(error){
        return res.status(400).json({"status":"failure","message":error.message})
    }

})

//UPDATE 
router.put("/updateproduct",async(req,res) =>{
    try{
    let condition = req.query
    let updateData = req.body
    let option = {new:true}
    const updateProduct = await productSchema.findOneAndUpdate(condition, updateData,option).exec()
    return res.status(200).json({"status": "success", "message":"product updated successfully", "result": updateProduct})
    } catch(error){
        return res.status(400).json({"status":"failure","message":error.message})
    }

})

//READ /get product

router.get("/getproduct",async(req,res) =>{
    try{
        const productDetails = await productSchema.find().exec()
        return res.status(200).json({"status": "success", "message":"product fetched successfully", "result": productDetails})
    } catch(error){
        return res.status(400).json({"status":"failure","message":error.message})
    }  
    
})

//DELETE /delete product

router.delete("/deleteproduct",async(req,res) =>{
    try{
        const productDetails = await productSchema.findOneAndDelete(req.query).exec()
        return res.status(200).json({"status": "success", "message":"product deleted successfully"})
    } catch(error){
        return res.status(400).json({"status":"failure","message":error.message})
    }   
    
})
module.exports = router;
