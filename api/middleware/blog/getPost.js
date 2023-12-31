import post from "../../model/post.js"

const getPost = async (req, res) => {
    const id = req.params.id; // Assuming your parameter is named "id"
    console.log(id);

    try {
        const postDocument = await post.findById(id);

        if (!postDocument) {
            return res.status(404).json({ message: 'Post not found' });
        }

        res.json(postDocument);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default getPost;
