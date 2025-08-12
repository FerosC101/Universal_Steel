import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/products" className={currentPage === "products" ? "active" : ""}>
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/contact" className={currentPage === "contact" ? "active" : ""}>
                                Contact Us <ChevronDown className="icon-sm" />
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
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/products"
                                onClick={closeMenu}
                                className={currentPage === "products" ? "active" : ""}
                            >
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={currentPage === "contact" ? "active" : ""}
                            >
                                Contact Us <ChevronDown className="icon-sm" />
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
                            <li><Link to="/products">Process</Link></li>
                            <li><Link to="/products">Quality Assurance</Link></li>
                            <li><Link to="/products">Partners</Link></li>
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
            }}
        >
            <div className="hero-content" style={{ textAlign: 'left' }}>
                <h1 className="hero-title">
                    Contact Us
                </h1>
                <h3 style={{ color: '#e5e7eb' }}>
                    Universal Steel Smelting Co.Inc.
                </h3>
                <p className="text-wtext-left" style={{ color: '#e5e7eb'}}>
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
                        <div>
                            <h3 className="contact-label">Address</h3>
                            <p>28 Quirino Highway, Balon Bato 1,<br />Quezon City, 1106, Philippines</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">📞</div>
                        <div>
                            <h3 className="contact-label">Tel:</h3>
                            <p>(02) 8363-2651<br />(02) 8363-7081 to 82<br />(02) 8361-1247</p>
                            <h3 className="contact-label">Fax:</h3>
                            <p>(02) 8362-4575</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <div className="contact-icon">✉️</div>
                        <div>
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
            <style jsx>{`
                @media (min-width: 768px) {
                  .nav-desktop {
                    display: flex;
                    gap: 24px;
                  }
                  .nav-desktop a,
                  .nav-desktop button {
                    padding: 8px;
                    font-size: 16px;
                    color: #374151;
                    background: none;
                    border: none;
                    cursor: pointer;
                    transition: color 0.2s;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    gap: 4px;
                  }
                  .nav-desktop a:hover,
                  .nav-desktop button:hover {
                    color: #dc2626;
                  }
                  .menu-button {
                    display: none;
                  }
                  .mobile-menu {
                    display: none;
                  }
                }

                .topbar {
                  background-color: #8d8c8c;
                  padding: 0.5rem 1rem;
                  text-align: center;
                  font-size: 0.9rem;
                  color: #6d6a6a;
                  border-bottom: 1px solid #ddd;
                  height: 25px;
                  width: 100%;
                }

                .app-container {
                  min-height: 100vh;
                  display: flex;
                  flex-direction: column;
                  width: 100vw;
                  max-width: 100vw;
                  overflow-x: hidden;
                  margin: 0 auto;
                }

                .header {
                  background: white;
                  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                  position: relative;
                  z-index: 1000;
                  width: 100%;
                }

                .header-container {
                  width: 100vw;
                  max-width: 100vw;
                  margin: 0 auto;
                  padding: 0 20px;
                }

                .header-content {
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  height: 64px;
                  width: 100%;
                }

                .logo-container {
                  display: flex;
                  align-items: center;
                  max-width: 70%;
                }

                .logo-icon {
                  background: transparent;
                  color: white;
                  padding: 4px;
                  border-radius: 6px;
                  margin-right: 12px;
                  width: 60px;
                  height: 60px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 18px;
                  flex-shrink: 0;
                  overflow: hidden;
                }

                .logo-icon img {
                  width: 100%;
                  height: 100%;
                  object-fit: contain;
                }

                .logo-text {
                  color: #dc2626;
                  font-weight: bold;
                  font-size: 16px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }

                .nav-desktop {
                  display: none;
                  gap: 24px;
                }

                .nav-desktop a,
                .nav-desktop button {
                  color: #374151;
                  text-decoration: none;
                  background: none;
                  border: none;
                  cursor: pointer;
                  font-size: 16px;
                  display: flex;
                  align-items: center;
                  gap: 4px;
                  transition: color 0.2s;
                  white-space: nowrap;
                }

                .nav-desktop a:hover,
                .nav-desktop button:hover {
                  color: #dc2626;
                }

                .gradient-bg {
                  background: linear-gradient(to top, #8d8c8c 0%, #ffffff 20%);
                }

                .menu-button {
                  display: block;
                  background: none;
                  border: none;
                  cursor: pointer;
                  padding: 8px;
                  z-index: 1001;
                }

                .mobile-menu-overlay {
                  position: fixed;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  background: rgba(0, 0, 0, 0.5);
                  z-index: 1000;
                  opacity: 0;
                  visibility: hidden;
                  transition: all 0.3s ease;
                  pointer-events: none;
                }

                .mobile-menu-overlay.active {
                  opacity: 1;
                  visibility: visible;
                  pointer-events: auto;
                }

                .mobile-menu {
                  position: fixed;
                  top: 0;
                  right: -100%;
                  width: 280px;
                  max-width: 85vw;
                  height: 100vh;
                  background: white;
                  z-index: 1001;
                  padding: 0;
                  transition: right 0.3s ease-in-out;
                  overflow-y: auto;
                  box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
                }

                .mobile-menu.active {
                  right: 0;
                }

                .mobile-menu-content {
                  display: flex;
                  flex-direction: column;
                  gap: 24px;
                  padding: 20px;
                }

                .mobile-menu-content a {
                  color: #374151;
                  text-decoration: none;
                  font-size: 1.2rem;
                  font-weight: 500;
                  transition: color 0.2s;
                  padding: 8px 0;
                }

                .mobile-menu-content a:hover {
                  color: #dc2626;
                }

                .hero {
                  position: relative;
                  min-height: 60vh;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: center;
                  padding: 80px 20px;
                  width: 100%;
                  overflow: hidden;
                }

                .hero-content {
                  position: relative;
                  z-index: 10;
                  width: 100%;
                  max-width: 768px;
                  padding: 20px;
                  text-align: left;
                }

                .hero-title {
                  font-size: 2.5rem;
                  font-weight: bold;
                  color: white;
                  margin-bottom: 24px;
                  line-height: 1.2;
                }

                .hero-content .white-text {
                  color: white !important;
                  text-align: left !important;
                }

                .hero-description {
                  font-size: 1rem;
                  color: #d1d5db;
                  margin-bottom: 32px;
                  max-width: 768px;
                  text-align: left !important;
                }

                .footer {
                  color: black;
                  padding: 48px 0 0;
                  width: 100%;
                  margin-top: auto;
                }

                .footer-container {
                  width: 100vw;
                  max-width: 100vw;
                  margin: 0 auto;
                  padding: 0 20px;
                }

                .footer-grid {
                  display: grid;
                  grid-template-columns: 1fr;
                  gap: 32px;
                  padding-bottom: 32px;
                }

                .footer-company {
                  display: flex;
                  align-items: center;
                  margin-bottom: 16px;
                }

                .footer-company .logo-icon {
                  background: #dc2626;
                  color: white;
                  padding: 8px;
                  border-radius: 6px;
                  margin-right: 12px;
                  width: 32px;
                  height: 32px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-weight: bold;
                  font-size: 16px;
                }

                .footer-company .logo-text {
                  color: #ef4444;
                  font-weight: bold;
                  font-size: 16px;
                }

                .footer-address {
                  color: black;
                  margin-bottom: 16px;
                  font-size: 0.9rem;
                }

                .social-links {
                  display: flex;
                  gap: 16px;
                }

                .social-link {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  color: white;
                  font-size: 14px;
                  text-decoration: none;
                }

                .social-link.facebook {
                  background: #1877f2;
                }

                .social-link.linkedin {
                  background: #0077b5;
                }

                .social-link.email {
                  background: #6b7280;
                }

                .footer-section h3 {
                  font-size: 1.125rem;
                  font-weight: 600;
                  margin-bottom: 16px;
                }

                .footer-section ul {
                  list-style: none;
                  display: flex;
                  flex-direction: column;
                  gap: 8px;
                }

                .footer-section a {
                  color: black;
                  text-decoration: none;
                  transition: color 0.2s;
                  font-size: 0.9rem;
                }

                .footer-section a:hover {
                  color: white;
                }

                .contact-item {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  color: black;
                  margin-bottom: 8px;
                  font-size: 0.9rem;
                }

                .footer-bottom {
                  border-top: 1px solid #374151;
                  padding: 24px 0;
                  text-align: center;
                  color: black;
                  font-size: 0.8rem;
                }

                .contact-section {
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: center;
                  align-items: flex-start;
                  gap: 3rem;
                  padding: 2rem;
                  font-family: 'Arial', sans-serif;
                  color: #000;
                  background-color: #fff;
                  min-height: 80vh;
                }

                @media (max-width: 768px) {
                  .contact-section {
                    flex-direction: column;
                    gap: 2rem;
                    padding: 1.5rem;
                    align-items: center;
                  }
                }

                .contact-left,
                .contact-right {
                  flex: 1;
                  min-width: 300px;
                  max-width: 500px;
                }

                @media (max-width: 768px) {
                  .contact-left,
                  .contact-right {
                    width: 100%;
                    max-width: 100%;
                    min-width: unset;
                  }
                }

                .contact-title {
                  font-size: 2rem;
                  font-weight: bold;
                  color: #b30000;
                  margin-bottom: 0.5rem;
                }

                @media (max-width: 768px) {
                  .contact-title {
                    font-size: 1.75rem;
                    text-align: center;
                  }
                }

                .contact-subtitle {
                  color: #555;
                  margin-bottom: 2rem;
                }

                @media (max-width: 768px) {
                  .contact-subtitle {
                    text-align: center;
                    margin-bottom: 1.5rem;
                  }
                }

                .contact-info {
                  display: flex;
                  flex-direction: column;
                  gap: 1.5rem;
                }

                .contact-item {
                  display: flex;
                  align-items: flex-start;
                  gap: 1rem;
                }

                .contact-icon {
                  background-color: #e6e6e6;
                  font-size: 1.8rem;
                  padding: 12px;
                  border-radius: 12px;
                  width: 48px;
                  height: 48px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  flex-shrink: 0;
                }

                .contact-label {
                  font-weight: bold;
                  color: #b30000;
                  font-size: 1.1rem;
                  margin: 0.25rem 0;
                }

                .contact-right {
                  background-color: #ddd;
                  border-radius: 16px;
                  padding: 2rem;
                  box-shadow: 0 0 12px rgba(0, 0, 0, 0.1);
                }

                @media (max-width: 768px) {
                  .contact-right {
                    padding: 1.5rem;
                  }
                }

                .form-title {
                  color: #b30000;
                  font-weight: bold;
                  font-size: 1.5rem;
                  margin-bottom: 1rem;
                }

                @media (max-width: 768px) {
                  .form-title {
                    text-align: center;
                    font-size: 1.3rem;
                  }
                }

                .contact-form {
                  display: flex;
                  flex-direction: column;
                  gap: 1rem;
                }

                .contact-form input,
                .contact-form textarea {
                  background-color: transparent;
                  border: none;
                  border-bottom: 1px solid #555;
                  font-size: 1rem;
                  padding: 0.75rem 0.5rem;
                  width: 100%;
                  resize: none;
                }

                .contact-form textarea {
                  min-height: 100px;
                }

                .contact-form button {
                  padding: 1rem;
                  background: linear-gradient(to right, #b30000, #660000);
                  color: #fff;
                  font-weight: bold;
                  border: none;
                  border-radius: 1rem;
                  cursor: pointer;
                  transition: transform 0.2s;
                }

                .contact-form button:hover {
                  transform: translateY(-1px);
                }

                .map-section {
                  padding: 2rem;
                  background-color: #f5f5f5;
                  background: linear-gradient(to top, rgba(255, 255, 255, 0) 0%, rgba(145, 140, 140, 0.295) 40%, rgba(202, 199, 199, 0.3) 80%, transparent 100%);
                  width: 100%;
                }

                @media (max-width: 768px) {
                  .map-section {
                    padding: 1rem;
                  }
                }

                .map-container {
                  width: 100%;
                  max-width: 1200px;
                  margin: 0 auto;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
                  background: white;
                }

                .map-header {
                  background: #dc2626;
                  color: white;
                  padding: 1rem;
                  text-align: center;
                  font-weight: bold;
                  font-size: 1.1rem;
                }

                @media (max-width: 768px) {
                  .map-header {
                    padding: 0.75rem;
                    font-size: 1rem;
                  }
                }

                .map-iframe {
                  width: 100%;
                  height: 400px;
                  border: none;
                  display: block;
                }

                @media (max-width: 768px) {
                  .map-iframe {
                    height: 300px;
                  }
                }

                @media (max-width: 480px) {
                  .map-iframe {
                    height: 250px;
                  }
                }

                .icon {
                  width: 24px;
                  height: 24px;
                }

                .icon-sm {
                  width: 16px;
                  height: 16px;
                }
            `}</style>
        </div>
    );
};

export default App;