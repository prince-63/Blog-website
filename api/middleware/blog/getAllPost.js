import post from "../../model/post.js"

const getAllPost = async (req, res) => {
    const posts = await post.find();
    res.json(posts);
}

export default getAllPost;