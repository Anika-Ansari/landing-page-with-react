import React from "react";
import Logo from "../images/logo.png";


function Navbar() {
    return (
        <div>
            <div className="nav">
                <img src={Logo} alt="Logo" />
                {/* Hamburger Menu Toggle */}
                <input type="checkbox" id="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
                <ul className="list">
                    <li><a href="#">HOME</a></li>
                    <li><a href="#">ABOUT</a></li>
                    <li><a href="#">WORKS</a></li>
                    <li><a href="#">SERVICES</a></li>
                    <li><a href="#">TESTIMONIAL</a></li>
                    <li><a href="#">BLOG</a></li>
                    <li><a href="#">CONTACT</a></li>
                </ul>
                <div className="btn">
                    <button>
                        Let's Talk <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar;