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

const ChevronDown = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsDropdown, setProductsDropdown] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const closeMenu = () => {
        setIsMenuOpen(false);
        setProductsDropdown(false);
    };

    const isActive = (path: string) => location.pathname === path;
    const isProductsActive = () => ['/products', '/pricing', '/projects'].includes(location.pathname);

    return (
        <>
            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="header-container">
                    <Link to="/" className="logo" onClick={closeMenu}>
                        <img 
                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                            alt="Universal Steel Smelting Co., Inc." 
                            className="logo-image"
                        />
                        <div className="logo-text">
                            <span className="logo-name">Universal Steel</span>
                            <span className="logo-tagline">Smelting Co., Inc.</span>
                        </div>
                    </Link>

                    <nav className="nav-desktop">
                        <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>
                            Home
                        </Link>
                        <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>
                            About
                        </Link>
                        
                        {/* Products Dropdown */}
                        <div 
                            className={`nav-dropdown ${isProductsActive() ? 'active' : ''}`}
                            onMouseEnter={() => setProductsDropdown(true)}
                            onMouseLeave={() => setProductsDropdown(false)}
                        >
                            <button className={`nav-link dropdown-trigger ${isProductsActive() ? 'active' : ''}`}>
                                Products <ChevronDown className="dropdown-icon" />
                            </button>
                            <div className={`dropdown-menu ${productsDropdown ? 'open' : ''}`}>
                                <Link to="/products" className="dropdown-item" onClick={() => setProductsDropdown(false)}>
                                    <span className="dropdown-item-title">Our Products</span>
                                    <span className="dropdown-item-desc">Grade 40 & Grade 60 Rebars</span>
                                </Link>
                                <Link to="/pricing" className="dropdown-item" onClick={() => setProductsDropdown(false)}>
                                    <span className="dropdown-item-title">Pricing</span>
                                    <span className="dropdown-item-desc">Current price list</span>
                                </Link>
                                <Link to="/projects" className="dropdown-item" onClick={() => setProductsDropdown(false)}>
                                    <span className="dropdown-item-title">Projects</span>
                                    <span className="dropdown-item-desc">Our project portfolio</span>
                                </Link>
                            </div>
                        </div>

                        <Link to="/certifications" className={`nav-link ${isActive('/certifications') ? 'active' : ''}`}>
                            Certifications
                        </Link>
                        <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>
                            Contact
                        </Link>
                    </nav>

                    <button
                        className="menu-toggle"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
                    </button>
                </div>
            </header>

            {/* Mobile Navigation */}
            <div className={`mobile-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu} />
            <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                <div className="mobile-nav-header">
                    <span className="mobile-nav-title">Menu</span>
                    <button className="mobile-close" onClick={closeMenu}>
                        <X />
                    </button>
                </div>
                <div className="mobile-nav-links">
                    <Link to="/" className={`mobile-link ${isActive('/') ? 'active' : ''}`} onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className={`mobile-link ${isActive('/about') ? 'active' : ''}`} onClick={closeMenu}>
                        About
                    </Link>
                    <div className="mobile-section-title">Products & Services</div>
                    <Link to="/products" className={`mobile-link sub ${isActive('/products') ? 'active' : ''}`} onClick={closeMenu}>
                        Our Products
                    </Link>
                    <Link to="/pricing" className={`mobile-link sub ${isActive('/pricing') ? 'active' : ''}`} onClick={closeMenu}>
                        Pricing
                    </Link>
                    <Link to="/projects" className={`mobile-link sub ${isActive('/projects') ? 'active' : ''}`} onClick={closeMenu}>
                        Projects
                    </Link>
                    <Link to="/certifications" className={`mobile-link ${isActive('/certifications') ? 'active' : ''}`} onClick={closeMenu}>
                        Certifications
                    </Link>
                    <Link to="/contact" className={`mobile-link ${isActive('/contact') ? 'active' : ''}`} onClick={closeMenu}>
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Header;
