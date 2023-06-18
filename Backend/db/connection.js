import mongoose from "mongoose"

const url='mongodb+srv://fatimaaftab1388:fati1388@cluster0.bw59lgd.mongodb.net/?retryWrites=true&w=majority'

const connection=mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})

export {connection}