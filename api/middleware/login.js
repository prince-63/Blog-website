import dotenv from "dotenv";
import bcrypt from "bcrypt";
import user from "../model/user.js";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;

const login = async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const userDocument = await user.findOne({ username });
    const checkPasswordMatchOrNot = bcrypt.compareSync(password, userDocument.password);

    if (checkPasswordMatchOrNot) {
        // logged in
        jwt.sign({ username, id: userDocument._id }, SECRET_KEY, {}, (error, token) => {
            if (error) throw error;

            res.cookie('token', token).json({
                id: userDocument._id,
                username
            });
        });
    }
    else {
        res.status(400).json("wrong credentials");
    }
}

export default login;