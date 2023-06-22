import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Time to Travel.svg';

const Footer = () => {
    return (
        <div className='bg-black'>
            <footer className="footer p-10 container mx-auto text-[#ccc]">
                <div >
                    <div >
                        <img className='h-16' src={logo} alt="" />
                    </div>
                    <p className='text-start mt-5'>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title font-bold font-sans text-lg uppercase tracking-wider">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title font-bold font-sans text-lg uppercase tracking-wider">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title font-bold font-sans text-lg uppercase tracking-wider">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
        </div>

    );
};

export default Footer;