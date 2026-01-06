import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Menu = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    const location = useLocation();

    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) setIsMenuOpen(false);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

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

    const isActive = (path: string) => location.pathname === path;

    return (
        <>
            <header className="header-simple">
                <div className="header-container-simple">
                    <Link to="/" className="logo-simple">
                        <img 
                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                            alt="USSCI Logo" 
                            className="logo-img"
                        />
                        <span className="logo-text-simple">UNIVERSAL STEEL SMELTING CO INC</span>
                    </Link>

                    <nav className="nav-simple">
                        <Link to="/" className={isActive('/') ? 'nav-link-simple active' : 'nav-link-simple'}>
                            Home
                        </Link>
                        <Link to="/about" className={isActive('/about') ? 'nav-link-simple active' : 'nav-link-simple'}>
                            About Us
                        </Link>
                        <Link to="/products" className={isActive('/products') ? 'nav-link-simple active' : 'nav-link-simple'}>
                            Products
                        </Link>
                        <Link to="/contact" className={isActive('/contact') ? 'nav-link-simple active' : 'nav-link-simple'}>
                            Contact Us
                        </Link>
                    </nav>

                    {isMobile && (
                        <button
                            className="menu-btn-simple"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                        </button>
                    )}
                </div>
            </header>

            {isMobile && (
                <>
                    <div 
                        className={`mobile-overlay-simple ${isMenuOpen ? 'active' : ''}`}
                        onClick={closeMenu}
                    />
                    <nav className={`mobile-nav-simple ${isMenuOpen ? 'active' : ''}`}>
                        <Link to="/" className="mobile-link-simple" onClick={closeMenu}>Home</Link>
                        <Link to="/about" className="mobile-link-simple" onClick={closeMenu}>About Us</Link>
                        <Link to="/products" className="mobile-link-simple" onClick={closeMenu}>Products</Link>
                        <Link to="/contact" className="mobile-link-simple" onClick={closeMenu}>Contact Us</Link>
                    </nav>
                </>
            )}
        </>
    );
};

export default Header;
