import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, min: 4, unique: true },
    email: { type: String, required: true, min: 4, unique: true },
    password: { type: String, required: true },
});

const user = mongoose.model("User", userSchema);

export default user;