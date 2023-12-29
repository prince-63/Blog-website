import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
    username: String,
    useremail: String,
    password: String,
    blog: [{
        type: Schema.Types.ObjectId,
        ref: "Blog"
    }]
})

module.exports = mongoose.model("User", userSchema);