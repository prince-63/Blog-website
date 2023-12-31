import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const logout = async (req, res) => {
    const { token } = req.cookies;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized - JWT missing' });
    }

    jwt.verify(token, SECRET_KEY, {}, async (err, info) => {
        if (err) throw err;
        res.cookie('token', '').json('ok');
    })
}

export default logout;