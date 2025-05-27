import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const Insurance = () => {
  return (
    <div>
      <div className="support">
        <div className="lined-text">
          <h2>If you have any questions, please contact us!</h2>
        </div>

        <div className="info">
          <div className="contact-box">
            <FaPhoneAlt style={{ color: '#43b3ee' }} />
            <span>+250 793 399 719</span>
          </div>
          <div className="contact-box">
            <IoLogoWhatsapp style={{ color: '#60d669' }} />
            <span>WhatsApp</span>
          </div>
          <div className="contact-box">
            <MdEmail style={{ color: '#2aabee' }} />
            <span>carprof.ee@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31900.391845095004!2d30.10117230000001!3d-1.9325530000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca6a40203f041%3A0x5f8434259d8c4393!2sKacyiru%2C%20Kigali!5e0!3m2!1sen!2srw!4v1747729408561!5m2!1sen!2srw"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: '1rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Our location"
        ></iframe>
      </div>
    </div>
  )
}

export default Insurance
