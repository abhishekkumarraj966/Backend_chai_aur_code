// require('dotenv').config()

import { connectDB } from "mongoose"
import dotenv from "dotenv";
dotenv.config({
    path:"./env"
})

connectDB()









// import express from "express";

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URT}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.log("Error", error);
//       throw error;
//     });

//     app.listen(process.env.PORT,()=>{
//         console.log(`App is running on this port ${process.env.PORT}`);
//     })
//   } catch (error) {
//     console.log("Error", error);
//   }
// })();
