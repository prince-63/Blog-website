import React, { useContext, useState } from "react";
import { UserContext } from "../../components/UserContext";
import { Link, Navigate } from "react-router-dom";
import "./loginPage.css";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [isLogin, setLogin] = useState(false);
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
        } else {
            alert("LOGIN FAILED.");
            setLogin(true);
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    if (isLogin) {
        return <Navigate to={"/register"} />;
    }

    return (
        <div className="login_page">
            <div className="login_container">
                <div className="form_container">
                    <form onSubmit={login}>
                        <div>
                            <input
                                type="text"
                                placeholder="username"
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Login</button>
                        </div>
                    </form>
                </div>
                <div>
                    <span>
                        You have no account?{" "}
                        <Link to={"/register"}>Register</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
