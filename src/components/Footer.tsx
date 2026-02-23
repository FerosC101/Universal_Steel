import { Link } from 'react-router-dom';
import './Footer.css';

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

const Facebook = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const LinkedIn = ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                {/* Main Footer Content */}
                <div className="footer__grid">
                    {/* Company Info */}
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_80/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                                alt="Universal Steel Smelting Co., Inc." 
                            />
                            <div className="footer__logo-text">
                                <span className="footer__company-name">Universal Steel</span>
                                <span className="footer__company-tagline">Smelting Co., Inc.</span>
                            </div>
                        </div>
                        <p className="footer__description">
                            For over 60 years, we have been a trusted leader in steel manufacturing, 
                            powering the construction and infrastructure sectors across the Philippines.
                        </p>
                        <div className="footer__social">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <Facebook className="footer__social-icon" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <LinkedIn className="footer__social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer__section">
                        <h4 className="footer__heading">Quick Links</h4>
                        <ul className="footer__links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Products & Services */}
                    <div className="footer__section">
                        <h4 className="footer__heading">Products & Services</h4>
                        <ul className="footer__links">
                            <li><Link to="/products">Grade 40 Rebars</Link></li>
                            <li><Link to="/products">Grade 60 Rebars</Link></li>
                            <li><Link to="/pricing">Pricing</Link></li>
                            <li><Link to="/certifications">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer__section">
                        <h4 className="footer__heading">Contact Us</h4>
                        <ul className="footer__contact">
                            <li>
                                <MapPin className="footer__contact-icon" />
                                <span>28 Quirino Highway, Balon Bato 1<br />Quezon City, 1106, Philippines</span>
                            </li>
                            <li>
                                <Phone className="footer__contact-icon" />
                                <div>
                                    <span>(02) 8363-2651</span>
                                    <span>(02) 8363-7081 to 82</span>
                                    <span>(02) 8361-1247</span>
                                </div>
                            </li>
                            <li>
                                <Mail className="footer__contact-icon" />
                                <div>
                                    <a href="mailto:criscac@universalsteelph.com">criscac@universalsteelph.com</a>
                                    <a href="mailto:maicasj@universalsteelph.com">maicasj@universalsteelph.com</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Universal Steel Smelting Co., Inc. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
