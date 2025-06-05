import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail, MdLocationOn, MdAccessTime } from 'react-icons/md';
import '../styles/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(prev => !prev);
  };

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
          <a href="tel:+250799399719">
            <FaPhoneAlt style={{ color: '#43b3ee', marginRight: '8px' }} />
            <span>+250 799 399 719</span>
          </a>
        </div>

        <div className="contact-block">
          <a href="https://wa.me/250799399719">
            <IoLogoWhatsapp style={{ color: '#60d669', marginRight: '8px' }} />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="contact-block">
          <a href="mailto:carprof.ee@gmail.com">
            <MdEmail style={{ color: '#2aabee', marginRight: '8px' }} />
            <span>carprof.ee@gmail.com</span>
          </a>
        </div>

        <div className="contact">
          <MdLocationOn className="contact-icon" style={{ color: '#666' }} />
          Peterburi tee 71, Tallinn
        </div>
        <div className="contact">
          <MdAccessTime className="contact-icon" style={{ color: '#666' }} />
          10:00 - 19:00
        </div>
      </div>
      <div className={`nav-center ${menuOpen ? 'active' : ''}`}>
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
              Insurance claim handling
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacts" className={({ isActive }) => isActive ? "links active" : "links"}>
              Contacts
            </NavLink>
          </li>
        </ul>
      </div>



      <div className="hamburger" onClick={toggleNav}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
