import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BookOpenIcon } from '@heroicons/react/24/solid'
import { XMarkIcon , Bars4Icon } from '@heroicons/react/24/solid'
import './Nav.css'

const Nav = () => {
    const [navigation,setNavigation] = useState(false)
    
    return (
        <div className='flex justify-between items-center bg-gray-200 p-6'>
            <Link to='/' className='inline-flex items-center gap-3'>
                <BookOpenIcon className="h-8 w-8 text-blue-500" />
                <h2 className='text-2xl font-semibold'>BookShop</h2>
            </Link>

            <div>
            <div className='block lg:hidden relative'>
                {
                    navigation ? <Bars4Icon onClick={()=> setNavigation(!navigation)} className='w-8 h-8 cursor-pointer'></Bars4Icon> : <XMarkIcon onClick={()=> setNavigation(!navigation)} className='w-8 h-8 cursor-pointer'></XMarkIcon>
                }
            </div>
            <div className={`absolute ${navigation ? 'top-20' : '-top-40'} duration-200 md:static inline-flex flex-col md:flex-row gap-7 font-semibold`}>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Home
                </NavLink>
                <NavLink
                    to="/books"
                    className={({ isActive }) => isActive ? "active" : ""}>
                    Books
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) => isActive ? "active" : ""}>
                    About us
                </NavLink>
            </div>
            </div>
        </div>
    );
};

export default Nav;