import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function register(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/user/register", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) {
            setRedirect(true);
            alert("REGISTRATION SUCCESS.");
        } else {
            alert("REGISTRATION FAILED.");
        }
    }

    if (redirect) {
        return <Navigate to={"/login"} />;
    }
    return (
        <form onSubmit={register}>
            <h1>Register</h1>
            <input
                type="text"
                placeholder="username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <button>Register</button>
        </form>
    );
};

export default RegisterPage;
