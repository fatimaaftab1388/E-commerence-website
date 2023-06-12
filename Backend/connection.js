import mongoose from "mongoose";

const url='mongodb+srv://fatimaaftab1388:<password>@cluster0.bw59lgd.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=> console.log('connected')).catch(()=> console.log('error'))