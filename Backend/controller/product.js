import productmodel from "../models/product" ;
export const getProduct=(req,res)=>{
    
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
      
        }
        catch(e){
            console.log("Error during saving the item is : ",e);
        }
    }
