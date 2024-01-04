import Post from "../../model/Post.js"

const GetPost = async (req, res) => {
    const id = req.params.id; // Assuming your parameter is named "id"

    try {
        const postDocument = await Post.findById(id);

        if (!postDocument) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(postDocument);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default GetPost;
