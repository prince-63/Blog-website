import bcrypt from "bcrypt";
import user from "../../model/user.js";

const salt = bcrypt.genSaltSync(10);

const register = async (req, res) => {
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
   
    try {
        const userDocument = await user.create({
            name,
            username,
            email,
            password: bcrypt.hashSync(password, salt),
        });
        res.status(200).json(userDocument);
    }
    catch (error) {
        console.log(error);
        res.status(400).json(error);
    }
}

export default register;