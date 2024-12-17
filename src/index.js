import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env", // Path to your environment file
});


// Call the function to connect to MongoDB
connectDB();
.then(() => {
  const DefPort = 8000; // Add a default port value if not defined earlier
  app.listen(process.env.PORT || DefPort, () => {
    console.log(`Server is running on port ${process.env.PORT || DefPort}`);
  });
})
.catch((err) => {
  console.log("MongoDB connection failed!!!", err);
});




/*
import express from "express";
import {DB_NAME} from "./constants"
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });

    app.listen(process.env.PORT,()=>{
        console.log(`App is running on this port ${process.env.PORT}`);
    })
  } catch (error) {
    console.log("Error", error);
  }
})();
*/