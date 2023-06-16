import mongoose from "mongoose";


const productStructure = mongoose.Schema(
{
    name:String,
    price: Number,
    cat:String,
    selected:{
        type:Boolean,
        default:false
    }
}
);


const product=mongoose.model('Product',productStructure);

export default product;