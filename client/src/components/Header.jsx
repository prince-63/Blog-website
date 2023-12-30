import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/" className="logo">
                MyBlog
            </Link>
            <nav>
                {/* {username && (
                    <>
                        <Link to="/create">Create new post</Link>
                        <a onClick={logout}>Logout ({username})</a>
                    </>
                )}
                {!username && ( */}
                <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </>
                {/* )} */}
            </nav>
        </header>
    );
}
