import React from 'react'
import { FaPhoneAlt } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import '../styles/insurance.css';
import logo1 from '../assets/client1.avif';
import logo2 from '../assets/client2.avif';
import logo3 from '../assets/client3.avif';
import logo4 from '../assets/client4.avif';
import logo5 from '../assets/client5.avif';
import logo6 from '../assets/client6.avif';
import logo7 from '../assets/client7.avif';
import logo8 from '../assets/client8.avif';
import logo9 from '../assets/client9.avif';
import image from '../assets/why-us8.avif'
import image1 from '../assets/why-us9.avif'
import image2 from '../assets/why-us7.avif'
import image3 from '../assets/why-us11.avif'
import image4 from '../assets/why-us17.avif'
import image5 from '../assets/why-us10.avif'
import report from '../assets/blank-accident.avif'
const Insurance = () => {
  return (
    <div className="insurance-container">
      <div className="insurance-hero">
        <div className="overlay">
          <div className="hero-content">
            <h1>Insurance Claim Handling</h1>
            <p className="subheading">
              Report your vehicle damage on our website, and we'll handle the rest.
            </p>
            <p>Simply bring your car to a CarProf service center for insured repairs!</p>

            <div className="register-box">
              <h2>Register</h2>
              <div className="button-group">
                <button className="claim-btn">Insurance claim</button>
                <button className="claim-btn">Casco claim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="partners-section">
        <h2>Traffic Insurance and Casco Partners</h2>
        <div className="partner-logos">
          <img src={logo1} className="partner-logo" />
          <img src={logo2} className="partner-logo" />
          <img src={logo3} className="partner-logo" />
          <img src={logo4} className="partner-logo" />
          <img src={logo5} className="partner-logo" />
          <img src={logo6} className="partner-logo" />
          <img src={logo7} className="partner-logo" />
          <img src={logo8} className="partner-logo" />
          <img src={logo9} className="partner-logo" />

        </div>
      </div>
      <section className="carprof-benefits">
        <h2 className="carprof-benefits__title">Why Customers Choose CarProf</h2>
        <div className="cards-container">
          <div className="cards">
            <div className="left">
              <div className="text"><h4>Speed and Precision</h4>
                <p> Fast and accurate vehicle damage assessment, with efficient cooperation with insurance companies.
                </p></div>
            </div>
            <div className="right">
              <img src={image} alt="Speed icon" />
            </div>
          </div>
          <div className="cards">
            <div className="left">
              <div className="text">
                <h4>Free Replacement Car</h4>
                <p>
                  We provide you with a replacement car free of charge while your car is being repaired.
                </p>
              </div></div>
            <div className="right">
              <img src={image1} alt="Replacement car icon" />
            </div>

          </div>
          <div className="cards">
            <div className="left">
              <div className="text">
                <h4>High-Quality Repairs</h4>
                <p>
                  Our specialists have the expertise to fix any issues. We’ll return your car in perfect condition.
                </p>
              </div></div>
            <div className="right">
              <img src={image2} alt="Repair icon" />
            </div>

          </div>
          <div className="cards">
            <div className="left">
              <div className="text">
                <h4>Simple and Transparent Processes</h4>
                <p>
                  We’ll handle all communications with the insurance company and complete all the necessary paperwork for you!
                </p>
              </div>

            </div>
            <div className="right">
              <img src={image3} alt="Handshake icon" /></div>
          </div>
          <div className="cards">
            <div className="left">
              <div className="text">  <h4>Everything in One Place</h4>
                <p>
                  Damage assessment, paperwork, and vehicle repairs – all in one location. Simply bring your car to us.
                </p></div>

            </div>
            <div className="right">
              <img src={image4} alt="Briefcase icon" /></div>
          </div>
          <div className="cards">
            <div className="left">
              <div className="text">
                <h4>Guaranteed Safety and Reliability</h4>
                <p>
                  We strictly adhere to repair regulations to ensure your car is safe to drive again.
                </p>
              </div>

            </div>
            <div className="right">
              <img src={image5} alt="Safety icon" /></div>
          </div>
        </div>
      </section>
      <div className="process-container">
        <h2 className="section-title">What to Do in Case of an Accident?</h2>

        <div className="stepss">
          <div className="step">
            <div className="top">
              <div className="step-number">01</div>
              <h4>Stop and Ensure Safety of the Situation</h4>
            </div>

            <hr />
            <p>Turn off the engine, turn on the hazard lights, set the warning triangle, and ensure that no one is injured.</p>
          </div>

          <div className="step">
            <div className="top">
              <div className="step-number">02</div>
              <h4>Call Emergency Services if There Are Injuried Parties</h4>
            </div>
            <hr />
            <p>Dial 112 to contact the ambulance or the police. Write down the names and contact details of witnesses.</p>
          </div>
          <div className="step">
            <div className="top">
              <div className="step-number">03</div>
              <h4>Assess the Situation and Fill out the Documents</h4>
            </div>
            <hr />
            <p>If the accident involves only material damage, fill out the accident report form online or write it down in free form.</p>
          </div>
          <div className="step">
            <div className="top">
              <div className="step-number">04</div>
              <h4>Report the Damage to Your Insurance Company</h4>
            </div>
            <hr />
            <p>Notify your insurance company as soon as possible. You can also submit a claim online via CarProf.</p>
          </div>
          <div className="step">
            <div className="top">
              <div className="step-number">05</div>
              <h4>Bring Your Car to CarProf</h4>
            </div>
            <hr />
            <p>We will assess the damage, manage the necessary paperwork, and handle the repairs, saving you the hassle.</p>
          </div>
        </div>
        <div className="report-overlay">
          <img src={report} alt="Accident Report" className="report-image" />
          <div className="overlay-content">
            <h2>Accident Report Form</h2>
            <p>Download the accident notification form on our website.</p>
            <a href="https://www.lkf.ee/sites/default/files/Teade_liiklusonnetusest_2015_A4.pdf" className="report-button">Download the form</a>
          </div>
        </div>


      </div>
      <div className="support">
        <div className="lined-text">
          <h2>If you have any questions, please contact us!</h2>
        </div>

        <div className="info">
          <div className="contact-box">
            <a href="tel:+250799399719">
              <FaPhoneAlt style={{ color: '#43b3ee', marginRight: '8px' }} />
              <span>+250 799 399 719</span>
            </a>
          </div>

          <div className="contact-box">
            <a href="https://wa.me/250799399719"  >
              <IoLogoWhatsapp style={{ color: '#60d669', marginRight: '8px' }} />
              <span>WhatsApp</span>
            </a>
          </div>

          <div className="contact-box">
            <a href="mailto:carprof.ee@gmail.com">
              <MdEmail style={{ color: '#2aabee', marginRight: '8px' }} />
              <span>carprof.ee@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14554.895076829136!2d24.839199863822053!3d59.43343680233419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692ecbc94c45ce9%3A0x57f9fc4815317cae!2sPeterburi%20tee%2069!5e0!3m2!1sen!2srw!4v1748888840482!5m2!1sen!2srw"
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

  );
};
export default Insurance;
