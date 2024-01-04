import Post from "../../model/Post.js"

const GetAllPost = async (req, res) => {
    const posts = await Post.find();
    res.json(posts);
}

export default GetAllPost;