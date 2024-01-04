import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import Editor from "../../components/Editor";
import "./createPage.css";

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
        <div className="create_page">
            <div className="create_page_form_container">
                <div className="create_page_title">
                    <h4>Create Post</h4>
                </div>
                <form onSubmit={createNewPost}>
                    <div>
                        <input
                            type="title"
                            placeholder={"Title"}
                            value={title}
                            onChange={(ev) => setTitle(ev.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="summary"
                            placeholder={"Summary"}
                            value={summary}
                            onChange={(ev) => setSummary(ev.target.value)}
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name="file"
                            onChange={(ev) => setFiles(ev.target.files)}
                        />
                    </div>
                    <div>
                        <Editor value={content} onChange={setContent} />
                    </div>
                    <div>
                        <button style={{ marginTop: "5px" }}>
                            Create post
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
