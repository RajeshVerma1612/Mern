import express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

 mongoose.connect(process.env.MONGO).then(
    ()=> console.log("Mongodb is Connected")
 ).catch(
    (err)=>console.log(`Error Occured : ${err}`)
 )
const app=express();

app.listen(3000, ()=>{
    console.log("Server is running on port 300!");
}); 