import express from "express";
import productRouter from "./routes/product";
import categoryRouter from "./routes/category";
import userRouter from "./routes/user";
import cors from "cors";
import dotenv from "dotenv"// see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import mongoose from "mongoose";
import authRouter from "./routes/auth";

dotenv.config()
const app = express();

// middleware
app.use(express.json());
app.use(cors())
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter)
app.use("/api", userRouter)

mongoose.connect("mongodb://127.0.0.1:27017/we17306");

export const viteNodeApp = app;