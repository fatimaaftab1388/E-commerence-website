import { userModel } from "../models/user.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const postuser= async (req,res)=>{
    try{
        const {FirstName, LastName, email, password}=req.body;
        const user={
            FirstName:FirstName,
            LastName:LastName,
            email:email,
            password:password
                    
        }
        
      const newuser= new userModel(user);
      
       const savedUser = await newuser.save();// user saved 
      console.log("New users saved : ", savedUser);
      
        }
        catch(e){
            console.log("Error during saving the item is : ",e);
        }
    }
    export const login=async(req ,res)=>{
        try{
            const {email,password}=req.body
            const user=await userModel.findOne({email})
            if(user.email===email && user.password===password){
                const token=jwt.sign({...user._doc},process.env.ACCESS_TOKEN);
                res.json({...user._doc,token:token});
            }
               
            
        }catch(e){
            console.log(e)
            res.sendStatus(500)
        }

    }

    export const getuser=async(req,res)=>{
        try{
            const data=await userModel.find()
            res.json(data)
            console.log(data);
        }catch(e){
            console.log("error in the getUser is : ", e);
        }
    }
    