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


const productmodel=mongoose.model('Product',productStructure);

export default productmodel;