/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './assets/Logo1.png';
import { FaArrowRight } from 'react-icons/fa';
import { MdAddCircleOutline, MdList, MdChat } from 'react-icons/md'; 
import background from './assets/bg.png';
import Footer from '../Footer/footer';

const LandingPage = () => {
  
  return (
  <>
    {/* Navbar */}
    <div className="navbar bg-scribbles-light shadow px-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/' className="text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white">Home</Link></li>
            <li><a href='#Features' className="text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white">Features</a></li>
          </ul>
        </div>
        <img src={Logo} alt="Logo" className="w-40" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/' className="text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white">Home</Link></li>
          <li><a href='#Features' className="text-scribbles-dark-purple font-medium hover:bg-scribbles-dark-purple hover:text-white">Features</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className="btn bg-scribbles-dark-purple text-white hover:bg-scribbles-purple hover:text-white">Login</Link>
      </div>
    </div>

    {/* Home  */}
    <div className="flex h-screen" style={{ background: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="w-5/12 flex items-center justify-center pl-40">
        <div className="text-start">
          <h1 className="font-playfair text-7xl text-yellow-100 font-bold mb-5">Welcome to <div className="mt-2">Scribbles!</div></h1>
          <p className="text-lg text-white mb-5">Discover a world of journaling. Explore your thoughts, memories, and dreams in a space designed just for you.</p>
          <p className="text-lg text-white mb-2">Create your first entry today!</p>
          <button className="bg-scribbles-light-purple hover:bg-scribbles-dark-purple text-white font-semibold py-2 px-4 rounded-lg mt-3 flex items-center">
            Get Started
            <FaArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </div>

    {/* Features */}
    <div id='Features' className="bg-scribbles-light">
      <div className="pt-16 flex flex-col items-center">
        <h1 className="font-playfair text-4xl font-bold text-scribbles-dark-purple mb-3">FEATURES</h1>
        <p className="text-lg text-center font-semibold text-scribbles-dark-purple opacity-90 mb-12 w-1/2">Explore the features of Scribbles that make journaling easy and delightful.</p>
      </div>
      <div className="px-40 flex gap-12 items-center justify-center pb-16">
        <div className="card shadow-lg w-1/2">
          <figure className="px-10 pt-10">
            <MdAddCircleOutline className="w-16 h-16 text-scribbles-dark-purple" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Add, Edit, Delete Notes</h2>
            <p className="text-center text-scribbles-dark-purple opacity-90">Easily add, edit, and delete your notes to keep them organized.</p>
          </div>
        </div>

        <div className="card shadow-lg w-1/2">
          <figure className="px-10 pt-10">
            <MdList className="w-16 h-16 text-scribbles-dark-purple" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Notes List</h2>
            <p className="text-center text-scribbles-dark-purple opacity-90">View all your notes in a list for easy access and management.</p>
          </div>
        </div>
            
        <div className="card shadow-lg w-1/2">
          <figure className="px-10 pt-10">
            <MdChat className="w-16 h-16 text-scribbles-dark-purple" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl font-semibold text-scribbles-dark-purple mb-2">Chat with CS</h2>
            <p className="text-center text-scribbles-dark-purple opacity-90">Chat or confide in a customer service representative (psychologist) for support.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Footer */}
    <Footer />
  </>
  );
};

export default LandingPage;
