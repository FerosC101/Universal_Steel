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

const Footer = () => {
    return (
        <footer className="footer-simple">
            <div className="footer-content-simple">
                <div className="footer-grid-simple">
                    {/* Company Info */}
                    <div className="footer-section-simple">
                        <div className="footer-logo-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                                alt="USSCI Logo" 
                            />
                            <h3>UNIVERSAL STEEL SMELTING CO INC</h3>
                        </div>
                        <p className="footer-address-simple">
                            28 Quirino Highway, Balon Bato 1<br />
                            Quezon City, 1106, Philippines
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section-simple">
                        <h4>Quick Links</h4>
                        <ul className="footer-links-simple">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/products">Products</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section-simple">
                        <h4>Products</h4>
                        <ul className="footer-links-simple">
                            <li><Link to="/products">Grade 40 Rebars</Link></li>
                            <li><Link to="/products">Grade 60 Rebars</Link></li>
                            <li><Link to="/products">Quality Assurance</Link></li>
                            <li><Link to="/products">Certifications</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section-simple">
                        <h4>Contact Information</h4>
                        <ul className="footer-contact-simple">
                            <li>
                                <Phone className="icon-small" />
                                <span>(02) 8363-2651</span>
                            </li>
                            <li>
                                <Phone className="icon-small" />
                                <span>(02) 8363-7081 to 82</span>
                            </li>
                            <li>
                                <Phone className="icon-small" />
                                <span>(02) 8361-1247</span>
                            </li>
                            <li>
                                <Mail className="icon-small" />
                                <span>office@universalsteelph.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom-simple">
                    <p>&copy; 2025 Universal Steel Smelting Co Inc. All rights reserved.</p>
                    <div className="social-links-simple">
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Email">@</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
