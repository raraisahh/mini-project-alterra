/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/Logo1.png';

const Navbar = () => {
    const location = useLocation();

    return(
    <>
        <div className="navbar bg-scribbles-light shadow px-5 fixed top-0 left-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/mainpage' className={`${location.pathname === '/mainpage' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`} >Diary</Link></li>
                        <li><Link to='/diarylist' className={`${location.pathname === '/diarylist' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Diary List</Link></li>
                    </ul>
                </div>
                <img src={Logo} alt="Logo" className="w-40" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/mainpage' className={`${location.pathname === '/mainpage' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Diary</Link></li>
                    <li><Link to='/diarylist' className={`${location.pathname === '/diarylist' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Diary List</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/cs' className="btn bg-scribbles-dark-purple text-white hover:bg-scribbles-purple hover:text-white">Chat</Link>
            </div>
        </div>
    </>
    );
}

export default Navbar;