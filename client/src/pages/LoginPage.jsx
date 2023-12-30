import React, { useContext, useState } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    async function login(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
            credentials: "include",
        });

        if (response.status === 200) {
            response.json().then((userInformation) => {
                setUserInfo(userInformation);
            });
            setRedirect(true);
            alert("LOGIN SUCESSFULL.");
        } else {
            alert("LOGIN FAILED.");
        }
    }

    if (redirect) {
        return <Navigate to={"/create"} />;
    }

    return (
        <form onSubmit={login}>
            <h1>login</h1>
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
            <button>login</button>
        </form>
    );
};

export default LoginPage;
