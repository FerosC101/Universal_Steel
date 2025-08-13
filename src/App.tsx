import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

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

const ArrowRight = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

const Header = ({ currentPage = "home" }: { currentPage?: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check if screen is mobile size
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Force close menu if switching to desktop
            if (!mobile && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, [isMenuOpen]);

    const closeMenu = () => setIsMenuOpen(false);
    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsMenuOpen(prev => !prev);
    };

    // Close menu when clicking overlay
    const handleOverlayClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        closeMenu();
    };

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

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('keydown', handleEscape);
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isMenuOpen]);

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
                            <a href="#" className={currentPage === "home" ? "active" : ""}>
                                Home
                            </a>
                            <Link
                                to="/about"
                                className={currentPage === "about" ? "active" : ""}
                            >
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/products"
                                className={currentPage === "products" ? "active" : ""}
                            >
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/contact"
                                className={currentPage === "contact" ? "active" : ""}
                            >
                                Contact Us <ChevronDown className="icon-sm" />
                            </Link>
                        </nav>

                        {/* Mobile menu button - Only show on mobile */}
                        {isMobile && (
                            <button
                                className="menu-button"
                                onClick={toggleMenu}
                                aria-label="Toggle menu"
                                aria-expanded={isMenuOpen}
                            >
                                {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                            </button>
                        )}
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Only render when mobile */}
            {isMobile && (
                <>
                    {/* Mobile Menu Overlay */}
                    <div
                        className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}
                        onClick={handleOverlayClick}
                        aria-hidden="true"
                    />

                    {/* Mobile Navigation */}
                    <nav
                        className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}
                        role="navigation"
                        aria-label="Mobile navigation"
                    >
                        <div className="mobile-menu-header">
                            <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#dc2626' }}>
                                Navigation
                            </span>
                            <button
                                className="mobile-menu-close"
                                onClick={closeMenu}
                                aria-label="Close menu"
                            >
                                <X className="icon" />
                            </button>
                        </div>
                        <div className="mobile-menu-content">
                            <a
                                href="#"
                                onClick={closeMenu}
                                className={currentPage === "home" ? "active" : ""}
                            >
                                Home
                            </a>
                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className={currentPage === "about" ? "active" : ""}
                            >
                                About Us
                                <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/products"
                                onClick={closeMenu}
                                className={currentPage === "products" ? "active" : ""}
                            >
                                Products
                                <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={currentPage === "contact" ? "active" : ""}
                            >
                                Contact Us
                                <ChevronDown className="icon-sm" />
                            </Link>
                        </div>
                    </nav>
                </>
            )}
        </>
    );
};

// Cloudinary image URLs
const cloudinary = {
    hero1: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/hero_sqtj19.jpg',
    hero2: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero2_omdk5s.jpg',
    hero3: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero3_exwvmu.jpg',
    hero4: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero4_c9ylu9.jpg',
    hero5: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero5_ydk14p.jpg',
    hero6: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero6_e7u9ss.jpg',
    product: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/homepageAbout_wezvdg.jpg',
    certs: 'https://res.cloudinary.com/drrzinr9v/image/upload/ourcertifications_nw8aid.jpg',
    about: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752676337/514315094_122186224832360700_1263205354293391856_n_qrnviz.jpg',
};

// Products Modal Component with Pricing Table
const ProductsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const grade40Data = [
        { size: '10mm', price: 22.00, weight: 0.617, '6.0M': 81.44, '7.5M': 101.81, '9.0M': 122.17, '10.5M': 142.53, '12.0M': 162.89 },
        { size: '12mm', price: 22.00, weight: 0.888, '6.0M': 117.22, '7.5M': 146.52, '9.0M': 175.82, '10.5M': 205.13, '12.0M': 234.43 },
        { size: '16mm', price: 21.80, weight: 1.578, '6.0M': 206.40, '7.5M': 258.00, '9.0M': 309.60, '10.5M': 361.20, '12.0M': 412.80 },
        { size: '20mm', price: 21.80, weight: 2.466, '6.0M': 322.55, '7.5M': 403.19, '9.0M': 483.83, '10.5M': 564.47, '12.0M': 645.11 },
        { size: '25mm', price: 21.80, weight: 3.853, '6.0M': 503.97, '7.5M': 629.97, '9.0M': 755.96, '10.5M': 881.95, '12.0M': 1007.94 },
        { size: '28mm', price: 21.80, weight: 4.834, '6.0M': 632.29, '7.5M': 790.36, '9.0M': 948.43, '10.5M': 1106.50, '12.0M': 1264.57 },
        { size: '32mm', price: 22.00, weight: 6.313, '6.0M': 833.32, '7.5M': 1041.65, '9.0M': 1249.97, '10.5M': 1458.30, '12.0M': 1666.63 },
        { size: '36mm', price: 22.00, weight: 7.99, '6.0M': 1054.68, '7.5M': 1318.35, '9.0M': 1582.02, '10.5M': 1845.69, '12.0M': 2109.36 },
    ];

    const grade60Data = [
        { size: '10mm', price: 22.70, weight: 0.617, '6.0M': 84.04, '7.5M': 105.04, '9.0M': 126.05, '10.5M': 147.06, '12.0M': 168.07 },
        { size: '12mm', price: 22.70, weight: 0.888, '6.0M': 120.95, '7.5M': 151.18, '9.0M': 181.42, '10.5M': 211.65, '12.0M': 241.89 },
        { size: '16mm', price: 22.50, weight: 1.578, '6.0M': 213.03, '7.5M': 266.29, '9.0M': 319.55, '10.5M': 372.80, '12.0M': 426.06 },
        { size: '20mm', price: 22.50, weight: 2.466, '6.0M': 332.91, '7.5M': 416.14, '9.0M': 499.37, '10.5M': 582.59, '12.0M': 665.82 },
        { size: '25mm', price: 22.50, weight: 3.853, '6.0M': 520.16, '7.5M': 650.19, '9.0M': 780.23, '10.5M': 910.27, '12.0M': 1040.31 },
        { size: '28mm', price: 22.50, weight: 4.834, '6.0M': 652.59, '7.5M': 815.74, '9.0M': 978.89, '10.5M': 1142.03, '12.0M': 1305.18 },
        { size: '32mm', price: 22.70, weight: 6.313, '6.0M': 859.83, '7.5M': 1074.79, '9.0M': 1289.75, '10.5M': 1504.70, '12.0M': 1719.66 },
        { size: '36mm', price: 22.70, weight: 7.99, '6.0M': 1088.24, '7.5M': 1360.30, '9.0M': 1632.36, '10.5M': 1904.42, '12.0M': 2176.48 },
    ];

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="certifications-modal" onClick={onClose}>
            <div className="certifications-modal-content products-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="certifications-modal-close" onClick={onClose}>
                    <X />
                </button>
                <h2>Rebar Products & Pricing</h2>

                <div className="pricing-tables-container">
                    {/* Grade 40 Rebars Table */}
                    <div className="pricing-table-section">
                        <h3>GRADE 40 Rebars</h3>
                        <div className="table-responsive">
                            <table className="pricing-table">
                                <thead>
                                <tr>
                                    <th>SIZE</th>
                                    <th>PRICE/KILO</th>
                                    <th>WEIGHT KG/M</th>
                                    <th colSpan={5}>LENGTH</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>6.0M</th>
                                    <th>7.5M</th>
                                    <th>9.0M</th>
                                    <th>10.5M</th>
                                    <th>12.0M</th>
                                </tr>
                                </thead>
                                <tbody>
                                {grade40Data.map((row, index) => (
                                    <tr key={index}>
                                        <td className="size-cell">{row.size}</td>
                                        <td className="price-cell">{row.price.toFixed(2)}</td>
                                        <td className="weight-cell">{row.weight}</td>
                                        <td className="length-cell">{row['6.0M']}</td>
                                        <td className="length-cell">{row['7.5M']}</td>
                                        <td className="length-cell">{row['9.0M']}</td>
                                        <td className="length-cell">{row['10.5M']}</td>
                                        <td className="length-cell">{row['12.0M']}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Grade 60 Rebars Table */}
                    <div className="pricing-table-section">
                        <h3>GRADE 60 Rebars</h3>
                        <div className="table-responsive">
                            <table className="pricing-table">
                                <thead>
                                <tr>
                                    <th>SIZE</th>
                                    <th>PRICE/KILO</th>
                                    <th>WEIGHT KG/M</th>
                                    <th colSpan={5}>LENGTH</th>
                                </tr>
                                <tr>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th>6.0M</th>
                                    <th>7.5M</th>
                                    <th>9.0M</th>
                                    <th>10.5M</th>
                                    <th>12.0M</th>
                                </tr>
                                </thead>
                                <tbody>
                                {grade60Data.map((row, index) => (
                                    <tr key={index}>
                                        <td className="size-cell">{row.size}</td>
                                        <td className="price-cell">{row.price.toFixed(2)}</td>
                                        <td className="weight-cell">{row.weight}</td>
                                        <td className="length-cell">{row['6.0M']}</td>
                                        <td className="length-cell">{row['7.5M']}</td>
                                        <td className="length-cell">{row['9.0M']}</td>
                                        <td className="length-cell">{row['10.5M']}</td>
                                        <td className="length-cell">{row['12.0M']}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="pricing-note">
                    <p><strong>Note:</strong> All prices are subject to change without prior notice. Contact us for the most current pricing and availability.</p>
                </div>
            </div>
        </div>
    );
};

// Certifications Modal Component
const CertificationsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const certifications = [
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235347-removebg-preview_sovmgu.png?ts=${Date.now()}`,
            title: "ISO 9001:2015 Certified",
            subtitle: "by TÃœV Philippines"
        },
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235339-removebg-preview_tbznum.png?ts=${Date.now()}`,
            title: "BPS Certification Mark",
            subtitle: "Bureau of Product Standards"
        },
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235402-removebg-preview_zmsls7.png?ts=${Date.now()}`,
            title: "DPWH-Accredited Testing Laboratory",
            subtitle: "by Bureau of Research and Standards (BRS)"
        }
    ];

    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="certifications-modal" onClick={onClose}>
            <div className="certifications-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="certifications-modal-close" onClick={onClose}>
                    <X />
                </button>
                <h2>Our Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <img src={cert.image} alt={cert.title} />
                            <h3>{cert.title}</h3>
                            <p>{cert.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Hero Section - Slideshow with proper image changing
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        cloudinary.hero1,
        cloudinary.hero2,
        cloudinary.hero3,
        cloudinary.hero4,
        cloudinary.hero5,
        cloudinary.hero6
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000); // Auto-advance every 4 seconds

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="hero" style={{
            position: 'relative',
            height: '100vh',
            overflow: 'hidden'
        }}>
            {/* Slideshow Background */}
            <div className="hero-slideshow" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url('${slide}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            zIndex: index === currentSlide ? 2 : 1
                        }}
                    />
                ))}
            </div>

            {/* Slideshow Controls */}
            <button
                className="hero-nav hero-nav-prev"
                onClick={prevSlide}
                style={{
                    position: 'absolute',
                    left: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                &#8249;
            </button>
            <button
                className="hero-nav hero-nav-next"
                onClick={nextSlide}
                style={{
                    position: 'absolute',
                    right: '20px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    fontSize: '24px',
                    cursor: 'pointer'
                }}
            >
                &#8250;
            </button>

            {/* Slideshow Dots */}
            <div className="hero-dots" style={{
                position: 'absolute',
                bottom: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 10,
                display: 'flex',
                gap: '10px'
            }}>
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                        style={{
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            border: 'none',
                            background: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer',
                            transition: 'background 0.3s ease'
                        }}
                    />
                ))}
            </div>

            <div className="hero-content" style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
                color: 'white',
                maxWidth: '800px',
                textAlign: 'center'
            }}>
                <h1 className="hero-title">
                    Forging Strong<br />
                    <span className="hero-title-accent">Alliances for the Future!</span>
                </h1>
                <p className="hero-description">
                    Backed by decades of innovation and resilience, UNIVERSAL STEEL SMELTING CO INC continues to shape the construction industry, building a legacy of strength and progress across the Philippines.
                </p>
                <Link to="/about" className="hero-button">LEARN MORE</Link>
            </div>

            {/* Side panel */}
            <div className="hero-sidebar" style={{
                position: 'absolute',
                right: '50px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 5,
                background: '#dc2626', /* Solid red background */
                padding: '30px',
                borderRadius: '10px',
                color: 'white',
                maxWidth: '300px'
            }}>
                <h3>We reach our 60-year milestone in the industry next year!</h3>
                <p>Watch how UNIVERSAL STEEL SMELTING CO INC has grown from post-war resilience to multi-industry leadership.</p>
                <Link to="/about">
                    <button style={{
                        background: 'transparent',
                        border: '2px solid white',
                        color: 'white',
                        padding: '10px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}>
                        <ArrowRight className="icon-sm" />
                    </button>
                </Link>
            </div>
        </section>
    );
};

// About Section
const AboutSection = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-grid">
                    {/* Image */}
                    <div className="about-image">
                        <div
                            className="about-image-placeholder"
                            style={{
                                backgroundImage: `url('${cloudinary.about}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <h2>UNIVERSAL STEEL SMELTING CO INC</h2>
                        <p>
                            Founded with a vision to fuel industrial growth through innovation and strength, Universal Steel Smelting Company Incorporated is a trusted leader in steel manufacturing and smelting solutions.
                            For over 60 years, we have specialized in the production of high-grade deformed bars that power the construction and infrastructure sectors.
                        </p>
                        <p>

                            Headquartered in Quezon City, our advanced smelting and manufacturing facilities are equipped with cutting-edge technology and operated by a skilled workforce committed to quality, safety, and sustainability.
                            We produce a wide range of deformed bar products tailored to meet the demanding standards of global markets.
                        </p>
                        <p>
                            At Universal Steel Smelting, we prioritize innovation, environmental responsibility, and long-term client relationships. Our operations are TUV and BPS certified and DPWH-Accredited Testing Laboratory by the Bureau of Research and Standards (BRS).
                        </p>
                        <p>
                            Driven by integrity, engineered for durability — Universal Steel Smelting Company Inc. is forging strong alliances for the future.
                        </p>
                        <Link to="/about" className="about-button">READ MORE ABOUT US →</Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Video Section Component
const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="video-section">
            <div className="video-container">
                {!isPlaying && (
                    <svg
                        className="icon-lg play-button"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        onClick={toggleVideo}
                        style={{ cursor: 'pointer' }}
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
                <video
                    ref={videoRef}
                    className='video'
                    onClick={toggleVideo}
                    onEnded={() => setIsPlaying(false)}
                >
                    <source src="https://res.cloudinary.com/drrzinr9v/video/upload/v1752759885/homepageVid_a3fuh3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

    const features = [
        {
            number: "01",
            title: "Legacy of Strength",
            description: "Rooted in pre-WWII history. Built on resilience, innovation, and decades of expertise from the LKG Group legacy."
        },
        {
            number: "02",
            title: "Diverse Industry Footprint",
            description: "Active in manufacturing, construction, real estate, and education. A broad base ensures reliable and stable operations."
        },
        {
            number: "03",
            title: "Top-Tier Performance",
            description: "Ranked among the Philippines top 500 corporations. Delivers scale, stability, and results."
        },
        {
            number: "04",
            title: "Commitment to Quality",
            description: "Strict adherence to international manufacturing. Driven by quality control and ongoing improvement."
        },
        {
            number: "05",
            title: "Future-Ready Vision",
            description: "Focused on innovation and sustainability. Building strong, long-term partnerships."
        }
    ];

    return (
        <>
            <section className="features">
                <div className="features-container">
                    <div className="features-grid">
                        {/* Features List */}
                        <div className="features-content">
                            <h2>Why should you choose Universal Steel Smelting Co Inc?</h2>
                            <div className="features-list">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <div className="feature-number">{feature.number}</div>
                                        <div className="feature-content">
                                            <h3>{feature.title}</h3>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Side Panels */}
                        <div className="features-sidebar">
                            {/* Our Products */}
                            <div
                                className="sidebar-card"
                                style={{
                                    backgroundImage: `url('${cloudinary.product}')`,
                                    cursor: 'pointer'
                                }}
                                onClick={() => setIsProductsModalOpen(true)}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Products</span>
                                    <button className="arrow-btn">→</button>
                                </div>
                            </div>

                            {/* Our Certifications */}
                            <div
                                className="sidebar-card"
                                style={{
                                    backgroundImage: `url('${cloudinary.certs}')`,
                                    cursor: 'pointer'
                                }}
                                onClick={() => setIsCertModalOpen(true)}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Certifications</span>
                                    <button className="arrow-btn">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Modal */}
            <ProductsModal
                isOpen={isProductsModalOpen}
                onClose={() => setIsProductsModalOpen(false)}
            />

            {/* Certifications Modal */}
            <CertificationsModal
                isOpen={isCertModalOpen}
                onClose={() => setIsCertModalOpen(false)}
            />
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
                            <Link to="/contact" className="contact-item">
                                <Mail className="icon-sm" />
                                <span>office@universalsteelph.com</span>
                            </Link>
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
            <main>
                <HeroSection />
                <AboutSection />
                <VideoSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
};

export default App;