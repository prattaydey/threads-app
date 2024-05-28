import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import userRoutes from "./routes/userRoutes.js"
import postRoutes from "./routes/postRoutes.js"

dotenv.config();

const app = express();
connectDB();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // to parse JSON data in req.body
app.use(express.urlencoded({extended: true})); // to parse form data in the req.body
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);

const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    }
);

