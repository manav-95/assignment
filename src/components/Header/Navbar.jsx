import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const closeDrawer = () => {
        setDrawerOpen(false);
    };

    const navItems = (
        <>
            <li>
                <NavLink to="/" className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-5 px-3" : "py-5 px-3 text-black hover:text-[#ff4122] duration-200 ease-in-out"
                )}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-5 px-3" : "py-5 px-3 text-black hover:text-[#ff4122] duration-200 ease-in-out"
                )}
                >
                    About
                </NavLink>
            </li>
        
            <li>
                <NavLink to="/contactUsPage" className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-5 px-3" : "py-5 px-3 text-black hover:text-[#ff4122] duration-200 ease-in-out"
                )}
                >
                    Contact
                </NavLink>
            </li>
        </>
    )

    const navMobileItems = (
        <>
            <li>
                <NavLink to="/" onClick={closeDrawer} className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-4 px-28  border-b-2 rounded border-[#ff4122] text-center  block" : "py-4 px-28 hover:border-[#ff4122] duration-200 border-b-2 text-center  block text-black hover:text-[#ff4122] ease-in-out"
                )}
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/aboutUs" onClick={closeDrawer} className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-4 px-28  border-b-2 rounded border-[#ff4122] text-center  block" : "py-4 px-28 hover:border-[#ff4122] duration-200 border-b-2 text-center  block text-black hover:text-[#ff4122] ease-in-out"
                )}
                >
                    About
                </NavLink>
            </li>
         
            <li>
                <NavLink to="/contactUsPage" onClick={closeDrawer} className={({ isActive }) => (
                    isActive ? "text-[#ff4122] py-4 px-28  border-b-2 rounded border-[#ff4122] text-center  block" : "py-4 px-28 hover:border-[#ff4122] duration-200 border-b-2 text-center  block text-black hover:text-[#ff4122] ease-in-out"
                )}
                >
                    Contact
                </NavLink>
            </li>
        </>
    )

    return (
        <div className='navbar bg-base-100 shadow-md fixed left-0 top-0 right-0 z-50'>
            <div className='navbar-start items-end flex'>
                <img className='w-10 h-10 md:ml-8 ml-2 mr-0' src="https://png.pngtree.com/png-clipart/20230105/original/pngtree-school-logo-design-png-image_8873860.png" alt="logo" />
                <a className='btn btn-ghost hover:bg-inherit text-xl font-semibold'>Springdale</a>
            </div>
            <div className='navbar-end hidden lg:flex'>
                <ul className='menu-horizontal px-5  font-semibold'>
                    {navItems}
                </ul>
            </div>
            <button onClick={toggleDrawer} className='btn btn-ghost lg:hidden ml-auto'><MenuIcon className="h-6 w-6" /></button>

            {/* Drawer */}
            <div className={`fixed inset-0 z-40 bg-black bg-opacity-50 transistion-opacity ${drawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={closeDrawer}>
            </div>

            <div className={`fixed top-0 right-0 z-50 h-full w-72 bg-base-100 transform ${drawerOpen ? 'translate-x-0' : 'translate-x-full'} transistion-transform duration-300 flex-col`}>
            <button className='btn btn-ghost lg:hidden absolute top-4 right-4'><XIcon onClick={closeDrawer} className='h-7 w-7' /></button>
            <ul className='menu-vertical py-10 font-semibold'>
                {navMobileItems}
            </ul>
            </div>
        </div>
    )
}

export default Navbar
