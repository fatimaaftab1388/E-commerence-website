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
        const {name, price, category, selected}=req.body
        const product={
            name: name,
            selected: selected,
            category : category,
            price : parseInt(price)
                    
        }
        
      const newItem= new productmodel(product);
      
       const savedItem = await newItem.save();// Product saved 
      console.log("Saved Item is : ", savedItem);
      res.status(200).json({savedItem})
      
        }
        catch(e){
            console.log("Error during saving the item is : ",e);
        }
    }
