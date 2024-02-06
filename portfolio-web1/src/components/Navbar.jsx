import "./navbar.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar">
      {/*Sidebar*/}
      <div className="wrapper">
        <span>Jakub Dvořák</span>
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
  );
};

export default Navbar;
