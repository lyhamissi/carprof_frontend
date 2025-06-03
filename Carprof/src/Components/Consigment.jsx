import React from 'react';
import '../styles/consigment.css';
import carImage from '../assets/thumb-hero.avif';
import corner from "../assets/el-bg-1.avif";
import carImage2 from '../assets/thumb-hero1.avif';
import corner2 from '../assets/el-bg-10.avif';
import carprofImage from '../assets/condition.avif'
import image from '../assets/why-us8.avif';
import image1 from '../assets/why-us9.avif';
import image2 from '../assets/why-us7.avif';
import image3 from '../assets/why-us11.avif';
import image4 from '../assets/why-us17.avif';
import image5 from '../assets/why-us10.avif';
import image6 from '../assets/why-us11.avif';
import image8 from '../assets/why-us13.avif';
import image9 from '../assets/why-us14.avif';
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import feature1 from '../assets/stories8.avif'
import feature2 from '../assets/stories9.avif'
import feature3 from '../assets/stories10.avif'
import feature4 from '../assets/contact-map.avif'
const faqs = [
    "How does the consignment sale process work?",
    "How quickly will I receive payment?",
    "Can I sell a car that has an active leasing?",
    "Can I sell a car without an Estonian registration plate?",
    "Why do customers choose us?",
    "What services does CarProf offer?"
];

const features = [
    {
        image: feature1,
        title: '#1 in Estonia',
        description: 'We are the leader in consignment car sales with an avg 4.9 rating on Google!'
    },
    {
        image: feature2,
        title: 'Transaction from start to finish',
        description: 'We take on all stages of selling your car.'
    },
    {
        image: feature3,
        title: 'Car presentation',
        description: 'Professional photos and ads for a successful sale.'
    },
    {
        image: feature4,
        title: 'Wide range of services',
        description: 'Car preparation, advertising and design.'
    }
];

const Consignment = () => {

    return (
        <>
            <section className="consignment-section">
                <div className="consignment-container">
                    <div className="corner">
                        <img src={corner} alt="Corner" />
                    </div>
                    <div className="consignment-text">
                        <h2>Sell your car with CarProf</h2>
                        <h4>
                            Looking to sell your car quickly and hassle-free? Then you're in the right place!
                        </h4>
                        <p>
                            Bring your car to us, and we’ll handle the entire process for you.
                        </p>
                        <p>
                            Valuation, advertising, displaying the vehicle, and finalizing the sale – everything in one place.
                        </p>
                        <button className="contact-button">Contact Us</button>
                    </div>
                    <div className="consignment-image">
                        <img src={carImage} alt="CarProf Selling" />
                    </div>
                </div>
            </section>

            <section className="consignment-sections">
                <div className="consignment-container reverse">
                    <div className="consignment-image">
                        <img src={carImage2} alt="Car dealership" />
                    </div>
                    <div className="consignment-text">
                        <h2>What is Selling on Consignment?</h2>
                        <p>
                            Selling on consignment entails allowing a dealership to sell your car on your behalf.
                            You can either leave your car with us or keep driving it until the sale is completed.
                        </p>
                        <p>
                            Our experts take care of everything: preparation, advertising, communication with buyers,
                            and handling all the paperwork. No effort required on your part – we’ve got you covered!
                        </p>
                    </div>
                    <div className="corner corner-right">
                        <img src={corner2} alt="Corner Design" />
                    </div>
                </div>
            </section>

            <section className="why-uss">
                <div className="corners">
                    <img src={corner} alt="Corner" />
                </div>
                <h2 className="why-choose-title">Why Choose CarProf</h2>
                <div className="cards-containers">
                    {[
                        { icon: image, title: 'Trusted by Buyers', desc: 'For most buyers, purchasing a car through a dealership feels safer and more reliable.' },
                        { icon: image1, title: 'Extensive Advertising Reach', desc: 'We promote your car not only in Estonia but also in Latvia, Lithuania, and other European countries.' },
                        { icon: image2, title: 'Professional Communication', desc: 'Our experts know how to engage potential buyers and speed up the sales process.' },
                        { icon: image3, title: 'Secure Transactions', desc: 'We ensure all payments and legal aspects of the sale are secure. You won’t need to worry about risks or complications.' },
                        { icon: image4, title: 'Standout Presentation', desc: 'We create high-quality photos and descriptions to help your car sell faster and at a better price.' },
                        { icon: image5, title: 'Partnerships with Banks', desc: 'We can arrange financing for the buyer, increasing the chance of a quick sale.' },
                        { icon: image6, title: 'Time Saver', desc: 'Let us handle buyer meetings, presentations, and price negotiation – saving your time.' },
                        { icon: image8, title: 'Trade-In Option for Buyers', desc: 'Buyers can use their old car as a down payment. This speeds up the process.' },
                        { icon: image9, title: '#1 in Estonia', desc: 'We’re a top leader in consignment car sales with a 4.9 rating on Google!' },
                    ].map((item, index) => (
                        <div className="cardss" key={index}>
                            <div className="left">
                                <h4 >{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                            <div className="right">
                                <img src={item.icon} alt={item.title} />
                            </div>

                        </div>
                    ))}
                </div>
                <div className="included">
                    <div className="included-left">
                        <h2>What's Included in <br />Our Consignment<br />Sales Service:</h2>
                    </div>
                    <div className="included-right">
                        <ul>
                            <li><FaCheckCircle className='locations' /> Accurate valuation based on market analysis and your car’s unique features.</li>
                            <li><FaCheckCircle className='locations' /> Technical inspection and preparation of your car for sale.</li>
                            <li><FaCheckCircle className='locations' /> Professional advertising, including high-quality photos and a detailed description.</li>
                            <li><FaCheckCircle className='locations' /> Publishing the listing on our website and social media for maximum exposure.</li>
                            <li><FaCheckCircle className='locations' /> Additional promotion on popular marketplaces (Auto24.ee, mobile.de, etc.).</li>
                            <li><FaCheckCircle className='locations' /> Secure storage of your car at our dealership.</li>
                            <li><FaCheckCircle className='locations' /> Arranging test drives for potential buyers.</li>
                            <li><FaCheckCircle className='locations' /> Fully supported transaction, starting with the initial contact and ending with the final paperwork.</li>
                        </ul>
                    </div>
                    <div className="corner includedd-right">
                        <img src={corner2} alt="Corner Design" />
                    </div>
                </div>
            </section>
            <div className="process-container">
                <h2 className="section-title">What Does the Process Involve?</h2>
                <p className="subtitle">Selling your car with CarProf is simple, efficient, and stress-free!</p>

                <div className="steps">
                    <div className="step">
                        <div className="top">
                            <div className="step-number">01</div>
                            <h4>Contact Us</h4>
                        </div>

                        <hr />
                        <p>Call us or submit a request on our website. One of our specialists will get in touch quickly to discuss the details and arrange an appointment.</p>
                    </div>

                    <div className="step">
                        <div className="top">
                            <div className="step-number">02</div>
                            <h4>Bring Your Car to Us</h4>
                        </div>
                        <hr />
                        <p>Visit our dealership, where we’ll assess your car’s condition and agree on a sale price.</p>
                    </div>

                    <div className="step">
                        <div className="top">
                            <div className="step-number">03</div>
                            <h4>Sign the Agreement</h4>
                        </div>
                        <hr />
                        <p>We’ll handle the rest: preparing your car, advertising, negotiating with buyers, and finalizing the sale.</p>
                    </div>
                </div>

                <div className="requirements-section">
                    <h2 className="section-title white">Requirements for Your Car</h2>
                    <div className="requirements">
                        <div className="requirement-box">
                            <FaCheckCircle className='location' />Good mechanical and visual condition: bodywork, lights, fluid levels, tires, and battery
                        </div>
                        <div className="requirement-box">
                            <FaCheckCircle className='location' /> Complete and up-to-date service history including a service book and maintenance receipts
                        </div>
                    </div>
                </div>
            </div>

            <div className="corners">
                <img src={corner} alt="Corner" />
            </div>
            <div className="consignment-sectionss">
                <div className="consignment-card">
                    <div className="terms-text">
                        <h2>Consignment Sales Terms</h2>
                        <ul className="check-list">
                            <li><FaCheckCircle className='locations' />Consignment fee: from 1500 € (included 22% VAT).</li>
                            <li><FaCheckCircle className='locations' />You can also sell your leased car with us.</li>
                        </ul>
                        <p className="highlight">
                            At CarProf, we guarantee a fast, hassle-free, and secure sales process.
                            Trust us with your car, and we’ll find it a new owner!
                        </p>
                    </div>
                    <div className="terms-image">
                        <img src={carprofImage} alt="CarProf consignment process" />
                    </div>
                </div>
            </div>
            <section className="faq-section">
                <h2 className="faq-title">Frequently Asked Questions</h2>
                <div className="faq-grid">
                    {faqs.map((q, i) => (
                        <div className="faq-item" key={i}>
                            <p className="faq-question">{q}</p>
                            <span className="faq-icon"><FaCirclePlus /></span>
                        </div>
                    ))}
                </div>
                <div className="corner faq-right">
                    <img src={corner2} alt="Corner Design" />
                </div>
            </section>
            <section className="features-section">
                <div className="features-grid">
                    {features.map((item, index) => (
                        <div className="feature-card" key={index}>
                            <img src={item.image} alt={item.title} className="feature-image" />
                            <div className="feature-overlay">
                                <h3 className="feature-title">{item.title}</h3>
                                <p className="feature-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
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
        </>
    );
};

export default Consignment;
