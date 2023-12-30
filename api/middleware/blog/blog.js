import multer from "multer";
import fs from 'fs';
import post from '../../model/blog.js';
import dotenv from 'dotenv';
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

export const uploadMiddleware = multer({ dist: 'upload/' });

export const createPost = (req, res) => {
    const { originalname, path } = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath);

    const { token } = req.cookies;
    jwt.verify(token, SECRET_KEY, {}, async (err, info) => {
        if (err) throw err;
        const { title, summary, content } = req.body;
        const postDoc = await post.create({
            title,
            summary,
            content,
            cover: newPath,
            author: info.id,
        });
        res.json(postDoc);
    });

}
