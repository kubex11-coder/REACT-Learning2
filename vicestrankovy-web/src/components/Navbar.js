import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <br />

                <NavLink to="/Movies">Movies</NavLink>
                <br />

                <NavLink to="/Serials">Serials</NavLink>
            </nav>
        </header>
    )
}

export default Navbar
