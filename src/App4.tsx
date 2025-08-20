import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App4.css';

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
    <svg className={className} fill="none" stroke="white" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
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

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

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
                            <Link to="/" className="nav-link">Home</Link>
                            <Link to="/about" className="nav-link">
                                About Us
                            </Link>
                            <Link to="/products" className="nav-link">
                                Products
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact Us
                            </Link>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            className="menu-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            aria-label="Menu"
                            style={{ display: isMobile ? 'flex' : 'none' }}
                        >
                            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            {isMobile && (
                <>
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
                            <Link to="/" onClick={closeMenu} className="nav-link">Home</Link>
                            <Link to="/about" onClick={closeMenu} className="nav-link">About Us</Link>
                            <Link to="/products" onClick={closeMenu} className="nav-link">Products</Link>
                            <Link to="/contact" onClick={closeMenu} className="nav-link">Contact Us</Link>
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
                        <p className="footer-address">28 Quirino Highway, Balon Bato 1, Quezon City, 1106, Philippines</p>
                        <div className="social-links">
                            <a href="#" className="social-link facebook">f</a>
                            <a href="#" className="social-link linkedin">in</a>
                            <a href="#" className="social-link email">@</a>
                        </div>
                    </div>

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

// Image URLs
const logoUrl1 = `https://res.cloudinary.com/drrzinr9v/image/upload/building-two_yxzt3u.png?ts=${Date.now()}`;
const logoUrl2 = `https://res.cloudinary.com/drrzinr9v/image/upload/setting-two_e2vfvt.png?ts=${Date.now()}`;
const logoUrl3 = `https://res.cloudinary.com/drrzinr9v/image/upload/certificate_dpjy9c.png?ts=${Date.now()}`;
const logoUrl4 = `https://res.cloudinary.com/drrzinr9v/image/upload/bridge-two_hvjarm.png?ts=${Date.now()}`;
const logoUrl5 = `https://res.cloudinary.com/drrzinr9v/image/upload/ge-removebg-preview_ee8tvd.png?ts=${Date.now()}`;
const logoUrl6 = `https://res.cloudinary.com/drrzinr9v/image/upload/exchange-two_w8z7jh.png?ts=${Date.now()}`;
const logoUrl7 = `https://res.cloudinary.com/drrzinr9v/image/upload/target_hljvmw.png?ts=${Date.now()}`;
const logoUrl8 = `https://res.cloudinary.com/drrzinr9v/image/upload/hold_woblca.png?ts=${Date.now()}`;
const logoUrl9 = `https://res.cloudinary.com/drrzinr9v/image/upload/two-hands_v6resp.png?ts=${Date.now()}`;
const logoUrl10 = `https://res.cloudinary.com/drrzinr9v/image/upload/user-business_lxwokn.png?ts=${Date.now()}`;
const logoUrl11 = `https://res.cloudinary.com/drrzinr9v/image/upload/check-correct_lbqpjk.png?ts=${Date.now()}`;

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-image'>
                <div>
                    <h1>About Us</h1>
                    <h2>Universal Steel Smelting Co., Inc.</h2>
                    <p>Forging Strong Alliances for the Future - A leading steel smelting company providing high quality, reliable steel solutions for construction and manufacturing industries</p>
                </div>
            </div>
            <div className="gray"></div>
            <div className='icons-container'>
                <div className='item'>
                    <div className='logo-name'>
                        <img src={logoUrl1} alt="Company Logo" className="logo" />
                        <p>USSCI was established in 1966</p>
                    </div>
                </div>
                <ArrowRight />
                <div className='item'>
                    <div className='logo-name'>
                        <img src={logoUrl2} alt="Company Logo" className="logo" />
                        <p>Continuous modernization of production lines</p>
                    </div>
                </div>
                <ArrowRight />
                <div className='item'>
                    <div className='logo-name'>
                        <img src={logoUrl3} alt="Company Logo" className="logo" />
                        <p>Achieved BPS and ISO certifications</p>
                    </div>
                </div>
                <ArrowRight />
                <div className='item'>
                    <div className='logo-name'>
                        <img src={logoUrl4} alt="Company Logo" className="logo" />
                        <p>Accredited testing laboratory for government projects</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CompanyBackground = () => {
    return (
        <div className='company-background'>
            <div className='text-container'>
                <h1>Company Background</h1>
                <h2><em>Forging Strong Alliances for the Future</em></h2>
                <p>
                    Universal Steel Smelting Co., Inc. (USSCI) was established back in January 27, 1966
                    with the manufacturing objective of producing the highest quality standards of
                    reinforcing steel bars for the Philippine Construction Industry.
                </p>
                <p>
                    It is financially strong as part of the LKG group of companies and with strategic
                    alliances with several of the major financial institutions in the Philippines. Our
                    manufacturing plant is located along Quirino Highway, Balintawak, Quezon City.
                </p>
            </div>
            <div className='background-image-container'>
                <img src={logoUrl5} alt="Company Building" className="logo" />
                <div className="round-image"></div>
            </div>
        </div>
    );
};

const ManufacturingFacility = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        `https://res.cloudinary.com/drrzinr9v/image/upload/IMG_0634_ehtkiu.jpg?ts=${Date.now()}`,
        `https://res.cloudinary.com/drrzinr9v/image/upload/v1755004449/hero5_ydk14p.jpg?ts=${Date.now()}`,
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='manufacturing-facility'>
            <div className="image-cont">
                <div className="carousel-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                            <img src={image} alt={`Factory image ${index + 1}`} />
                        </div>
                    ))}
                </div>

                <div className="carousel-indicators">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                        />
                    ))}
                </div>
            </div>
            <div className='text' >
                <h1>Manufacturing Facility</h1>
                <p>
                    From its humble beginnings as a hand-fed mill in the remote past, our management
                    team has given top priority on facility modernization and today, our manufacturing
                    process has finally evolved into becoming a Full Tandem Mill from the roughing all
                    the way to the finishing passes.
                </p>
                <p>
                    We operate a state-of-the-art continuous type reheating furnace, designed and
                    supplied by FORNI INDUSTRIAL BENDOTTI (known as one of the best leader manufacturer
                    of pre-constructed furnaces within its sector). The furnace utilizes a fully
                    computerized High Pressure Burner System with atomized air to ensure efficient
                    combustion of heavy fuel oil.
                </p>
                <p>
                    The reheating system, which is fully automated and equipped with the latest
                    Programmable Logic Control, has been designed to maintain consistent and uniform
                    heating throughout the entire furnace, a critical aspect in the billet reheating process.
                </p>
            </div>
        </div>
    );
};

const QualityAssurance = () => {
    return (
        <div className='quality-assurance'>
            <div className='text-container'>
                <h1>Quality Assurance Standard</h1>
                <p>
                    USSCI has given utmost priority to its manufacturing quality standards. Our Quality
                    Assurance Testing Laboratory utilizes a Carbon analyzer Spectrometer and Universal
                    Testing Machine to ensure that all of our mill's production is in conformity with the
                    strictest quality standards in rebar manufacturing.
                </p>
                <p>
                    The Bureau of Product Standards has conferred upon USSCI the Philippine Standard
                    Quality Certification Mark for all of its Deformed Steel Bars. Moreover, our testing
                    laboratory has been fully accredited by the Bureau of Research and Standards to
                    undertake materials testing for all government infrastructure projects.
                </p>
            </div>
            <div className='quality-image-container'>
                <div className="quality-feature">
                    <h3>Testing Equipment</h3>
                    <p>Carbon Analyzer Spectrometer & Universal Testing Machine</p>
                </div>
                <div className="quality-feature">
                    <h3>BPS Certified</h3>
                    <p>Philippine Standard Quality Certification Mark</p>
                </div>
                <div className="quality-feature">
                    <h3>Government Accredited</h3>
                    <p>Bureau of Research and Standards Accredited Laboratory</p>
                </div>
            </div>
        </div>
    );
};

const Vision = () => {
    return (
        <div className='vision'>
            <h1>Vision, Mission, & Values</h1>
            <div className="vision-grid-cont">
                <div className='row item'>
                    <img src={logoUrl6} alt="Vision Icon" className="logo" />
                    <div className='text'>
                        <h2>Vision</h2>
                        <p>To be a trusted leader in manufacturing high-quality reinforcing steel bars through continuous innovation and commitment to customer satisfaction.</p>
                    </div>
                </div>
                <div className='col item'>
                    <div className='text'>
                        <h2>Values</h2>
                        <div className='values-cont'>
                            <div className='value'>
                                <img src={logoUrl8} alt="Integrity Icon" className="logo" />
                                <p>Integrity</p>
                            </div>
                            <div className='value'>
                                <img src={logoUrl9} alt="Quality Icon" className="logo" />
                                <p>Quality</p>
                            </div>
                            <div className='value'>
                                <img src={logoUrl10} alt="Professionalism Icon" className="logo" />
                                <p>Professionalism</p>
                            </div>
                            <div className='value'>
                                <img src={logoUrl11} alt="Customer Commitment Icon" className="logo" />
                                <p>Customer Commitment</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row item'>
                    <img src={logoUrl7} alt="Mission Icon" className="logo" />
                    <div className='text'>
                        <h2>Mission</h2>
                        <p>To deliver dependable and certified steel products using modern technology and uphold the highest manufacturing standards in the industry.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ISOCertification = () => {
    const certImages = [
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_TUV_ISO_exp_2028_t3dha9.jpg?ts=${Date.now()}`,
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg?ts=${Date.now()}`,
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg?ts=${Date.now()}`
    ];

    return (
        <div className='iso-certification'>
            <h1>Proof of Quality: ISO 9001:2015 Certified</h1>
            <div className="certification-content">
                <div className="certification-text">
                    <p>
                        More importantly, USSCI has been conferred the distinguished citation of being
                        ISO 9001:2015 standard compliant, a testament that its manufacturing processes
                        operates with a total quality management system which has been assessed as
                        conforming to internationally acclaimed manufacturing standards.
                    </p>
                    <p>
                        TÜV Philippines Inc. of Germany, USSCI's certifying body, has fully documented
                        the highest quality and safety of the products, system and services of USSCI
                        as a reinforcing Bar Manufacturer.
                    </p>
                </div>
                <div className="cards-cont">
                    <div className="card">
                        <img src={certImages[0]} alt="ISO 9001:2015 Certificate" />
                        <p>ISO 9001:2015 Certified</p>
                        <p>by TÜV Philippines</p>
                    </div>
                    <div className="card">
                        <img src={certImages[1]} alt="BPS Certification" />
                        <p>BPS Certification Mark</p>
                        <p>Bureau of Product Standards</p>
                    </div>
                    <div className="card">
                        <img src={certImages[2]} alt="DPWH Laboratory Accreditation" />
                        <p>DPWH-Accredited Testing Laboratory</p>
                        <p>by Bureau of Research and Standards (BRS)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CustomerService = () => {
    return (
        <div className='customer-service'>
            <div className='service-content'>
                <div className='service-text'>
                    <h1>Customer Service Satisfaction Policy</h1>
                    <p>
                        USSCI is committed to fulfill its obligation to total customer service satisfaction
                        from the actual performance of our rebars to its timely deliveries at the project site.
                    </p>
                    <p>
                        Our Customer Service Team shall provide all the supports needed to ensure complete
                        customer satisfaction at the bar-user level. Likewise, our professional management
                        team is dedicated to the continuing development and training of its employees, all of
                        which will translate to a high level of professionalism in providing our clients with
                        the best after-sales service program.
                    </p>
                    <div className="service-highlight">
                        <h3>At Universal Steel, we forge strong alliances for the future.</h3>
                    </div>
                </div>
                <div className='service-features'>
                    <div className='feature'>
                        <h4>Quality Performance</h4>
                        <p>Actual performance excellence of our rebars</p>
                    </div>
                    <div className='feature'>
                        <h4>Timely Delivery</h4>
                        <p>On-time deliveries at project sites</p>
                    </div>
                    <div className='feature'>
                        <h4>Professional Support</h4>
                        <p>Complete customer support at bar-user level</p>
                    </div>
                    <div className='feature'>
                        <h4>After-Sales Service</h4>
                        <p>Best after-sales service program</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MajorClients = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const clientimg = `https://res.cloudinary.com/drrzinr9v/image/upload/Group_1000001822_lkp9t8.png?ts=${Date.now()}`;

    const clients = [
        {
            name: "AYALA LAND, INC.",
            projects: [
                "Montgomery Place",
                "The Columns Ayala Avenue",
                "The Residences @ Greenbelt 2",
                "The Residences @ Greenbelt 3",
                "Serendra Project",
                "North Triangle Project",
                "Two Serendra",
                "Celadon Park Manila",
                "Celadon Residences San Lazaro",
                "The Columns Legaspi Village",
                "The Aston @ Two Serendra",
                "Glorietta Redevelopment",
                "One Serendra East Tower",
                "Senta",
                "Meranti",
                "The Montane",
                "Manila Bay Shore",
                "Vertis North"
            ]
        },
        {
            name: "ALI ETON PROPERTY DEVELOPMENT CORPORATION",
            projects: [
                "Parklinks South Tower",
                "The Lattice at Parklinks"
            ]
        },
        {
            name: "ANCHOR PROPERTIES & SUBSIDIARIES",
            projects: [
                "8 Alonzo Parksuites",
                "ALHI Corporate Office",
                "Juna Luna Logistics Center",
                "Cosmosuites",
                "Anchor Grand Suites",
                "One Legacy",
                "Cornel Parksuites",
                "One Financial Center",
                "Copton Baysuites"
            ]
        },
        {
            name: "A.M. ORETA & COMPANY",
            projects: [
                "NAIA Terminal II",
                "Manila Polo Club",
                "MWSS – La Mesa Dam",
                "Dasma Corporate Center",
                "Masbate Project",
                "Platinum",
                "Metro bank",
                "Balog-balog Multipurpose",
                "New South Terminal Commercial Center",
                "3 Forty Fifth Building",
                "Malabon Grand Hotel",
                "Taguig City Hall",
                "SOCO Project"
            ]
        },
        {
            name: "AVIDA LAND CORPORATION",
            projects: [
                "Avida Towers New Manila",
                "Avida Towers San Lazaro",
                "Avida Horizontal & Manufacturing Plant",
                "Avida Towers Makati West",
                "Avida Nuvali",
                "Makati South Point"
            ]
        },
        {
            name: "BUILDING BEAVER CORPORATION",
            projects: [
                "Medical Center of Taguig City",
                "Pasig Doctor's Medical Center"
            ]
        },
        {
            name: "CAVDEAL INTERNATIONAL",
            projects: [
                "Abuyog – Silago Project",
                "Baguio – Aritao Road",
                "Imus River Bridge",
                "TMC Arcade",
                "SLEX Rehabilitation"
            ]
        },
        {
            name: "CHINA INTERNATIONAL WATER & ELECTRICAL CORPORATION",
            projects: [
                "Bago River Irrigation System Rehabilitation & Improvement",
                "Iloilo Flood Control Phase II",
                "Studio City Tower 5"
            ]
        },
        {
            name: "CHINA ROAD AND BRIDGE CORPORATION",
            projects: []
        },
        {
            name: "CHINA GEO-ENGINEERING PHILS. CORPORATION",
            projects: []
        },
        {
            name: "DAIICHI PROPERTIES",
            projects: [
                "One World Place",
                "World Plaza",
                "The Finance Plaza"
            ]
        },
        {
            name: "DATEM, INC.",
            projects: [
                "One Shangri-La Place",
                "Venice Corporate Center",
                "Unilab Corporate Center",
                "UST Senior High Building",
                "One Legrand Tower",
                "Caticlan Hotel",
                "MK Tan Center",
                "Savya Financial Center",
                "18th Avenue De Triomphe",
                "Cyberpark Tower 3",
                "Haraya Residences",
                "Eluria"
            ]
        },
        {
            name: "DATALAND INC.",
            projects: [
                "Sky Tower"
            ]
        },
        {
            name: "DDT KONSTRACT INC.",
            projects: [
                "Hanjin Phils.",
                "Taal Vista Hotel",
                "Lancaster Suite",
                "Dimensione Showroom",
                "John Mary Retreat House",
                "Fort 26 Project",
                "Lexmark Plaza Bldg.",
                "Pacita Commercial Complex Phase 2",
                "Waltermart Munoz",
                "Lexmark Plaza Building 2",
                "San Lazaro BPO Bldg. A",
                "Hamilo Coast Country Club",
                "LDS – Cebu Temple",
                "Lancaster Tower 2",
                "Precast Plant",
                "Cyber Scape Beta",
                "Globe Telecom",
                "SM Light Residences",
                "Robinsons Cyberbeta",
                "Manila Bay Resort",
                "The Olive Place",
                "Cyber Scape Gamma",
                "Grand West Side Hotel",
                "Park Mckinley West",
                "Bayshore Residential Resort",
                "Kristong Hari Shrine",
                "MBP Office Building"
            ]
        },
        {
            name: "D.M. WENCESLAO & ASSOCIATES INC.",
            projects: [
                "Pixel Residences",
                "PARQAL"
            ]
        },
        {
            name: "D.M. CONSUNJI INC.",
            projects: [
                "Bonifacio Heights",
                "Mayfield Park",
                "Palm Grove",
                "Villa Alegre",
                "Vista de Lago",
                "Shangrila Resort & Spa @ Boracay",
                "Riverfront Residences",
                "Boracay Ready Mix Batching Plant",
                "Maynilad Project",
                "Cypress Towers",
                "Kamanava Phase 2",
                "Rosewood Tower"
            ]
        },
        {
            name: "DMCI PROJECT DEVELOPERS INC",
            projects: [
                "Alder Residences",
                "Mulberry Place 2",
                "Fortis Residences",
                "The Oriana",
                "Acacia Estates"
            ]
        },
        {
            name: "E. I. CONSTRUCTION CO., INC.",
            projects: [
                "New Bacolod Silay Airport",
                "Subic Bay Port Development",
                "Anvaya Cove"
            ]
        },
        {
            name: "EEI CORPORATION",
            projects: [
                "RCC Project",
                "Wrigley Project",
                "Isla Putting Bato",
                "Daelim Project",
                "Philips Project",
                "LRT – Sumitomo Project",
                "San Miguel Yamamura Project",
                "GA Tower",
                "NAIA Skyway",
                "Petron Lima Project",
                "Edsa Central IT Center",
                "Rio Tuba Nickel",
                "Makati Medical Center Annex Building",
                "St. Francis",
                "Biscom Projects",
                "Mandarin Project",
                "RCBC Building",
                "Beacon Tower",
                "MWCI Taguig",
                "ADB Project",
                "Novotel Araneta Center",
                "Skyway Stage 3",
                "ETY Project",
                "Bocaue Toll Plaza",
                "NLEX Toll Plaza",
                "MRT 7 Project",
                "SMNCI Line 3 Expansion",
                "Caticlan Airport",
                "UPPC",
                "Sucat – Alabang Interchange",
                "SEMME",
                "C-3 A. Bonifacio Interchange",
                "Malolos-Clark Railway project",
                "Mapua Malayan College Laguna"
            ]
        },
        {
            name: "EMPIRE EAST LAND HOLDINGS INC.",
            projects: [
                "One Governor's Place",
                "Gilmore Heights",
                "Laguna Bel Air",
                "IBM Plaza",
                "Eastwood City",
                "San Francisco",
                "Greenhills Garden",
                "California Garden",
                "The Xavier Hills",
                "UN Gardens",
                "Sunrise Hills",
                "The Cambridge Village",
                "One Pioneer",
                "Kasara Tower 3 & 5 project",
                "Pioneer Woodlands Tower 3 to 6",
                "Rochester Tower",
                "Covent Tower",
                "The Paddington Place Tower 1 & 2"
            ]
        },
        {
            name: "ETON PROPERTIES PHILS. INC.",
            projects: [
                "North Belton Place",
                "Eton Centris",
                "Eton Residences @ Greenbelt",
                "8 Adriatico",
                "68 Roces",
                "Eton Centris 3 & 4 Cyberpod",
                "Eton West End Square",
                "Eton NXTower 1"
            ]
        },
        {
            name: "FEDERAL LAND, INC.",
            projects: [
                "Four Seasons Riviera",
                "Six Senses Resort",
                "Paseo de Roces Tower 2",
                "IMET Tower",
                "The Big apple",
                "Peninsula Garden Midtown Homes Mahogany Tower",
                "The Blue Wave",
                "Grand Hyatt Residence",
                "8 Park Avenue",
                "The Seasons Residence",
                "MI CASA Tower 1",
                "Terrazas de Valencia",
                "Palm Beach West",
                "Siena Tower 1",
                "The Grand Midori Ortigas",
                "Four Seasons Riviera Tower 3"
            ]
        },
        {
            name: "F.F. CRUZ & COMPANY",
            projects: [
                "Nagtahan Bridge",
                "Kalayaan Bridge",
                "Estero Project",
                "C-5 Fly over",
                "Magsaysay Viaduct",
                "Bubog Bridge",
                "Apo Cement Project",
                "ATI Pier 13 Building",
                "SLEX Rehabilitation",
                "Batangas Flyover",
                "Startoll Way Bridge",
                "Alabang Viaduct Rehabilitation",
                "MM Skyway",
                "PPA Port – Iloilo",
                "ATI Manila South Harbor – Pier 3",
                "Lamesa Dam",
                "Libingan ng mga Bayani",
                "Marikina Pipe Tumana",
                "Cavitex C-5 Link Expressway",
                "Balara Treatment Plant"
            ]
        },
        {
            name: "FILINVEST ALABANG INC. / FILINVEST LAND INC.",
            projects: [
                "Filinvest Corporate City",
                "Alabang Stockfarm",
                "Studio One Const.",
                "Civic Prime Const.",
                "West Park Lorenzty",
                "La Vie Flats",
                "I-Hub 3 & I-hub 4",
                "Studio One & Two",
                "South Station",
                "One Oasis – Alabang",
                "Sea Scapes - Cebu",
                "Grand Cenia – Cebu",
                "Entrata Project",
                "Beaufort Project",
                "Princeton Mall",
                "Megablock Tower 1, 2, 3 & 4",
                "Vector 3",
                "100 West",
                "Foramall Tagaytay",
                "Formall Condotel",
                "Boracay Sea Scapes Resort",
                "Studio Tower 3",
                "Studio 7",
                "Sorrento Oasis",
                "Panglao Oasis",
                "One Filinvest",
                "One Spatial – Iloilo",
                "Filinvest Mimosa Estate Office",
                "Mimosa Lodgeplus Building A to C",
                "Dormitel Tower",
                "Gil Puyat Office Building",
                "Cebu Cyberzone Tower 3 & 4",
                "Marina Town Dumaguete",
                "Marina Spatial Dumaguete",
                "Alta Spatial",
                "Dormitel Tower A",
                "Mimosa Lifestyle Mall",
                "Bali Oasis 2",
                "Studio Tower N",
                "Manna East"
            ]
        },
        {
            name: "FIRST BALFOUR – LEIGHTON JOINT VENTURE",
            projects: [
                "Polaris Data Center Phase 1",
                "River Water Treatment Facility",
                "Diagon South"
            ]
        },
        {
            name: "GLOBAL ESTATE RESORT INC.",
            projects: [
                "Chancellor Hotel Boracay",
                "Holand Park 3 & 4",
                "Boracay Town Center",
                "Oceanway Residences",
                "Fairways and Blue Water Resort",
                "Twinlakes Bel Vedere"
            ]
        },
        {
            name: "HANJIN HEAVY INDUSTRIES & CONST. CO. LTD.",
            projects: [
                "LRT 2 – Project 2",
                "LRT 2 – Project 3",
                "Pampanga Project",
                "Subic Project",
                "Iloilo Flood Control"
            ]
        },
        {
            name: "HANWHA E & C CORPORATION",
            projects: []
        },
        {
            name: "HILMARCS CONSTRUCTION CORPORATION",
            projects: [
                "Rizal Multi-purpose Bldg.",
                "SP Tagaytay",
                "Bacolor Warehouse",
                "Makati Science Building",
                "UST Thomasian Alumni Building",
                "Edades Project",
                "Ospital ng Makati",
                "Quezon City Museum",
                "Manila Bay Resort"
            ]
        },
        {
            name: "HUMANTECH KOREA PHILS. CORPORATION",
            projects: []
        },
        {
            name: "IPM CONSTRUCTION",
            projects: [
                "Xavier School",
                "626 Heritage",
                "627 Sanctuario de Carmen",
                "445 Malolos",
                "592 Hills View"
            ]
        },
        {
            name: "JQ INTERNATIONAL CONSTRUCTION, INC.",
            projects: [
                "101 Residences",
                "Royal Tower",
                "City Garden View",
                "48 Storey Residential Bldg",
                "68th Storey Bldg",
                "Luxe Tower",
                "Signature Residences",
                "Index Residences",
                "Riverpark Place",
                "Lancris",
                "Dowell Tower",
                "Avenida Tower"
            ]
        },
        {
            name: "KAJIMA PHILS. INC.",
            projects: [
                "Honda Phils. Inc. Project",
                "Ibiden Phils. Project",
                "RASPI N2 Factory",
                "Subic-Clark-Pampanga Expressway"
            ]
        },
        {
            name: "LEY CONST. & DEV'T. CORP.",
            projects: [
                "Sunview Palace – Ley Meccanica Phils.",
                "Concorde Hotel – Baguio",
                "Royal Plaza",
                "SSS Project",
                "168 Shopping Mall Project"
            ]
        },
        {
            name: "LEIGHTON CONTRACTORS",
            projects: [
                "Casecnan Bridges",
                "Wyeth Phils",
                "Rapu-rapu Restoration Project",
                "Nutritional Nickel Corporation",
                "Masbate Gold Tower",
                "NLEX Interchange"
            ]
        },
        {
            name: "MAKATI DEVELOPMENT CORPORATION",
            projects: [
                "Honda Cars at the Port",
                "North & Garden",
                "Greenbelt Redevelopment",
                "Glorieta #5 Redevelopment",
                "UP North Science & Technology",
                "East Tower @ One Serendra",
                "Nuvali Vesta",
                "St. Lukes Hospital Building",
                "UP Integrated School",
                "UP NSTP Buildings",
                "Vertis North",
                "Cloverleaf Projects",
                "The Montane",
                "MDC West Superblock",
                "The Lerato",
                "Avida Towers Vita",
                "Alveo High Park",
                "UP Town Center",
                "Seda Hotel",
                "Avida Towers 34th Street",
                "Twinhead",
                "Arbor Lanes Phase 1",
                "Vertis North CBG",
                "Ayala Triangle Garden",
                "BGC Corporate Center",
                "Park Terraces Projects",
                "Avida Towers Astrea",
                "Avida Towers Cityflex",
                "Avida Towers Verte",
                "One Park Drive",
                "Circuit Makati",
                "Avida Towers Asten",
                "Arvo Mall South Park"
            ]
        },
        {
            name: "MALLERS INVESTMENTS CORPORATION",
            projects: [
                "Fishermall - Malabon"
            ]
        },
        {
            name: "MEGAWIDE CONSTRUCTION CORPORATION",
            projects: [
                "Proposed Golden Bay Tower ( Aspire)",
                "Megawide – Precast Plant",
                "Megahomes Construction",
                "Gateway Mall & Hotel",
                "Urban Deca Ortigas",
                "Double Dragon Tower",
                "Proposed Southwest Integrated Transport System",
                "The Hive Tower",
                "The Corner House",
                "Urban Deca Cubao",
                "Precast Plant Taytay 1 & 2"
            ]
        },
        {
            name: "MEGAWORLD CORPORATION & SUBSIDIARIES",
            projects: [
                "One Lafayette Square",
                "Two Lafayette Square",
                "Petron Mega Plaza",
                "World Centre",
                "Manhattan Square",
                "One Beverly Place Condominium",
                "World Commerce Plaza",
                "Sheraton Marina Square I & II",
                "Governors Place",
                "Olympic Height",
                "Narra Heights",
                "World Finance Plaza",
                "El – Jardin del Presidente",
                "Golfhills Terraces",
                "Eastwood Lafayette I to III",
                "Eastwood Citywalk",
                "Techno Plaza One & Two",
                "Cyber One",
                "Paseo Park View",
                "Eastwood Excelsior",
                "Eastwood Corporate Plaza",
                "One Orchard Road",
                "Citywalk 2 EC-20",
                "Forbeswood Heights",
                "Bellagio I & II",
                "Two World Square",
                "One Central Park",
                "Marriot Newport Hotel",
                "Residential Resort at New Port City",
                "Mckinley Parking Building",
                "Eastwood Park Hotel and Residences",
                "Mckinley Corporate Plaza",
                "Mckinley Garden Villa (Phase 2)",
                "Manhattan Parkways (3 Towers)",
                "Residential Resort @ Newport",
                "Greenhills Heights",
                "Cityplace Mall",
                "Eastwood Legrand I to III",
                "Mckinley Hills Tuscany Private Estate",
                "Aurora Gardens",
                "8 Forbestown Project",
                "The Venice Luxury Residences",
                "Science Hub",
                "8 Campus Place",
                "Uptown Arts Residence",
                "Iloilo BPO",
                "Venice Corporate Center",
                "The Noble Place",
                "World Commerce",
                "Festive Walk Mall – Iloilo City",
                "One Madison Palace tower 1 & 2 – Iloilo City",
                "Iloilo Business Park",
                "Lafayette Parksquare – Iloilo City",
                "Marriot Courtyard Hotel – Iloilo City",
                "Savoy Hotel Mactan Cebu",
                "Salcedo Skysuites",
                "The Florence",
                "Uptown Parade",
                "The Albany",
                "The Palladium - Iloilo",
                "Greenbelt Hamilton",
                "Belmont Hotel Mactan Cebu",
                "Mapple Grove",
                "Upper East – Bacolod",
                "One Regis – Bacolod",
                "No. 1 Upper East Avenue (Upper East BPO Building 1)",
                "Park Mckinley West Phase 1 & 2",
                "Maple Grove Commercial District",
                "Kingsquare Residential Suites",
                "International Corporate Plaza",
                "Uptown Park suites 1 & 2",
                "Positano Mactan",
                "One Republic Plaza",
                "Enterprise Two",
                "Two Regis",
                "The Pearl Global Residences",
                "Firenze Residence",
                "Maple Park Residences",
                "Manhattan Plaza Tower 3 (Laurent Park)",
                "Kensington Sky Garden",
                "Arden West Park Village",
                "La Cassia Residences",
                "Montrose Parkview",
                "Savoy Hotel Capital Town",
                "Bayshore Residential Resort",
                "Sunny Coast Residential Resort",
                "Kingsford Hotel",
                "Arcovia Park Place"
            ]
        },
        {
            name: "MOLDEX REALTY INC.",
            projects: [
                "Alegria & Dos Rios",
                "Heritage Homes Marilao",
                "Heritage Homes Trece Martires",
                "Metrogate Sapang Palay",
                "Metrogate Angeles",
                "Metrogate Tagaytay",
                "Metrogate Silang Estate",
                "Metrogate Dasmarinas",
                "Villa Caceres Sta. Rosa"
            ]
        },
        {
            name: "MONOCRETE CONSTRUCTION PHILIPPINES INC.",
            projects: [
                "STI – Legaspi",
                "Landmark Macapagal",
                "Chinese General Hospital Garden Suites",
                "Landmark Manila Bay",
                "Luna Date Center",
                "PGAI – Porsche Center Manila"
            ]
        },
        {
            name: "MONOLITH CONSTRUCTION",
            projects: [
                "Brisbane",
                "Distinction Properties",
                "Phoenix",
                "Potomac Realty",
                "TF Venture",
                "Tower Tech",
                "Rosemont Tower",
                "First Taipan Tower",
                "Yet Realty",
                "Modular Metal",
                "KSY Land Dev't.",
                "Meiling Dev't.",
                "RHL Property",
                "San Mateo Precast",
                "Intergulf Realty",
                "Dexterton",
                "Platinum Asia",
                "Datacom System",
                "Blue Cascade Dev't. Corp.",
                "Goldland Phils. Corp.",
                "J. King & Sons",
                "UAP Building",
                "Embassy Pointe Tower",
                "SM Sucat",
                "SM Annex North Edsa",
                "Jollibee Tower",
                "GSC corporate tower",
                "Island Cove",
                "Platinum BPO Tower",
                "MCentral",
                "CTP Asean Tower",
                "Hotel 101",
                "Harton Corporate Center",
                "1210 Acacia Avenue",
                "MCentral Building",
                "One Triump Tower",
                "Trium Square",
                "Kaopeng",
                "Dasma College Bldg. 2 & 3",
                "MJ Tower Fort",
                "M3 Corporate Center",
                "DLSU Clean Building Extension",
                "Bench Headquarters",
                "UST – Interdisciplinary Research Institute"
            ]
        },
        {
            name: "NATIONAL IRRIGATION ADMINISTRATION",
            projects: [
                "ISIP II – Tacloban",
                "Malitubog-Maridagao Irrigation – North Cotabato"
            ]
        },
        {
            name: "NEW CITY BUILDERS INC.",
            projects: [
                "Phil. Nihon Moki – Cavite",
                "Inmark Makati",
                "AMA Tower",
                "Carmona Housing",
                "Hotel Sogo",
                "Eurotel North Edsa",
                "New Galleria Baclaran",
                "Edsa Shangrila Plaza",
                "Kingsford Hotel",
                "Milan Residences"
            ]
        },
        {
            name: "NEW GOLDEN CITY BUILDERS",
            projects: [
                "Southcove Inc – Imperial Plaza",
                "H Mega Global Realty Inc – Gold Mansion",
                "SW Global United Realty Corp – 35 Storey Warehouse",
                "SM City EDSA BPO Tower / Hotel",
                "Amarah and AOIME residences",
                "Gold Mansion",
                "W Sixth Avenue"
            ]
        },
        {
            name: "NEW KANLAON CONSTRUCTION",
            projects: [
                "Acropolis",
                "BCDA Project",
                "Bonifacio Tech.",
                "Karport @ the Fort",
                "Lexington Garden Village",
                "Makro Cubao",
                "Makro Las Pinas",
                "Pricemart Aseana",
                "St. Jude Catholic School",
                "Brittany Bay Project",
                "Fort Palm Spring"
            ]
        },
        {
            name: "NEW SAN JOSE BUILDERS",
            projects: [
                "Victoria Tower de Manila - Taft",
                "Victoria Station Tower – Edsa",
                "Isabelle de Valenzuela",
                "Isabelle Hidalgo",
                "Fort Victoria",
                "Victoria Station 2",
                "Victoria de Morato",
                "NHA LRB Projects",
                "Namria",
                "Victoria de Malate",
                "Dormitorio De Espana 2",
                "Las Casas Filipinas De Acuzar",
                "Ipil Project",
                "Bataan Harbour City",
                "Victoria Arts and Theater",
                "Victoria De Valenzuela",
                "Victoria Sports Tower Monumento"
            ]
        },
        {
            name: "OBAYASHI CORPORATION – Subic Expressway",
            projects: [
                "Subic-Tarlac Expressway Project"
            ]
        },
        {
            name: "PANORAMA PROPERTY VENTURES",
            projects: []
        },
        {
            name: "PENTA – SHIMIZU TOA JOINT VENTURE",
            projects: [
                "Subic Bay Port Devt. Project",
                "Subic Bay Administration Building"
            ]
        },
        {
            name: "PERSAN CONSTRUCTION INC.",
            projects: [
                "Manila Science High School",
                "Rosauro Almario Elementary School",
                "Dr. Alejandro Albert elementary School",
                "Baclaran Gateway Market",
                "Malabon Sports Complex",
                "Construction of Binondominium 1",
                "Gotamco Elementary School",
                "Aurora A. Quezon Elementary School",
                "Paranaque Coliseum",
                "Silverio Elementary School",
                "Victorino Mapa High School"
            ]
        },
        {
            name: "ROBINSONS LAND CORPORATION",
            projects: [
                "Robinsons Place La Union",
                "Robinsons Cybergate Delta 2",
                "Pueblo Angono",
                "Robinsons Cyber Omega",
                "Dumaguete Expansion",
                "Robinsons Bridgetowne Mall",
                "Magnolia – CPPD project",
                "Cybergate Delta 2 - Davao",
                "The Sapphire Bloc-East Tower",
                "Gateway Mall",
                "GBF Center 1 & 2",
                "Robinsons Place Balanga",
                "Cybergate Bacolod 2",
                "Opus Mall (Bridgetowne)",
                "Cybergate Iloilo Tower",
                "Montclair Land Development",
                "Sync Tower",
                "The Sapphire Bloc – East Tower & South Podium",
                "Sierra Valley Gardens Tower 3 and Podium",
                "Cybergate Bacolod 2",
                "Cybergate Iloilo Tower 2 & 3",
                "Gateway Regency Studios",
                "Robinsons Place Antipolo Expansion",
                "Malolos Bayan Park Mall",
                "The Jewel (Forum Redevelopment Project)",
                "Le Pont Residences Tower Phase 1",
                "Grand Summit Hotel Pangasinan"
            ]
        },
        {
            name: "ROCKWELL LAND CORPORATION",
            projects: [
                "The Proscenium Tower Residences Tower 2",
                "The Proscenium – The Lorraine",
                "The Proscenium – The Kirov",
                "The Proscenium – The Lincoln",
                "The Vantage"
            ]
        },
        {
            name: "SAN MIGUEL CORPORATION & SUBSIDIARIES",
            projects: [
                "SMC MRT 7",
                "Skyway Stage 3",
                "SLEX Widening",
                "Port Development Works at Orion Bataan",
                "SMC Spunpole",
                "Block 3 Pier",
                "Proposed Cement Plant - Calatagan Batangas",
                "MRT 7 Guideway",
                "NAIAX West Bound"
            ]
        },
        {
            name: "SHANG ROBINSONS PROPERTIES, INC.",
            projects: [
                "Aurelia Residence",
                "Haraya project",
                "Shang residences at Wack Wack",
                "Laya by Shang Properties",
                "SPILDI ABS CBN"
            ]
        },
        {
            name: "STAGES DESIGN & CONSTRUCTION CORPORATION",
            projects: [
                "Tiendesitas",
                "Gloria Maris Redevelopment",
                "Silver City – KPO",
                "Acacia Project",
                "Waltermart – Carmona",
                "Sto. Thomas School Building",
                "Talisay School Building",
                "Abenson – Quezon Avenue",
                "Nacional Memorial",
                "Sta. Anastacia School Building",
                "Waltermart – Antipolo",
                "Abenzon – San Juan",
                "Waltermart – Antipolo",
                "Waltermart – Mabalacat",
                "Waltermart – Silang"
            ]
        },
        {
            name: "SM DEVELOPMENT CORPORATION",
            projects: [
                "Bloom Residences",
                "Charm Residences",
                "Field residences",
                "Lush Residences",
                "Coast Residences",
                "Shore 3 Residences",
                "SM Fame Residences",
                "Spring Residences",
                "Vine Residences",
                "Springtown Development - Leaf Residences",
                "Costa Del Hamilo – Freia Condominium",
                "Mint Residences",
                "Glade Residences"
            ]
        },
        {
            name: "SM PRIME HOLDINGS, INC.",
            projects: [
                "Park Inn Bacolod",
                "CPG Silangan Warehouse",
                "SM MOA Block 4",
                "Hope Residences",
                "SM City Fairview Mall Expansion",
                "SM City Legazpi",
                "SM Southmall BPO & Car Park Bldg.",
                "SM City – Iloilo BPO",
                "Style Residence – Iloilo City",
                "Silangan Warehouse",
                "Horizon Terraces Tagaytay",
                "SM Tanza",
                "SM Sorsogon",
                "SM City Sta. Rosa Mall Expansion",
                "SM City Cagayan De Oro Redevelopment",
                "SM City Cauayan",
                "SM Tarlac",
                "SM Sto. Tomas",
                "Light 2 Residences",
                "Twin Residences",
                "Sail Residences",
                "Horizon Terraces project",
                "SM Iloilo Public Central & Terminal",
                "SM Tagum"
            ]
        },
        {
            name: "SMCC PHILIPPINES, INC.",
            projects: [
                "Sakamoto Plant Expansion",
                "NIDEC Precision Phils. Factory",
                "Komyo Phils. Factory Expansion",
                "40MW Northern Negros Geothermal Plant",
                "Coral Bay 3 & 4",
                "RIO Tuba Nickel HPP",
                "Sakamoto projects",
                "SMS 3 Projects",
                "NYK – TDG Project",
                "Molex Integrated Products Phils. Inc.",
                "Proposed Daiho – Lima Factory 2",
                "New Leaf Warehouse",
                "Daiho Lima",
                "Hayashi project",
                "The Villages at Lipa"
            ]
        },
        {
            name: "TAISEI-SHIMIZU JOINT VENTURE",
            projects: [
                "Iloilo Intl. Airport Project",
                "Cagayan Power Plant Project"
            ]
        },
        {
            name: "TOWNSQUARE DEVELOPMENT INC.",
            projects: [
                "The Cambridge Village",
                "NPC – Pasay City High School",
                "Suntrust Parkview",
                "Suntrust Aurora Garden",
                "Little Baguio Terraces",
                "Suntrust Asmara",
                "Suntrust Shanata",
                "Suntrust Parkview",
                "Suntrust Capitol Plaza",
                "Clark Green Frontier Phase 1"
            ]
        },
        {
            name: "VICENTE T. LAO CONSTRUCTION",
            projects: [
                "Ipil Capitol Bldg.",
                "Dipolog & Dapitan Project",
                "Ozamis Public Market"
            ]
        },
        {
            name: "V.B. COLUMNA CONSTRUCTION",
            projects: [
                "Ace Balagtas",
                "Ace Mandaluyong",
                "Ace San Jose",
                "Ace San Miguel",
                "Jose Reyes",
                "Regina Rica",
                "La Salle – Lipa Batangas"
            ]
        },
        {
            name: "WHITEPORT INC.",
            projects: [
                "Robinson's Las Piñas",
                "Scape Project",
                "Spark Place",
                "The Glaston Tower",
                "WPI-Uzume Building"
            ]
        },
        {
            name: "YOUNG BUILDERS CORPORATION",
            projects: [
                "Osmena Tower – Cebu",
                "Cokaliong Tower – Cebu",
                "20 Lansbergh Place – QC",
                "CKS Tower – Cebu",
                "Hancit Tower – Cebu",
                "Dakay Commercial Bldg. – Cebu"
            ]
        }
    ];

    return (
        <div className='clients'>
            <h1>Major Clients</h1>
            <img src={clientimg} alt="Client Logos" />
            <button onClick={() => setIsModalOpen(true)}>View Complete Client List</button>
            {isModalOpen && (
                <>
                    <div className='modal-cli'>
                        <div className='click-block' onClick={() => setIsModalOpen(false)}></div>
                        <div className="clients-list-cont">
                            <svg
                                onClick={() => setIsModalOpen(false)}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50"
                            >
                                <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                            </svg>
                            <h2>Our Valued Clients</h2>
                            <div className="outer-cont">
                                <div className="cont">
                                    <div className="client-grid">
                                        {clients.map((client, index) => (
                                            <div key={index} className="client-item">
                                                <div className="client-header">
                                                    <span className="client-number">{index + 1}.</span>
                                                    <h3 className="client-name">{client.name}</h3>
                                                </div>
                                                {client.projects.length > 0 && (
                                                    <div className="projects-list">
                                                        {client.projects.map((project, projIndex) => (
                                                            <div key={projIndex} className="project-item">
                                                                <span className="project-letter">
                                                                    {(() => {
                                                                        const letters = "abcdefghijklmnopqrstuvwxyz";
                                                                        let index = projIndex;
                                                                        let result = "";

                                                                        // Determine the "length" of repetition group
                                                                        let length = 1;
                                                                        let count = 26; // number of combinations for each length

                                                                        while (index >= count) {
                                                                            index -= count;
                                                                            length++;
                                                                            count = 26; // always 26 per repetition length
                                                                        }

                                                                        // The chosen letter (cycle every 26)
                                                                        const letter = letters[index % 26];

                                                                        // Repeat that letter "length" times
                                                                        result = letter.repeat(length);

                                                                        return result + ".";
                                                                    })()}
                                                                </span>
                                                                <span className="project-name">{project}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};


const TopBar = () => {
    return (
        <div className="topbar"></div>
    );
};

const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main style={{ position: 'relative' }}>
                <Banner />
                <div className='center-div'>
                    <CompanyBackground />
                    <ManufacturingFacility />
                    <QualityAssurance />
                    <Vision />
                    <ISOCertification />
                    <CustomerService />
                    <MajorClients />
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;