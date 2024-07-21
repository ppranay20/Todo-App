import mongoose from "mongoose";

export default async function dbConnection(){
    const url : string = process.env.MONGO_URI || "";

    try{
        await mongoose.connect(url);
        console.log("Database connected")
    }
    catch(err){
        console.log(err);
    }
    
}