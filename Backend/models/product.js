import mongoose from "mongoose";


const productStructure = mongoose.Schema(
{
    name:String,
    price: Number,
    category:String,
    image:String
}
);


const productmodel=mongoose.model('Product',productStructure);

export default productmodel;