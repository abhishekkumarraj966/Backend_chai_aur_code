import dotenv from 'dotenv';
import connectDB from './db/index.js';
import express from 'express';
import userRouter from './routes/User.routes.js';

dotenv.config({ path: './.env' });

const app = express();
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
connectDB()
  .then(() => {
    const PORT = process.env.PORT || 8000;

    // Base route
    app.get('/', (req, res) => {
      res.status(200).json({ message: 'API is running...' });
    });

    // User routes
    app.use('/users', userRouter);

    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection failed:', err);
  });