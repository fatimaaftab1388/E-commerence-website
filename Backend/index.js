import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import ""

const app = express();

const url='mongodb+srv://fatimaaftab1388:fati1388@cluster0.bw59lgd.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("Connected to db"));
app.listen(5000);


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/user',userModel)
