import mongoose, { Schema } from "mongoose";

const blogSchema = mongoose.Schema({
    title: String,
    description: String,
    topic: String,
    timeToRead: String,
    date: Date,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model("Blog", blogSchema);