const express = require("express");
const router = express.Router();
const brands = require("../models/brands");
const multer=require('multer');
const path=require('path');

const app=express();



// app.use(express.static(path.join(__dirname,'public')))
// app.use(express.static(path.join(__dirname,'../uploads')))
const Storage=multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname));
    }
});

const upLoadbrandImg=multer({storage:Storage}).single('brand_image')


router.post("/Add-Brands",upLoadbrandImg,async(req,resp)=>{
    
    try {
        const categoriesData=new brands({
            brand_name:req.body.brand_name,
            brand_image:req.file.filename,
            brand_title:req.body.brand_title,
            brand_desc:req.body.brand_desc,        
        });
         const Categoriesresult=await categoriesData.save();
         resp.json({result:"brand Added Successfully",Categoriesresult});
    } catch (error) {
        resp.json(error);
        
    }
 
});


module.exports=router;