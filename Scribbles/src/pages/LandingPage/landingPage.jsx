/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './assets/Logo1.png';
import { FaArrowRight } from 'react-icons/fa';
import background from './assets/bg.png';
import Features from '../Features/Features';
import Footer from '../Footer/footer';

const LandingPage = () => {
  const location = useLocation();
  
  return (
  <>
    {/* Navbar */}
    <div className="navbar bg-scribbles-light shadow px-5 fixed top-0 left-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a href='#Home' className={`${window.location.hash === '#Home' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Home</a></li>
            <li><a href='#Features' className={`${window.location.hash === '#Features' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Features</a></li>
          </ul>
        </div>
        <img src={Logo} alt="Logo" className="w-40" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='#Home' className={`${window.location.hash === '#Home' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Home</a></li>
          <li><a href='#Features' className={`${window.location.hash === '#Features' ? 'font-medium bg-scribbles-dark-purple text-white' : 'text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white'}`}>Features</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-scribbles-dark-purple text-white hover:bg-scribbles-purple hover:text-white">Login</Link>
      </div>
    </div>

    {/* Home  */}
    <div id='Home' className="flex h-screen " style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-5/12 flex items-center justify-center pl-40">
        <div className="text-start">
          <h1 className="font-playfair text-7xl text-yellow-100 font-bold mb-5">Welcome to <div className="mt-2">Scribbles!</div></h1>
          <p className="text-lg text-white mb-5">Discover a world of journaling. Explore your thoughts, memories, and dreams in a space designed just for you.</p>
          <p className="text-lg text-white mb-2">Create your first entry today!</p>
          <button className="bg-scribbles-light-purple hover:bg-scribbles-dark-purple text-white font-semibold py-2 px-4 rounded-lg mt-3 flex items-center">
            <Link to='/mainpage'>
              Get Started
            </Link>
            <FaArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>

    {/* Features */}
    <Features />

    {/* Footer */}
    <Footer />
  </>
  );
};

export default LandingPage;
