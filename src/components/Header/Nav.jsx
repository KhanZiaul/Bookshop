import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BookOpenIcon} from '@heroicons/react/24/solid'
import './Nav.css'

const Nav = () => {
    return (
        <div className='flex justify-between items-center bg-gray-200 p-6'>
            <Link to='/' className='inline-flex items-center gap-3'>
                <BookOpenIcon className="h-8 w-8 text-blue-500" />
                <h2 className='text-2xl font-semibold'>BookShoop</h2>
            </Link>

        <div className='inline-flex gap-7 font-semibold'>
        <NavLink
        to="/"
        className={({ isActive}) => isActive ? "active" : ""}>
        Home
        </NavLink>
        <NavLink
        to="/books"
        className={({ isActive}) => isActive ? "active" : ""}>
        Books
        </NavLink>
        <NavLink
        to="/about"
        className={({ isActive}) => isActive ? "active" : ""}>
        About us
        </NavLink>
        </div>
        </div>
    );
};

export default Nav;