import express from "express";
import multer from "multer";
import CreatePost from "../middleware/blog/createPost.js";
import GetAllPost from "../middleware/blog/getAllPost.js";
import GetPost from "../middleware/blog/getPost.js";

const uploadMiddleware = multer({
    dest: 'uploads/',
    limits: {
        fieldNameSize: 100, // Adjust this value according to your needs
        fileSize: 100000000 * 1024 * 5, // 5 MB, adjust as needed
    },
});

const route = express.Router();

route.post("/post", uploadMiddleware.single('file'), CreatePost);
route.get("/post", GetAllPost);
route.get("/post/:id", GetPost);

export default route;
