import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Time to Travel.svg';
import { HiOutlineMenu } from 'react-icons/hi';

const Header = () => {
    const menuItems = <>
        <li><Link to="/" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Home</Link></li>
        <li><Link to="/destinations" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Destinations</Link></li>
        <li><Link to="/gallery" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Gallery</Link></li>
        <li><Link to="/blog" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Blog</Link></li>
        <li><Link to="/about" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>About</Link></li>
        <li><Link to="/contact" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Contact</Link></li>
    </>
    return (
        <div className='bg-black sticky top-0 z-50'>
            <div className="navbar container mx-auto">
                <div className="navbar">
                    <div className="navbar w-full justify-between lg:justify-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-outline lg:hidden">
                                <HiOutlineMenu className='text-white text-lg' />
                                {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52">
                                {menuItems}
                            </ul>
                        </div>
                        <Link to='/'>
                            <img className='h-12' src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {menuItems}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;