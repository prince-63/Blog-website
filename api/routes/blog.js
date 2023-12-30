import express from "express";
import createPost from "../middleware/blog/createPost.js";
import getPost from "../middleware/blog/getPost.js";
import multer from "multer";
const uploadMiddleware = multer({ dest: 'uploads/' });

const route = express.Router();

route.post("/post", uploadMiddleware.single('file'), createPost);
route.get("/post", getPost);

export default route;