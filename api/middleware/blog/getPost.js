import post from "../../model/post.js"

const getPost = async (req, res) => {
    const posts = await post.find();
    res.json(posts);
}

export default getPost;