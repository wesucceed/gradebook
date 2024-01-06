import React from "react";
import {Link} from 'react-router-dom';
import './NavBar.css'




const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="MenuItem">
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/services">Services</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>

            <button className="HireMeButton">Hire Me</button>

        </div>
    )
}

export default NavBar;


