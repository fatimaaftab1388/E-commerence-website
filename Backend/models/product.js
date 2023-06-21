import mongoose from "mongoose";


const productStructure = mongoose.Schema(
{
    name:String,
    price: Number,
    category:String,
    image:{
        type:String,
        required:true
    },
    selected:{
        type:Boolean,
        default:false

    }

}
);


const productmodel=mongoose.model('Product',productStructure);

export default productmodel;