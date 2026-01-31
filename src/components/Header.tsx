import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/products', label: 'Products' },
        { path: '/projects', label: 'Projects' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <Link to="/" className="header__logo">
                    <img 
                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                        alt="Universal Steel" 
                        className="header__logo-img header__logo-img--small"
                    />
                    <div className="header__logo-text">
                        <span className="header__logo-name">Universal Steel</span>
                        <span className="header__logo-tagline">Smelting Co., Inc.</span>
                    </div>
                </Link>

                <nav className="header__nav">
                    {navLinks.map(link => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            className={`header__nav-link ${isActive(link.path) ? 'header__nav-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="header__actions">
                    <Link to="/pricing" className="header__cta">
                        Get Quote
                    </Link>
                </div>

                <button 
                    className="header__mobile-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`header__hamburger ${isMobileMenuOpen ? 'header__hamburger--open' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div 
                className={`header__mobile-overlay ${isMobileMenuOpen ? 'header__mobile-overlay--open' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <div className={`header__mobile-menu ${isMobileMenuOpen ? 'header__mobile-menu--open' : ''}`}>
                <nav className="header__mobile-nav">
                    {navLinks.map(link => (
                        <Link 
                            key={link.path}
                            to={link.path} 
                            className={`header__mobile-link ${isActive(link.path) ? 'header__mobile-link--active' : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link to="/pricing" className="header__mobile-cta">
                        Get Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
