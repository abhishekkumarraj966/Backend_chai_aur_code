import mongoose from "mongoose";

import { DB_NAME } from "../constants";
const connectDB = async () => {
  try {
   const connections= await mongoose.connect(`${process.env.MONGODB_URT}/${DB_NAME}`);
console.log(`\n MongoDB connection !! DB Host ${connections.connection.host}`);


  } catch {
    console.log("MongoDB  conection error", error);
    process.exit();
  }
};

export defoult connectDB;