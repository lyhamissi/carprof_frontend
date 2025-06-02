import React from 'react';
import '../styles/contacts.css';
import contact from '../assets/main-contacts1.avif';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaWaze, FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Contacts = () => {
    return (
        <div className="contacts-wrapper">
            <h2>Our Contacts</h2>

            <div className="contacts-container">
                <button className="section-tag">Car Showroom</button>

                <img src={contact} alt="Contact Location" className="contact-image" />

                <div className="section">
                    <h4>Address</h4>
                    <p>CarProf is located to the left of the Ehituse ABC building store.</p>
                    <a href="#" className="map-link">View on Map</a>

                    <div className="map-buttons">
                        <button className="map-btn google"><MdLocationPin /> Google Maps</button>
                        <button className="map-btn waze"><FaWaze /> Waze Maps</button>
                    </div>
                </div>

                <div className="section">
                    <h4>Working Hours</h4>
                    <div className="working-hours">
                        <div className="day-column">
                            <p>Monday–Friday</p>
                            <p>Saturday</p>
                            <p>Sunday</p>
                        </div>
                        <div className="time-column">
                            <p>10:00–19:00</p>
                            <p>10:00–16:00</p>
                            <p>Closed</p>
                        </div>
                    </div>
                </div>

                <div className="section">
                    <h4>Telephone & Email</h4>
                    <div className="contact-buttons">
                        <button><FaPhoneAlt className="icon blue" /> +250 799 399 719</button>
                        <button><IoLogoWhatsapp className="icon green" /> WhatsApp</button>
                        <button><MdEmail className="icon email" /> carprof.ee@gmail.com</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
