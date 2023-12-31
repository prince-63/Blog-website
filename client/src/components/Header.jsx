import { Link } from "react-router-dom";
import "./header.css";

export default function Header() {
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
                        <li>
                            <Link to="/create">Create Post</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
