import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App3.css';

type IconProps = {
    className?: string;
    onclick?: () => void;
};

// Custom Icon Components
const ChevronDown = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Menu = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const X = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Phone = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Header = ({ currentPage = "contact" }: { currentPage?: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check if screen is mobile size with immediate update
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Force close menu if switching to desktop
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };

        // Set initial state
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as Element;
            if (isMenuOpen && !target.closest('.header') && !target.closest('.mobile-menu')) {
                closeMenu();
            }
        };

        if (isMenuOpen && isMobile) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isMenuOpen, isMobile]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isMobile]);

    return (
        <>
            <header className="header">
                <div className="header-container">
                    <div className="header-content">
                        {/* Logo */}
                        <div className="logo-container">
                            <div className="logo-icon">
                                <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" alt="USSCI Logo" />
                            </div>
                            <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="nav-desktop">
                            <Link to="/" className={currentPage === "home" ? "active" : ""}>
                                Home
                            </Link>
                            <Link to="/about" className={currentPage === "about" ? "active" : ""}>
                                About Us
                            </Link>
                            <Link to="/products" className={currentPage === "products" ? "active" : ""}>
                                Products
                            </Link>
                            <Link to="/contact" className={currentPage === "contact" ? "active" : ""}>
                                Contact Us
                            </Link>
                        </nav>

                        {/* Mobile menu button - Always render but conditionally style */}
                        <button
                            className="menu-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            aria-label="Menu"
                            style={{
                                display: isMobile ? 'flex' : 'none'
                            }}
                        >
                            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Only render when mobile */}
            {isMobile && (
                <>
                    {/* Mobile Menu Overlay */}
                    <div
                        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
                        onClick={closeMenu}
                    />

                    {/* Mobile Navigation */}
                    <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                        <div className="mobile-menu-header">
                            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#dc2626' }}>
                                Navigation
                            </span>
                            <button className="mobile-menu-close" onClick={closeMenu}>
                                <X className="icon" />
                            </button>
                        </div>
                        <div className="mobile-menu-content">
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={currentPage === "home" ? "active" : ""}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className={currentPage === "about" ? "active" : ""}
                            >
                                About Us
                            </Link>
                            <Link
                                to="/products"
                                onClick={closeMenu}
                                className={currentPage === "products" ? "active" : ""}
                            >
                                Products
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={currentPage === "contact" ? "active" : ""}
                            >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div>
                        <div className="footer-company">
                            <div className="logo-icon">
                                <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" alt="USSCI Logo" />
                            </div>
                            <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                        </div>
                        <p className="footer-address">28 Quirino Highway, Balon Bato 1,
                            Quezon City, 1106, Philippines</p>
                        <div className="social-links">
                            <a href="#" className="social-link facebook">f</a>
                            <a href="#" className="social-link linkedin">in</a>
                            <a href="#" className="social-link email">@</a>
                        </div>
                    </div>

                    {/* About */}
                    <div className="footer-section">
                        <h3>ABOUT</h3>
                        <ul>
                            <li><Link to="/about">Company History</Link></li>
                            <li><Link to="/about">Vision, Mission, & Values</Link></li>
                            <li><Link to="/about">Factory Modernization</Link></li>
                            <li><Link to="/about">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h3>PRODUCTS</h3>
                        <ul>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/products">Quality Assurance</Link></li>
                            <li><Link to="/products">Projects</Link></li>
                            <li><Link to="/products">Accreditation</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h3>CONTACT</h3>
                        <div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8363-2651</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8363-7081 to 82</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8361-1247</span>
                            </div>
                            <div className="contact-item">
                                <Mail className="icon-sm" />
                                <span>office@universalsteelph.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright @2025 | All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

const cloudinary = {
    hero: 'https://res.cloudinary.com/drrzinr9v/image/upload/contactus_n1cpjh.jpg',
};

const HeroSection = () => {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url('${cloudinary.hero}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '60vh', // Increase minimum height
                height: '60vh', // Set fixed height
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <div
                className="hero-content"
                style={{
                    textAlign: 'center',
                    width: '100%',
                    maxWidth: '720px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px'
                }}
            >
                <h1
                    className="hero-title"
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        margin: '0 auto 16px auto',
                        fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                        fontWeight: 'bold',
                        color: 'white',
                        lineHeight: '1.2'
                    }}
                >
                    Contact Us
                </h1>
                <h3
                    className="hero-subtitle"
                    style={{
                        textAlign: 'center',
                        width: '100%',
                        margin: '0 auto 12px auto',
                        fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                        color: '#e5e7eb'
                    }}
                >
                    Universal Steel Smelting Co. Inc.
                </h3>
                <p
                    className="hero-description"
                    style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                        color: '#d1d5db',
                        lineHeight: '1.5'
                    }}
                >
                    A leading steel smelting company providing high-quality, reliable steel solutions for construction and manufacturing industries.
                </p>
            </div>
        </section>
    );
};


const Contact = () => {
    // Form state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address.');
            return;
        }

        setIsSubmitting(true);

        // Create email content
        const recipientEmail = 'criscac@universalsteelph.com';
        const emailSubject = `Contact Form: ${formData.subject}`;
        const emailBody = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

---
This email was sent from the Universal Steel Smelting Co. Inc. contact form.
        `.trim();

        // Create mailto link
        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

        // Open email client
        window.location.href = mailtoLink;

        // Reset form after a short delay
        setTimeout(() => {
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
            setIsSubmitting(false);
            alert('Your email client should now open with the message ready to send. Please send the email to complete your inquiry.');
        }, 1000);
    };

    return (
        <section className="contact-section">
            <div className="contact-left">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    Feel free to contact us? Submit your queries here and we will get back to you as soon as possible
                </p>

                <div className="contact-info">
                    <div className="contact-item">
                        <div className="contact-icon">📍</div>
                        <div className="contact-item-content">
                            <h3 className="contact-label">Address</h3>
                            <p>28 Quirino Highway, Balon Bato 1,<br />Quezon City, 1106, Philippines</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div className="contact-item-content">
                            <h3 className="contact-label">Tel:</h3>
                            <div className="phone-numbers">
                                <p>(02) 8363-2651</p>
                                <p>(02) 8363-7081 to 82</p>
                                <p>(02) 8361-1247</p>
                            </div>
                            <h3 className="contact-label" style={{ marginTop: '1rem' }}>Fax:</h3>
                            <p>(02) 8362-4575</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div className="contact-item-content">
                            <h3 className="contact-label">Email</h3>
                            <p>criscac@universalsteelph.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-right">
                <h2 className="form-title">Send a Message</h2>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject*"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Message*"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        style={{
                            opacity: isSubmitting ? 0.7 : 1,
                            cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {isSubmitting ? 'PREPARING EMAIL...' : 'SEND'}
                    </button>
                </form>
            </div>
        </section>
    );
};

const Map = () => {
    // Using the exact Google Maps link provided: https://maps.app.goo.gl/WpXbNoE1c5H5rEWw9
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3858.844674442585!2d121.00022177588273!3d14.660134786081324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b5f5c6b9b9b9%3A0x1234567890abcdef!2s28%20Quirino%20Highway%2C%20Balintawak%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1642000000000!5m2!1sen!2sph";

    return (
        <section className="map-section">
            <div className="map-container">
                <div className="map-header">
                    Our Location - Universal Steel Smelting Co. Inc.
                </div>
                <iframe
                    className="map-iframe"
                    src={mapSrc}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Universal Steel Smelting Co. Inc. Location"
                ></iframe>
            </div>
        </section>
    );
};

const TopBar = () => {
    return (
        <div className="topbar">
        </div>
    );
};

const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main style={{ position: 'relative' }}>
                <HeroSection />
                <Contact />
                <Map />
            </main>
            <Footer />
        </div>
    );
};

export default App;