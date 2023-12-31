import { Link } from "react-router-dom";
import "./header.css";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        fetch("http://localhost:4000/user/profile", {
            credentials: "include",
        }).then((response) => {
            response.json().then((userInfo) => {
                setUserInfo(userInfo);
            });
        });
    }, []);

    async function logout() {
        fetch("http://localhost:4000/user/logout", {
            method: "POST",
            credentials: "include",
        });

        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <nav>
                <div>
                    <ul className="list">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className="list">
                        {username && (
                            <>
                                <li>
                                    <Link to="/create">Create Post</Link>
                                </li>
                                <li>
                                    <a onClick={logout}>logout</a>
                                </li>
                            </>
                        )}
                        {!username && (
                            <>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    );
}
