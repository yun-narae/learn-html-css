import { Link } from "react-router-dom";
import pb from "../lib/pocketbase";

function Header({ isLoggedIn }) {

    const user = pb.authStore.model;

    return (
        <>
            <nav className="mb-4 p-2 bg-blue-500">
                <ul className="flex gap-4 items-start p-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/fileList">FileList</Link>
                    </li>
                    {!isLoggedIn && (
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    )}
                    {!isLoggedIn && (
                        <li>
                            <Link to="/register">Register</Link>
                        </li>
                    )}
                    {isLoggedIn && user && (
                    <li>
                        <p>{user.name}님 안녕하세요</p>
                    </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Header;