import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const PostPage = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`http://localhost:4000/blog/post/${id}`, {
            credentials: "include",
        }).then((responce) => {
            responce.json().then((postInfo) => {
                setPost(postInfo);
            });
        });
    }, []);

    if (!post) {
        return "";
    }

    const splitedContent = post.content.split("<pre>");
    console.log(post.content.split("<pre>"));

    console.log(post);
    return (
        <>
            <div className="post_container">
                <div className="post_section">
                    <div className="post_image">
                        <img
                            src={`http://localhost:4000/${post.cover}`}
                            alt="not present"
                        />
                    </div>
                    <div className="post_content">
                        <h4>{post.title}</h4>

                        {splitedContent}
                        <SyntaxHighlighter language="c" style={docco}>
                            {splitedContent}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostPage;
