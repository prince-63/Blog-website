import React, { useEffect, useState } from "react";
import Post from "../components/Post";

const HomePage = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/blog/post").then((response) =>
            response.json().then((posts) => {
                setPost(posts);
            })
        );
    }, []);

    console.log(posts);
    return (
        <div>
            {posts.map((post) => (
                <Post key={post._id} {...post} />
            ))}
        </div>
    );
};

export default HomePage;
