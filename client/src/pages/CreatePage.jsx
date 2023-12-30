import React, { useState } from "react";

const CreatePage = () => {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [file, setFile] = useState("");
    const [content, setContent] = useState("");

    function createNewPost(event) {
        const data = new FormData();
        data.set("title", title);
        data.set("summary", summary);
        data.set("file", file[0]);
        data.set("content", content);
        event.preventDefault();

        const response = fetch("http://localhost:4000/blog/post", {
            method: "POST",
            body: data,
            credentials: "include",
        });
        if (response.ok) {
            alert("POST CREATED.");
        }
    }

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
                name="file"
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
