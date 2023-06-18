import productmodel from '../models/product.js'
export const getProduct=async(req,res)=>{
    try{
        const data=await productmodel.find()
        res.json(data)
    }catch(e){

    }
    
}

export const postProduct= async (req,res)=>{
    try{
        const {name, price, category}=req.body
        console.log(req.file)
        const product={
            name: name,
            price : price,
            category : category,
            image:req.file.path
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
