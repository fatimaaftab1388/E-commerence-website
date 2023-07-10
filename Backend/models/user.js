import mongoose from "mongoose";

const userStructure=mongoose.Schema(
    {
        FirstName:String,
        LastName:String,
        email:{
            type:String,
            unique:true
        },
        password:String
    }
);
const userModel=mongoose.model('Customer',userStructure);
export  {userModel};