const mongoose=require('mongoose');
const brandSchema=new mongoose.Schema({
    brand_name:String,
    brand_image:{type:String},
    brand_title:String,
    brand_desc:String,
   
});

const brands=new mongoose.model("brands",brandSchema);
module.exports=brands;