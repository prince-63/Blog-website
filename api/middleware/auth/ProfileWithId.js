import User from "../../model/User.js";

const profileWithId = async (req, res) => {
    const id = req.params.id;

    const userResponse = {
        id: String,
        username: String
    }

    try {
        const info = await User.findById(id);
        if (!info) {
            return res.status(404).json({ message: 'Post not found' });
        }

        userResponse['id'] = info.id;
        userResponse['username'] = info.username;
        res.status(200).json(userResponse);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export default profileWithId;