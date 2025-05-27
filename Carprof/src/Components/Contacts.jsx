import React from 'react';
import '../styles/contacts.css';
import contact from '../assets/main-contacts1.avif';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { FaWaze } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contacts = () => {
    return (
        <div className="contacts-wrapper">
            <h2>Our Contacts</h2>

            <div className="contacts-container">
                <button>Car showroom</button>
                <img src={contact} alt="Contact" />
                <h4>Address:</h4>
                <a href="#">View on Map</a>
                <p>CarProf is located to the left of the Ehituse ABC building store.</p>
                <div className="buttons">
                    <button style={{ backgroundColor: '#34a853' }}><MdLocationPin/>Google Maps</button>
                    <button style={{ backgroundColor: '#33ccff' }}><FaWaze/>Waze Maps</button>
                </div>
                <h4>Working Hours:</h4>
                Monday-Friday               10:00-19:00
                Saturday                        10:00-16:00
                Sunday                            Closed

                <h4>Telephone and e-mail:</h4>
                <div className="buttonss">
                    <button style={{backgroundColor:'#f2f2f2', color:'black'}}> <FaPhoneAlt  style={{color: '#43b3ee'}}/>+250 </button>
                    <button style={{backgroundColor:'#f2f2f2' , color:'black'}}>  <IoLogoWhatsapp style={{color: '#60d669'}} />WhatsApp</button>
                    <button style={{backgroundColor:'#f2f2f2', color:'black'}}> <MdEmail style={{color:'#2aabee'}} />carprof.ee@gmail.com</button>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
