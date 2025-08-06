import { useState, useEffect } from 'react';
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
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/products" className="nav-link">
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/contact" className="nav-link">
                                Contact Us <ChevronDown className="icon-sm" />
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
    return (<div className='banner'>
        <div className='banner-image'>
            <div>
                <h1>About Us</h1>
                <h2>Universal Steel Smelting Co., Inc.</h2>
                <p>A leading steel smelting company providing high quality, reliable steel solutions for construction and manufacturing industries</p>
            </div>
        </div>
        <div className="gray"> </div>
        <div className='icons-container'>
            <div className='item'>
                <div className='logo-name'>
                    <img src={logoUrl1} alt="Company Logo" className="logo" />
                    <p>USCI was established in 1966</p>
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
    </div>);
}

const History = () => {
    return (<div className='history'>
        <div className='history-image-container'>
            <h1>Company History</h1>
            <h2><em>Our Legacy Since 1966</em></h2>
            <img src={logoUrl5} alt="Company Logo" className="logo" />
            <div className="round-image">
            </div>
        </div>
        <div className='text-container'>
            <p>
                Universal Steel Smelting Co., Inc. (USSCI) was founded on January 27, 1966, with the goal of producing high-quality reinforcing steel bars for the Philippine construction industry.
            </p>
            <p>
                Based in Balon Bato 1, Quezon City, USSCI is part of the LKG Group of Companies and backed by strategic alliances with leading financial institutions in the country.
            </p>
        </div>
    </div>);
}

const Vision = () => {
    return (<div className='vision'>
        <h1>Vision, Mission, & Values</h1>
        <div className="vision-grid-cont">
            <div className='row item'>
                <img src={logoUrl6} alt="Company Logo" className="logo" />
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
                            <img src={logoUrl8} alt="Company Logo" className="logo" />
                            <p>Integrity</p>
                        </div>
                        <div className='value'>
                            <img src={logoUrl9} alt="Company Logo" className="logo" />
                            <p>Quality</p>
                        </div>
                        <div className='value'>
                            <img src={logoUrl10} alt="Company Logo" className="logo" />
                            <p>Professionalism</p>
                        </div>
                        <div className='value'>
                            <img src={logoUrl11} alt="Company Logo" className="logo" />
                            <p>Customer Commitment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row item'>
                <img src={logoUrl7} alt="Company Logo" className="logo" />
                <div className='text'>
                    <h2>Mission</h2>
                    <p>To deliver dependable and certified steel products using modern technology and uphold the highest manufacturing standards in the industry.</p>
                </div>
            </div>
        </div>
    </div>);
}

const pic1 = `https://res.cloudinary.com/drrzinr9v/image/upload/IMG_0634_ehtkiu.jpg?ts=${Date.now()}`;
const pic2 = `https://res.cloudinary.com/drrzinr9v/image/upload/productpageSpectrometer_nkp7rb.jpg?ts=${Date.now()}`;
const pic3 = `https://res.cloudinary.com/drrzinr9v/image/upload/16._Overview_of_Reheating_Furnace_ztoovl.jpg?ts=${Date.now()}`;

const Modernization = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [pic1, pic2, pic3];

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
        <div className='modernization'>
            <div className='text'>
                <h1>Factory Modernization</h1>
                <p>
                    Our facility has evolved from a hand-fed mill to a fully modernized production plant. We operate a Full Tandem Mill from roughing to finishing passes and use a state-of-the-art continuous reheating furnace from FORNI INDUSTRIAL BENDOTTI - equipped with a high- pressure burner system and advanced PLC controls for consistent quality.
                </p>
            </div>
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
        </div>
    );
};


const pic4 = `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235347-removebg-preview_sovmgu.png?ts=${Date.now()}`;
const pic5 = `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235339-removebg-preview_tbznum.png?ts=${Date.now()}`;
const pic6 = `https://res.cloudinary.com/drrzinr9v/image/upload/Screenshot_2025-06-16_235402-removebg-preview_zmsls7.png?ts=${Date.now()}`;

const Certifications = () => {
    return (<div className='certifications'>
        <h1>Certifications</h1>
        <div className="cards-cont">
            <div className="card">
                <img src={pic4} alt="" />
                <p>LISO 9001:2015 Certified</p>
                <p>by TÜV Philippines</p>
            </div>
            <div className="card">
                <img src={pic5} alt="" />
                <p>BPS Certification Mark</p>
                <p>Bureau of Product Standards</p>
            </div>
            <div className="card">
                <img src={pic6} alt="" />
                <p>DPWH-Accredited Testing Laboratory</p>
                <p>by Bureau of Research and Standards (BRS)</p>
            </div>
        </div>
    </div>);
}

const pic7 = `https://res.cloudinary.com/drrzinr9v/image/upload/Group_lxnmwc.png?ts=${Date.now()}`;

const ISORecertification = () => {
    return (<div className='iso-recertification'>
        <img src={pic7} alt="" />
        <div className="text-cont">
            <div className="button">
                <div className="arrow-cont">
                    <ArrowRight />
                </div>
            </div>
            <div className="text">
                <h2>ISO Recertification</h2>
                <p>Universal Steel Smelting Co, Inc is proud to announce the re-certification of our Quality Management System under ISO 9001:2008 Standards. Our facility was audited in March 2010 by TUV Testing Services , Inc.</p>
                <p>Universal Steel Smelting Co, Inc has acquired ISO 9001:2008 recertification after passing an assessment by TUV Testing Services, Inc. last year. With the previous acquisition of the same certification by the Confirmation of ISO 9001 re-certification by a reputable third-party certification body through regular independent assessment and audit of the system. This is particularly of primordial importance in any manufacturing company facility like us. Our re-certification demonstrates our firm commitment to the quality of reinforcing bars. Universal Steel Smelting Co, Inc.'s announcement clearly demonstrates our commitment to the highest standards and quality,"</p>
                <p>Our ISO certification assures our customers that they can expect consistent, superior quality products and continued pursuit of excellence. This coming 2016, Universal Steel Smelting Co, Inc. is celebrating 50 years of partnership with our clientele. Customers can contact us for a copy of our new certificate!</p>
            </div>
            <div></div>
        </div>
        <div></div>
    </div>);
}

const clientimg = `https://res.cloudinary.com/drrzinr9v/image/upload/Group_1000001822_lkp9t8.png?ts=${Date.now()}`;
const clients = [
    "AYALA LAND, INC.",
    "ANCHOR PROPERTIES",
    "A.M. ORETA & COMPANY",
    "AVIDA LAND CORPORATION",
    "BUILDING BEAVER CORPORATION",
    "CAVDEAL INTERNATIONAL",
    "CHINA INTERNATIONAL WATER & ELECTRICAL CORPORATION",
    "CHINA ROAD AND BRIDGE CORPORATION",
    "CHINA GEO-ENGINEERING PHILS. CORPORATION",
    "DAIICHI PROPERTIES",
    "DATEM, INC.",
    "DATALAND INC.",
    "DDT KONSTRACT INC.",
    "D.M. WENCESLAO & ASSOCIATES INC.",
    "D.M. CONSUNJI INC.",
    "E. I. CONSTRUCTION CO., INC.",
    "EEI CORPORATION",
    "EMPIRE EAST LAND HOLDINGS INC.",
    "ETON PROPERTIES PHILS. INC.",
    "FEDERAL LAND, INC.",
    "F.F. CRUZ & COMPANY",
    "FILINVEST ALABANG INC. / FILINVEST LAND INC.",
    "FIRST BALFOUR – LEIGHTON JOINT VENTURE",
    "GLOBAL ESTATE RESORT INC.",
    "HANJIN HEAVY INDUSTRIES & CONST. CO. LTD.",
    "HANWHA E & C CORPORATION",
    "HILMARCS CONSTRUCTION CORPORATION",
    "HUMANTECH KOREA PHILS. CORPORATION",
    "IPM CONSTRUCTION",
    "JQ INTERNATIONAL CONSTRUCTION, INC.",
    "KAJIMA PHILS. INC.",
    "LEY CONST. & DEV'T. CORP.",
    "LEIGHTON CONTRACTORS",
    "MAKATI DEVELOPMENT CORPORATION",
    "MALLERS INVESTMENTS CORPORATION",
    "MC CONNELL DOWELL PHILS., INC.",
    "MEGAWIDE CONSTRUCTION CORPORATION",
    "MEGAWORLD PROPERTIES & HOLDINGS INC.",
    "MOLDEX REALTY INC.",
    "MONOCRETE CONSTRUCTION PHILIPPINES INC.",
    "MONOLITH CONSTRUCTION",
    "NATIONAL IRRIGATION ADMINISTRATION",
    "NEW CITY BUILDERS INC.",
    "NEW GOLDEN CITY BUILDERS",
    "NEW KANLAON CONSTRUCTION",
    "NEW SAN JOSE BUILDERS",
    "OBAYASHI CORPORATION – Subic Expressway",
    "PANORAMA PROPERTY VENTURES",
    "PENTA – SHIMIZU TOA JOINT VENTURE",
    "PERSAN CONSTRUCTION INC.",
    "ROBINSONS LAND CORPORATION",
    "ROCKWELL LAND CORPORATION",
    "SAN MIGUEL CORPORATION & SUBSIDIARIES",
    "SHANG ROBINSONS PROPERTIES, INC.",
    "STAGES DESIGN & CONSTRUCTION CORPORATION",
    "SM DEVELOPMENT CORPORATION",
    "SM PRIME HOLDINGS, INC.",
    "SMCC PHILIPPINES, INC.",
    "TAISEI - SHIMIZU JOINT VENTURE",
    "TOWNSQUARE DEVELOPMENT INC.",
    "VICENTE T. LAO CONSTRUCTION",
    "V.B. COLUMNA CONSTRUCTION",
    "WHITEPORT INC.",
    "YOUNG BUILDERS CORPORATION"
];


const MajorClients = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (<div className='clients'>
        <h1>Major Clients</h1>
        <img src={clientimg} alt="Client Image" />
        <button onClick={() => setIsModalOpen(true)}>View Clients</button>
        {isModalOpen &&
            <>
                <div className='modal-cli'>
                    <div className='click-block' onClick={() => setIsModalOpen(false)}></div>
                    <div className="clients-list-cont">
                        <svg onClick={() => setIsModalOpen(false)} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50">
                            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
                        </svg>
                        <h2>Our Clients</h2>
                        <div className="outer-cont">
                            <div className="cont">
                                <ol>
                                    {clients.map((name, index) => (
                                        <li className="client" key={index}>
                                            {name}
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }
    </div>);
}

const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main style={{ position: 'relative' }}>
                <Banner />
                <div className='center-div'>
                    <History />
                    <Vision />
                    <Modernization />
                    <Certifications />
                    <ISORecertification />
                    <MajorClients />
                </div>
            </main>
            <Footer />
        </div>
    );
};

const TopBar = () => {
    return (
        <div className="topbar">
        </div>
    );
};
export default App;