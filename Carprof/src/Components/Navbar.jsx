import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import { FaPhoneAlt } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
import '../styles/navbar.css'
import { IoLogoWhatsapp } from 'react-icons/io';

const Navbar = () => {
    return (
        <nav className="nav">
            <div className="nav-left">
                <div className="nav-logo">
                    <img src={logo} alt="Logo" id="logo" />
                    <span>CARPROF</span>
                </div>
            </div>
            <div className="nav-right">
                <div className="contact-block">
                    <FaPhoneAlt style={{ color: '#43b3ee' }} />
                    <span>+250 799 399 719</span>
                </div>
                <div className="contact-block">
                    <IoLogoWhatsapp style={{ color: '#60d669' }} />
                    <span>WhatsApp</span>
                </div>
                <div className="contact-block">
                    <MdEmail style={{ color: '#2aabee' }} />
                    <span>carprof.ee@gmail.com</span>
                </div>
                <div className="contact">
                    <MdLocationOn className="contact-icon" style={{color:'#666'}} />
                    Peterburi tee 71, Tallinn
                </div>
                <div className="contact">
                    <MdAccessTime className="contact-icon" style={{color:'#666'}} />
                    10:00 - 19:00
                </div>
            </div>
            <div className="nav-center">
                <ul className="nav-links">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "links active" : "links"}>
                            Buy a car
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-buyback" className={({ isActive }) => isActive ? "links active" : "links"}>
                            Sell a car
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/car-consignment-sale" className={({ isActive }) => isActive ? "links active" : "links"}>
                            Consignment sale
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/damage-assessment" className={({ isActive }) => isActive ? "links active" : "links"}>
                            Insurance claim handing
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({ isActive }) => isActive ? "links active" : "links"}>
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </div>


        </nav>
    );
};

export default Navbar;
