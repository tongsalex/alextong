import React from 'react';
import './Navbar.css'

const navbar = props => (
    <header className="navbar">
            <div href="/" className="navbar__logo__container">
                <a href="/" className="navbar__logo">
                    <b><span>a</span><span>T</span></b>
                </a>
            </div>
            {/* <ul className="navbar__links">
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Projects</a></li>
                <li><a href="/">Social</a></li>
                <li><a href="/">Contact</a></li>
            </ul> */}
    </header>
);

export default navbar;