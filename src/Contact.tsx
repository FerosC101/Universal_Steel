import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Contact.css';

// Icons
const Phone = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const MapPin = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const Clock = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

// Page Hero
const PageHero = () => (
    <section className="contact-page-hero">
        <div className="contact-page-hero__overlay" />
        <div className="contact-page-hero__content">
            <span className="contact-page-hero__label">Get in Touch</span>
            <h1 className="contact-page-hero__title">Contact Us</h1>
            <p className="contact-page-hero__text">
                We're here to help and answer any questions you might have. 
                We look forward to hearing from you.
            </p>
        </div>
    </section>
);

// Contact Info Cards
const ContactInfo = () => {
    const info = [
        {
            icon: <MapPin className="contact-info__icon" />,
            title: 'Address',
            lines: ['28 Quirino Highway, Balon Bato', 'Quezon City, 1106, Philippines'],
        },
        {
            icon: <Phone className="contact-info__icon" />,
            title: 'Phone',
            lines: ['(02) 8363-2651', '(02) 8363-7081 to 82', '(02) 8361-1247'],
        },
        {
            icon: <Mail className="contact-info__icon" />,
            title: 'Email',
            lines: ['office@universalsteelph.com'],
        },
        {
            icon: <Clock className="contact-info__icon" />,
            title: 'Business Hours',
            lines: ['Monday – Saturday', '8:00 AM – 4:00 PM'],
        },
    ];

    return (
        <div className="contact-info">
            {info.map((item, i) => (
                <div key={i} className="contact-info__card">
                    {item.icon}
                    <div className="contact-info__text">
                        <h3 className="contact-info__title">{item.title}</h3>
                        {item.lines.map((line, j) => (
                            <p key={j}>{line}</p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

// Contact Form
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2 className="contact-form__title">Send Us a Message</h2>
            
            <div className="contact-form__group">
                <label htmlFor="name">Full Name *</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="contact-form__row">
                <div className="contact-form__group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="contact-form__group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="contact-form__group">
                <label htmlFor="company">Company Name</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                />
            </div>

            <div className="contact-form__group">
                <label htmlFor="message">Message *</label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </div>

            <button type="submit" className="btn btn--primary contact-form__submit">
                Send Message
            </button>
        </form>
    );
};

// Map Section
const MapSection = () => (
    <section className="contact-map">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3859.8!2d121.00251922426425!3d14.660300576748753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDM5JzM3LjEiTiAxMjHCsDAwJzA5LjEiRQ!5e0!3m2!1sen!2sph!4v1707048000000!5m2!1sen!2sph"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Universal Steel Smelting Co., Inc. location"
        />
    </section>
);

// Main Contact Component
const Contact = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                <section className="contact-main">
                    <div className="contact-main__container">
                        <div className="contact-main__info">
                            <span className="section-label">Contact Information</span>
                            <h2 className="contact-main__heading">Let's Talk</h2>
                            <p className="contact-main__text">
                                Have questions about our products? Need a quote for your project? 
                                Our team is ready to assist you.
                            </p>
                            <ContactInfo />
                        </div>
                        <div className="contact-main__form">
                            <ContactForm />
                        </div>
                    </div>
                </section>
                <MapSection />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
