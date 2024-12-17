import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connections = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\nMongoDB connection established! DB Host: ${connections.connection.host}`
    );
  } catch (error) { // Corrected 'catch'
    console.log("MongoDB connection FAILED:", error.message);
    process.exit(1);
  }
};

export default connectDB;
