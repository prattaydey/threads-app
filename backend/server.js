import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import {v2 as cloudinary} from "cloudinary";

dotenv.config();

const app = express();
connectDB();

const port = process.env.PORT || 5000;

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

// Middleware
app.use(express.json({ limit: "50mb" })); // to parse JSON data in req.body
app.use(express.urlencoded({extended: true})); // to parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    }
);

