import { Link } from "react-router-dom";

function Header({ isLoggedIn }) {
    return (
        <>
            <nav className="mb-4 p-2 bg-blue-500">
                <ul className="flex gap-4 items-start p-4">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    {/* isLoggedIn이 false일 때만 Register 링크 표시 */}
                    {!isLoggedIn && (
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    )}
                </ul>
            </nav>
        </>
    );
}

export default Header;