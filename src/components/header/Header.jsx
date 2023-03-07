import React from 'react' 
import { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import './header.scss'

function Header({ isOpen, setIsActive }) {
    const [ activeBurger, setActiveBurger ] = useState(false)
    let newDate = new Date()

    function handleChange(event) {
        setIsActive(event.target.value)
        setActiveBurger(!activeBurger)
    }

  return (
    <header className={`header ${ isOpen ? 'active' : '' }`}>
        <div className="image-wrapper">

        </div>
        <nav className="header-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link className="nav-item-link" onClick={handleChange} to="/">main</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" onClick={handleChange} to="/aboutme">about me</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" onClick={handleChange} to="/resume">resume</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" onClick={handleChange} to="/projects">projects</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-item-link" onClick={handleChange} to="/contacts">contacts</Link>
                </li>
            </ul>
        </nav>
        <div className='header-year'>@{newDate.getFullYear()} George</div>
        <Outlet />
    </header>
  )
}

export default Header