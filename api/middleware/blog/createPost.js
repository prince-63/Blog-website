import fs from 'fs';
import jwt from 'jsonwebtoken';
import post from "../../model/post.js";

const SECRET_KEY = process.env.SECRET_KEY;

const createPost = async (req, res) => {
    console.log(req.file);
    console.log(req.body);
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const exact = parts[parts.length - 1];
    const newPath = path + '.' + exact;

    // rename the file name of the uploaded picture
    fs.renameSync(path, newPath);

    const {token} = req.cookies;

    jwt.verify(token, SECRET_KEY, {}, async (error, info) => {
        if (error) throw error;

        const {title, summary, content} = req.body;
        const postDocument = await post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDocument);
    });
}

export default createPost;
