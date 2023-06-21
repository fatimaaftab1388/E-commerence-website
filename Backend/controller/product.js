import productmodel from '../models/product.js'
export const getProduct=async(req,res)=>{
    try{
        const data=await productmodel.find()
        res.json(data)
        console.log(data);
    }catch(e){
        console.log("error in the getProduct is : ", e);
    }
    
}

export const postProduct= async (req,res)=>{
    try{
        const {name, price, category,image}=req.body
     
        const product={
            name: name,
            price : price,
            category : category,
            image:image
        }
        
      const newItem= new productmodel(product);
      
       const savedItem = await newItem.save();// Product saved 
      console.log("Saved Item is : ", savedItem);
      res.status(200).json({product})
      
        }
        catch(e){
            console.log("Error during saving the item is : ",e);
        }
    }
