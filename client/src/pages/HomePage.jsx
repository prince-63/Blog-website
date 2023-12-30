import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
    // const [posts, setPost] = useState([]);
    // useEffect(() => {
    //     fetch("http://localhost:4000/blog/post").then((response) =>
    //         response.json().then((posts) => {
    //             setPost(posts);
    //         })
    //     );
    // }, []);

    console.log(posts)
    return (
        <>
            <div>Home page</div>
            <br />
            <Link to={"/login"}>Login</Link>
            <br />
            <Link to={"/register"}>Register</Link>
            <div>
               {/* {
                    posts.map(post => {
                        return <div>
                            <div>{
                                post.title
                            }</div>
                            <div>
                                {post.content}
                            </div>
                            <div>
                                <img src={post.cover} alt={post.cover} />
                            </div>
                        </div>
                    })
               } */}
            </div>
        </>
    );
};

export default HomePage;
