import React, { useState, useEffect } from 'react';
import './App.css';

// Custom Icon Components
const ChevronDown = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Menu = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const X = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Play = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
    </svg>
);

const ArrowRight = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const Phone = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo-container">
                        <div className="logo-icon">U</div>
                        <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <a href="#">Home</a>
                        <button>
                            About Us <ChevronDown className="icon-sm" />
                        </button>
                        <button>
                            Products <ChevronDown className="icon-sm" />
                        </button>
                        <button>
                            Contact Us <ChevronDown className="icon-sm" />
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
                        {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-menu-content">
                            <a href="#" onClick={closeMenu}>Home</a>
                            <a href="#" onClick={closeMenu}>About Us</a>
                            <a href="#" onClick={closeMenu}>Products</a>
                            <a href="#" onClick={closeMenu}>Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

// Hero Section Component
const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1 className="hero-title">
                    Forging Strong<br />
                    <span className="hero-title-accent">Alliances for the Future!</span>
                </h1>
                <p className="hero-description">
                    Backed by decades of innovation and resilience, the LKG Group continues to shape industries—
                    from construction to education—building a legacy of strength and progress across the Philippines.
                </p>
                <button className="hero-button">LEARN MORE</button>
            </div>

            {/* Side panel */}
            <div className="hero-sidebar">
                <h3>Building a Legacy of Strength</h3>
                <p>Watch how LKG has grown from post-war resilience to multi-industry leadership.</p>
                <button>
                    <ArrowRight className="icon-sm" />
                </button>
            </div>
        </section>
    );
};

// About Section Component
const AboutSection = () => {
    return (
        <section className="about">
            <div className="about-container">
                <div className="about-grid">
                    {/* Image */}
                    <div className="about-image">
                        <div className="about-image-placeholder">
                            <div>
                                <div>🏭</div>
                                <p>Steel Manufacturing Facility</p>
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="about-content">
                        <h2>UNIVERSAL STEEL SMELTING CO INC</h2>
                        <p>
                            The LKG Group of Companies maintains extensive holdings in the areas of construction,
                            manufacturing, real estate, wholesale, trading, general merchandising, social services
                            and education. It began trading before World War II with its Chairman and Partners,
                            Lim K.G. at the helm.
                        </p>
                        <p>
                            Starting with diversified investments in both the manufacturing and trading sectors,
                            and string of factories and land assets. Since then, LKG has grown to cover more
                            diversified investments in terms of annual gross revenues, the group's combined
                            performance ranks among the country's top 500 corporations.
                        </p>
                        <button className="about-button">READ MORE ABOUT US →</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Video Section Component
const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="video-container">
                <div className="video-wrapper">
                    <div className="video-background">
                        <div>
                            <div className="video-emoji">🎯</div>
                            <h3>QUALITY CONTROL</h3>
                            <p>Our commitment to excellence</p>
                        </div>
                    </div>
                    <div className="video-overlay">
                        <button className="play-button" aria-label="Play video">
                            <Play className="icon-lg" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Features Section Component
const FeaturesSection = () => {
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
                        <div className="sidebar-card red">
                            <h3>Our Products</h3>
                            <p>Discover our comprehensive range of steel products and manufacturing solutions.</p>
                            <button>
                                <ArrowRight className="icon-sm" />
                            </button>
                        </div>

                        <div className="sidebar-card dark">
                            <h3>Our Certifications</h3>
                            <p>Learn about our quality certifications and industry standards compliance.</p>
                            <button>
                                <ArrowRight className="icon-sm" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
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
                            <div className="logo-icon">U</div>
                            <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                        </div>
                        <p className="footer-address">26 Quirino Highway Balon Bato, Quezon City</p>
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
                            <li><a href="#">Company History</a></li>
                            <li><a href="#">Vision, Mission, & Values</a></li>
                            <li><a href="#">Factory Modernization</a></li>
                            <li><a href="#">Certifications</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h3>PRODUCTS</h3>
                        <ul>
                            <li><a href="#">Process</a></li>
                            <li><a href="#">Quality Assurance</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Accreditation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h3>CONTACT</h3>
                        <div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8363-2051</span>
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

const App = () => {
    return (
        <div className="app-container">
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