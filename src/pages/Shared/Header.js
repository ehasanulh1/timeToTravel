import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Time to Travel.svg';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaTwitter } from 'react-icons/fa';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(e => console.error(e))
    }
    const menuItems = <>
        <li><Link to="/" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Home</Link></li>
        <li><Link to="/destinations" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Destinations</Link></li>
        {user?.uid ?
            <>
                <li><Link to='/myReviews' className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>My Reviews</Link></li>
                <li><Link to='/addDestination' className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Add Destination</Link></li>
            </>
            : <span></span>
        }
        <li><Link to="/blog" className='tracking-widest uppercase font-semibold text-white hover:text-yellow-500 text-sm px-8'>Blog</Link></li>
    </>
    return (
        <div className='bg-black sticky top-0 z-50'>
            <div className='container mx-auto h-11 flex items-center justify-between'>
                <div className='flex items-center gap-6 ml-6'>
                    <Link to='/'><FaFacebookF className='text-sm text-gray-500 hover:text-yellow-500' /></Link>
                    <Link to='/'><FaInstagram className='text-sm text-gray-500 hover:text-yellow-500' /></Link>
                    <Link to='/'><FaTwitter className='text-sm text-gray-500 hover:text-yellow-500' /></Link>
                    <Link to='/'><FaGooglePlusG className='text-lg text-gray-500 hover:text-yellow-500' /></Link>
                </div>
                <div className='md:mr-5 lg:mr-14'>
                    {
                        user?.uid ?
                            <div>
                                <Link to='/' className='leading-3 text-xs uppercase  text-white hover:text-yellow-500 mr-6'>{user?.displayName}</Link>
                                <Link onClick={handleLogOut} to='/' className='leading-3 text-xs uppercase  text-white hover:text-yellow-500'>Logout</Link>
                            </div>
                            :
                            <div className='flex gap-8 list-none'>
                                <li><Link to="/login" className='leading-3 text-xs uppercase  text-white hover:text-yellow-500'>Login</Link></li>
                                <li><Link to="/register" className='leading-3 text-xs uppercase  text-white hover:text-yellow-500'>Register</Link></li>
                            </div>
                    }
                </div>
            </div>
            <div className="divider h-[1px] bg-gray-800 m-0"></div>
            <div className="navbar container mx-auto">
                <div className="navbar">
                    <div className="navbar w-full justify-between lg:justify-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-outline lg:hidden">
                                <HiOutlineMenu className='text-white text-lg' />
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