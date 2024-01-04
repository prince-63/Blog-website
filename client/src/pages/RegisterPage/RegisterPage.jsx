import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import "./registerPage.css";

const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function register(event) {
        event.preventDefault();
        const response = await fetch("http://localhost:4000/user/register", {
            method: "POST",
            body: JSON.stringify({ name, username, email, password}),
            headers: { "Content-Type": "application/json" },
        });

        if (response.status === 200) {
            setRedirect(true);
        } else {
            alert("REGISTRATION FAILED.");
        }
    }

    if (redirect) {
        return <Navigate to={"/login"} />;
    }
    return (
        <div className="register_page">
            <div className="register_container">
                <div className="form_container">
                    <form onSubmit={register}>
                        <div>
                            <input
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={(event) =>
                                    setName(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={(event) =>
                                    setUsername(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="email"
                                name="email"
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="password"
                                name="password"
                                onChange={(event) =>
                                    setPassword(event.target.value)
                                }
                                required
                            />
                        </div>
                        <div>
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
                <div>
                    <span>
                        Already have an account?{" "}
                        <Link to={"/login"}>Login</Link>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
