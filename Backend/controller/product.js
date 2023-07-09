import productmodel from "../models/product.js";
export const getProduct = async (req, res) => {
  try {
    const data = await productmodel.find();
    res.json(data);
    console.log(data);
  } catch (e) {
    console.log("error in the getProduct is : ", e);
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const data = await productmodel.findByIdAndDelete(req.params.id)
    res.json(data);
    console.log(data);
  } catch (e) {
    console.log("error in the getProduct is : ", e);
  }
};

export const postProduct = async (req, res) => {
  try {
    const { name, price, category, selected } = req.body;
    const image = req.file.filename;
    console.log("The image is : ", image);
    const product = {
      name: name,
      price: price,
      category: category,
      image: image,
      selected: selected,
    };

    const newItem = new productmodel(product);

    const savedItem = await newItem.save(); // Product saved
    console.log("Saved Item is : ", savedItem);
    res.status(200).json({ product });
  } catch (e) {
    console.log("Error during saving the item is : ", e);
  }
};


export const updateProduct = async (req, res) => {
  try {
   console.log(req.body)
   console.log(req.params.id)
   
   const updatedUser=await productmodel.findByIdAndUpdate(req.params.id,req.body,{
    new:true,
    runValidators:true
   })
   res.json(updatedUser)
  } catch (e) {
    console.log("Error during saving the item is : ", e);
  }
};
