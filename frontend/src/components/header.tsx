
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg"; // Asegúrate de que la ruta es correcta
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Kasa Logo" className="logo" />
            <nav className="nav">
                <NavLink to="/" className="nav-link" activeClassName="active">Accueil</NavLink>
                <NavLink to="/about" className="nav-link" activeClassName="active">A Propos</NavLink>
            </nav>
        </header>
    );
};

export default Header;
