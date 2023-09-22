import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink className="link" to="/">
                    Home
                </NavLink>

                <NavLink className="link" to="/Movies">
                    Movies
                </NavLink>

                <NavLink className="link" to="/Serials">
                    Serials
                </NavLink>
            </nav>
        </header>
    )
}

export default Navbar
