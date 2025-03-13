import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Kasa Logo" className="logo" />
            <nav className="nav">
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                    A Propos
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
