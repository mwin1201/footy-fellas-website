import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";
import { ReactComponent as FFLogo } from "../../assets/FF_logo.svg";

const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
    };

    return (
        <header>
            <Link to="/" id="logo">
                <FFLogo />
            </Link>

            <nav>
                {Auth.loggedIn() ? (
                    <>
                        <Link to="/dashboard">Dashboard</Link>
                        <a href="/" onClick={logout}>Logout</a>
                    </>
                ) : (
                    <>
                        <Link to="/signup">Sign-Up</Link>
                        <Link to="/login">Login</Link>
                    </>
                )}
            </nav>
        </header>
    );
};

export default Header;