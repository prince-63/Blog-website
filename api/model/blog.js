import mongoose from "mongoose";
const { Schema, model } = mongoose;

const BlogSchema = new Schema({
    title: String,
    summary: String,
    content: String,
    cover: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
}, {
    timestamps: true,
});

const BlogModel = model('Post', BlogSchema);

export default BlogModel;