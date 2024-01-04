import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import "./homepage.css";

const HomePage = () => {
    const [posts, setPost] = useState([]);
    useEffect(() => {
        fetch("http://localhost:4000/blog/post").then((response) =>
            response.json().then((posts) => {
                setPost(posts);
            })
        );
    }, []);

    return (
        <div className="homepage_container">
            {posts.map((post) => (
                <Post key={post._id} {...post} />
            ))}
        </div>
    );
};

export default HomePage;
