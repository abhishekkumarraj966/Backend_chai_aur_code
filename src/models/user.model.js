import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Fixed typo
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true, // Fixed typo
      trim: true,
    },
    fullname: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // Cloudinary URL
      required: true,
    },
    coverImage: {
      type: String, // Optional field
    },
    watchHistory: [
      {
        type: Schema.Types.ObjectId,
        ref: "Video", // Ensure the "Video" model exists in your project
      },
    ],
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  {
    timestamps: true, // Corrected placement
  }
);

export const User = mongoose.model("User", userSchema);
