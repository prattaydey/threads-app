import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config();

const app = express();
connectDB();

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    }
);

