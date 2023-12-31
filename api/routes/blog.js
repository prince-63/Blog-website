import express from "express";
import createPost from "../middleware/blog/createPost.js";
import getAllPost from "../middleware/blog/getAllPost.js";
import getPost from "../middleware/blog/getPost.js";
import multer from "multer";

const uploadMiddleware = multer({
    dest: 'uploads/',
    limits: {
        fieldNameSize: 100, // Adjust this value according to your needs
        fileSize: 100000000 * 1024 * 5, // 5 MB, adjust as needed
    },
});

const route = express.Router();

route.post("/post", uploadMiddleware.single('file'), createPost);
route.get("/post", getAllPost);
route.get("/post/:id", getPost);

export default route;
