// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import morgan from "morgan";
// import helmet from "helmet";

// // Initialize express app
// const app = express();

// // CORS middleware
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN || "http://localhost:3000",
//     credentials: true,
//   })
// );

// // Security middleware
// app.use(helmet());

// // Logging middleware
// app.use(morgan("dev"));

// // Middleware for handling JSON requests with a limit of 16KB
// app.use(express.json({ limit: "16kb" }));

// // Middleware for handling URL-encoded requests with a limit of 16KB
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// // Serve static files from the "public" directory
// app.use(express.static("public"));

// // Middleware to parse cookies
// app.use(cookieParser());


// // Routes
// import userRouter from "./routes/User.routes.js";
// app.use("/api/v1/users", userRouter);













// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).json({
//     message: "Something went wrong!",
//     error: err.message,
//   });
// });




// app.js
import express from "express";
import userRouter from "./routes/User.routes.js"; // Import the user router

const app = express();

app.use(express.json()); // Middleware to parse JSON body

// Use the user router for /api/v1/users endpoint
app.use("/api/v1/users", userRouter);

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});





// Export the app to be used in the main file (e.g., server.js)
export { app };
