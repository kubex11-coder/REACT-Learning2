import "./navbar.css"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa"
import { motion } from "framer-motion"

const Navbar = () => {
    return (
        <div className="navbar">
            {/*Sidebar*/}
            <div className="wrapper">
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    Jakub Dvořák
                </motion.span>
                <div className="social">
                    <a href="#">
                        <FaFacebookF />
                    </a>
                    <a href="#">
                        <FaInstagram />
                    </a>
                    <a href="#">
                        <FaYoutube />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar
