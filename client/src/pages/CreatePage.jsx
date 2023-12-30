/*import React, { useState } from "react";

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [file, setFile] = useState("");
    const [content, setContent] = useState("");

    async function createNewPost(event) {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("file", file[0]);
        data.set("content", content);
        event.preventDefault();

        const response = await fetch("http://localhost:4000/post", {
            method: "POST",
            body: data,
            credentials: "include",
        });
        if (response.ok) {
            alert("POST CREATED.");
        }
    }

    console.log(file);

    return (
        <form onSubmit={createNewPost}>
            <input
                type="title"
                placeholder="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input
                type="summary"
                placeholder="summary"
                value={summary}
                onChange={(event) => setSummary(event.target.value)}
            />
            <input
                type="file"
                placeholder="file"
                value={file}
                onChange={(event) => setFile(event.target.value)}
            />
            <input
                type="text"
                placeholder="content"
                value={content}
                onChange={(event) => setContent(event.target.value)}
            />
            <button>post</button>
        </form>
    );
};

export default CreatePage;

*/

import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../components/Editor";

export default function CreatePost() {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [content, setContent] = useState("");
    const [files, setFiles] = useState("");
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("content", content);
        data.set("file", files[0]);
        ev.preventDefault();
        const response = await fetch("http://localhost:4000/blog/post", {
            method: "POST",
            body: data,
            credentials: "include",
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }
    return (
        <form onSubmit={createNewPost} >
            <input
                type="title"
                placeholder={"Title"}
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
                type="summary"
                placeholder={"Summary"}
                value={summary}
                onChange={(ev) => setSummary(ev.target.value)}
            />
            <input type="file" name="file" onChange={(ev) => setFiles(ev.target.files)} />
            <Editor value={content} onChange={setContent} />
            <button style={{ marginTop: "5px" }}>Create post</button>
        </form>
    );
}
