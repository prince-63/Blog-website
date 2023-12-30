import express from "express";
import { createPost, uploadMiddleware } from "../middleware/blog/blog.js";

const route = express.Router();

route.post("/post", uploadMiddleware.single('file'), createPost);

export default route;