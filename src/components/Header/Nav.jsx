import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

const Nav = () => {
    return (
        <div className='inline-flex gap-7 font-semibold'>
        <NavLink
        to="/"
        className={({ isActive}) => isActive ? "active" : ""}>
        Home
        </NavLink>
        <NavLink
        to="/"
        className={({ isActive}) => isActive ? "active" : ""}>
        Books
        </NavLink>
        <NavLink
        to="/about"
        className={({ isActive}) => isActive ? "active" : ""}>
        About us
        </NavLink>
        </div>
    );
};

export default Nav;