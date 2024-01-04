import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        fetch(`http://localhost:4000/user/profile/${author}`, {
            credentials: "include",
        }).then((responce) =>
            responce.json().then((info) => setUsername(info.username))
        );
    }, []);

    return (
        <div className="post_section">
            <div className="post_image">
                <img src={`http://localhost:4000/${cover}`} alt={title} />
            </div>
            <div className="post_content">
                <Link to={`/post/${_id}`}>
                    <h4>{title}</h4>
                </Link>
                <p>
                    {summary.slice(0, 70)}{" "}
                    <Link style={{ color: "blue" }} to={`/post/${_id}`}>
                        ...read more
                    </Link>
                </p>
                <p>
                    <strong>user:</strong> {username}
                </p>
            </div>
        </div>
    );
};

export default Post;
