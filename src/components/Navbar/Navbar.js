import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css'

const Navbar = props => (
    <header className="navbar">
            <div href="/" className="navbar__logo__container">
                <a href="/" className="navbar__logo">
                    <b><span>a</span><span>T</span></b>
                </a>
                <h1 className="navbar__subtitle">Software Engineer</h1>
            </div>
            <ul className="navbar__links">
                <NavLink className="navbar__navLink" to="/projects">projects</NavLink>
                <NavLink className="navbar__navLink" to="/about">about</NavLink>
                <a href="https://drive.google.com/file/d/1aHdNKavYJBo7Bhip8FfhLRI-XzzR0hOe/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="navbar__navLink" >resume</a>
                <NavLink className="navbar__navLink" to="/contact">contact</NavLink>
            </ul>
    </header>
);

export default Navbar;