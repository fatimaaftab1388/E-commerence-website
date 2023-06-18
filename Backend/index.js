import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import {connection} from './db/connection.js'
import productRouter from './routes/product.js'
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

connection.then(()=>{
    console.log("DB Connected.")
}).catch((e)=>{
    console.log("Error: ",e)
})

app.use('/product',productRouter)


app.listen(5000)