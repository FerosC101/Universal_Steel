import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

// Dropdown content for nav items
const dropdownContent: Record<string, { title: string; description: string; links: { label: string; path: string; desc: string }[] }> = {
    '/about': {
        title: 'Our Company',
        description: 'For over 60 years, Universal Steel Smelting Co., Inc. has been a trusted leader in steel manufacturing.',
        links: [
            { label: 'About Us', path: '/about', desc: 'Learn about our history, mission, vision, and values' },
            { label: 'Certifications', path: '/certifications', desc: 'ISO 9001, BPS, and DPWH accreditations' },
            { label: 'Facility Gallery', path: '/facility-gallery', desc: 'Tour our state-of-the-art manufacturing plant' },
            { label: 'Business Partners', path: '/business-partners', desc: 'Our trusted global and local supplier network' },
        ]
    },
    '/products': {
        title: 'Our Products',
        description: 'We manufacture high-grade deformed bars that meet international standards for modern construction.',
        links: [
            { label: 'Grade 40 Rebars', path: '/products/grade-40', desc: 'Standard strength bars for residential & light commercial' },
            { label: 'Grade 60 Rebars', path: '/products/grade-60', desc: 'High-strength bars for bridges & heavy infrastructure' },
            { label: 'Pricing', path: '/pricing', desc: 'View current pricing for all rebar sizes' },
        ]
    },
    '/projects': {
        title: 'Our Projects',
        description: 'Explore the landmark projects built with Universal Steel quality products.',
        links: [
            { label: 'Featured Projects', path: '/projects', desc: 'Past, present, and future infrastructure developments' },
            { label: 'Business Partners', path: '/business-partners', desc: 'Our trusted billet suppliers and service partners' },
        ]
    },
};

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        // Check initial scroll position
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
        // Check scroll position after navigation
        setIsScrolled(window.scrollY > 10);
    }, [location]);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const isActive = (path: string) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname === path || location.pathname.startsWith(path + '/');
    };
    const isExactActive = (path: string) => location.pathname === path;

    const navLinks = [
        { path: '/', label: 'Home', hasDropdown: false },
        { path: '/about', label: 'About', hasDropdown: true },
        { path: '/products', label: 'Products', hasDropdown: true },
        { path: '/projects', label: 'Projects', hasDropdown: true },
        { path: '/contact', label: 'Contact', hasDropdown: false },
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
                        <div 
                            key={link.path}
                            className="header__nav-item"
                            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.path)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link 
                                to={link.path} 
                                className={`header__nav-link ${isActive(link.path) ? 'header__nav-link--active' : ''} ${link.hasDropdown ? 'header__nav-link--has-dropdown' : ''}`}
                            >
                                {link.label}
                                {link.hasDropdown && (
                                    <svg className="header__nav-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none">
                                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                )}
                            </Link>
                            
                            {link.hasDropdown && dropdownContent[link.path] && (
                                <div className={`header__dropdown ${activeDropdown === link.path ? 'header__dropdown--open' : ''}`}>
                                    <div className="header__dropdown-sidebar" data-section={link.path}>
                                        <span className="header__dropdown-label">{dropdownContent[link.path].title}</span>
                                        <p className="header__dropdown-desc">{dropdownContent[link.path].description}</p>
                                        <Link to={link.path} className="header__dropdown-btn">
                                            Overview
                                        </Link>
                                    </div>
                                    <div className="header__dropdown-content">
                                        <span className="header__dropdown-section-title">In This Section</span>
                                        <ul className="header__dropdown-links">
                                            {dropdownContent[link.path].links.map((dropLink, i) => (
                                                <li key={i}>
                                                    <Link to={dropLink.path} className={`header__dropdown-link ${isExactActive(dropLink.path) ? 'header__dropdown-link--active' : ''}`}>
                                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                                                            <path d="M1 1L5 5L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                                        </svg>
                                                        <div className="header__dropdown-link-text">
                                                            <span className="header__dropdown-link-label">{dropLink.label}</span>
                                                            <span className="header__dropdown-link-desc">{dropLink.desc}</span>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            )}
                        </div>
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
                <div className="header__mobile-header">
                    <Link to="/" className="header__mobile-logo" onClick={() => setIsMobileMenuOpen(false)}>
                        <img 
                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png" 
                            alt="Universal Steel" 
                            className="header__mobile-logo-img"
                        />
                        <div className="header__mobile-logo-text">
                            <span className="header__mobile-logo-name">Universal Steel</span>
                            <span className="header__mobile-logo-tagline">Smelting Co., Inc.</span>
                        </div>
                    </Link>
                </div>
                <nav className="header__mobile-nav">
                    {navLinks.map(link => (
                        <div key={link.path} className="header__mobile-item">
                            {link.hasDropdown ? (
                                <>
                                    <button
                                        className={`header__mobile-link header__mobile-link--expandable ${isActive(link.path) ? 'header__mobile-link--active' : ''}`}
                                        onClick={() => setActiveMobileDropdown(activeMobileDropdown === link.path ? null : link.path)}
                                    >
                                        {link.label}
                                        <svg 
                                            className={`header__mobile-arrow ${activeMobileDropdown === link.path ? 'header__mobile-arrow--open' : ''}`} 
                                            width="12" 
                                            height="8" 
                                            viewBox="0 0 12 8" 
                                            fill="none"
                                        >
                                            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </button>
                                    <div className={`header__mobile-dropdown ${activeMobileDropdown === link.path ? 'header__mobile-dropdown--open' : ''}`} data-section={link.path}>
                                        <Link to={link.path} className={`header__mobile-sublink header__mobile-sublink--main ${isExactActive(link.path) ? 'header__mobile-sublink--active' : ''}`}>
                                            Overview
                                        </Link>
                                        {dropdownContent[link.path]?.links.map((subLink, i) => (
                                            <Link key={i} to={subLink.path} className={`header__mobile-sublink ${isExactActive(subLink.path) ? 'header__mobile-sublink--active' : ''}`}>
                                                {subLink.label}
                                            </Link>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <Link 
                                    to={link.path} 
                                    className={`header__mobile-link ${isActive(link.path) ? 'header__mobile-link--active' : ''}`}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </div>
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
