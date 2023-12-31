import React from "react";
import { Link } from "react-router-dom";
import "./post.css";

const Post = ({ _id, title, summary, cover, content, createdAt, author }) => {
    console.log(title);
    return (
        <div className="post_container">
            <div className="post_section">
                <div className="post_image">
                    <img
                        src={`http://localhost:4000/${cover}`}
                        alt="not present"
                    />
                </div>
                <div className="post_content">
                    <Link to={`/post/${_id}`}><h4>{title}</h4></Link>
                    <p>{summary}</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
