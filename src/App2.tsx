import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import './App2.css';

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

const ArrowLeft = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
);

const ChevronLeft = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const Phone = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 002 2v10a2 2 0 002 2z" />
    </svg>
);


const Header = ({ currentPage = "products" }: { currentPage?: string }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // Check if screen is mobile size with immediate update
    useEffect(() => {
        const checkScreenSize = () => {
            const mobile = window.innerWidth < 768;
            setIsMobile(mobile);
            // Force close menu if switching to desktop
            if (!mobile) {
                setIsMenuOpen(false);
            }
        };

        // Set initial state
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const closeMenu = () => setIsMenuOpen(false);

    // Close menu when clicking outside
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
                            <Link to="/" className={currentPage === "home" ? "active" : ""}>
                                Home
                            </Link>
                            <Link to="/about" className={currentPage === "about" ? "active" : ""}>
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/products" className={currentPage === "products" ? "active" : ""}>
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link to="/contact" className={currentPage === "contact" ? "active" : ""}>
                                Contact Us <ChevronDown className="icon-sm" />
                            </Link>
                        </nav>

                        {/* Mobile menu button - Always render but conditionally style */}
                        <button
                            className="menu-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen(!isMenuOpen);
                            }}
                            aria-label="Menu"
                            style={{
                                display: isMobile ? 'flex' : 'none'
                            }}
                        >
                            {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - Only render when mobile */}
            {isMobile && (
                <>
                    {/* Mobile Menu Overlay */}
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
                            <Link
                                to="/"
                                onClick={closeMenu}
                                className={currentPage === "home" ? "active" : ""}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                onClick={closeMenu}
                                className={currentPage === "about" ? "active" : ""}
                            >
                                About Us <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/products"
                                onClick={closeMenu}
                                className={currentPage === "products" ? "active" : ""}
                            >
                                Products <ChevronDown className="icon-sm" />
                            </Link>
                            <Link
                                to="/contact"
                                onClick={closeMenu}
                                className={currentPage === "contact" ? "active" : ""}
                            >
                                Contact Us <ChevronDown className="icon-sm" />
                            </Link>
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

interface SizePrice {
    size: string;
    price: string;
    weight: string;
    lengths: {
        '6.0M': string;
        '7.5M': string;
        '9.0M': string;
        '10.5M': string;
        '12.0M': string;
    };
}

interface ModalProps {
    id: number;
    priceRange: string;
    sizes: SizePrice[];
    name: string;
    shortdescp: string;
    description: string;
    image: string;
}

// Projects List Modal Interface
interface ProjectsListModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const TopBanner = () => {
    const projects: ModalProps[] = [
        {
            id: 1,
            name: "Grade 40 Rebars",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg",
            priceRange: "₱21.80 - ₱22.00/KG",
            sizes: [
                {
                    size: "10mm",
                    price: "₱22.00",
                    weight: "0.617",
                    lengths: { '6.0M': '81.44', '7.5M': '101.81', '9.0M': '122.17', '10.5M': '142.53', '12.0M': '162.89' }
                },
                {
                    size: "12mm",
                    price: "₱22.00",
                    weight: "0.888",
                    lengths: { '6.0M': '117.22', '7.5M': '146.52', '9.0M': '175.82', '10.5M': '205.13', '12.0M': '234.43' }
                },
                {
                    size: "16mm",
                    price: "₱21.80",
                    weight: "1.578",
                    lengths: { '6.0M': '206.40', '7.5M': '258.00', '9.0M': '309.60', '10.5M': '361.20', '12.0M': '412.80' }
                },
                {
                    size: "20mm",
                    price: "₱21.80",
                    weight: "2.466",
                    lengths: { '6.0M': '322.55', '7.5M': '403.19', '9.0M': '483.83', '10.5M': '564.47', '12.0M': '645.11' }
                },
                {
                    size: "25mm",
                    price: "₱21.80",
                    weight: "3.853",
                    lengths: { '6.0M': '503.97', '7.5M': '629.97', '9.0M': '755.96', '10.5M': '881.95', '12.0M': '1007.94' }
                },
                {
                    size: "28mm",
                    price: "₱21.80",
                    weight: "4.834",
                    lengths: { '6.0M': '632.29', '7.5M': '790.36', '9.0M': '948.43', '10.5M': '1106.50', '12.0M': '1264.57' }
                },
                {
                    size: "32mm",
                    price: "₱22.00",
                    weight: "6.313",
                    lengths: { '6.0M': '833.32', '7.5M': '1041.65', '9.0M': '1249.97', '10.5M': '1458.30', '12.0M': '1666.63' }
                },
                {
                    size: "36mm",
                    price: "₱22.00",
                    weight: "7.99",
                    lengths: { '6.0M': '1054.68', '7.5M': '1318.35', '9.0M': '1582.02', '10.5M': '1845.69', '12.0M': '2109.36' }
                }
            ],
            shortdescp: "High-quality Grade 40 reinforcing steel bars",
            description: "Premium Grade 40 reinforcing steel bars manufactured to international standards. Perfect for residential and light commercial construction projects requiring reliable structural reinforcement."
        },
        {
            id: 2,
            name: "Grade 60 Rebars",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg",
            priceRange: "₱22.50 - ₱22.70/KG",
            sizes: [
                {
                    size: "10mm",
                    price: "₱22.70",
                    weight: "0.617",
                    lengths: { '6.0M': '84.04', '7.5M': '105.04', '9.0M': '126.05', '10.5M': '147.06', '12.0M': '168.07' }
                },
                {
                    size: "12mm",
                    price: "₱22.70",
                    weight: "0.888",
                    lengths: { '6.0M': '120.95', '7.5M': '151.18', '9.0M': '181.42', '10.5M': '211.65', '12.0M': '241.89' }
                },
                {
                    size: "16mm",
                    price: "₱22.50",
                    weight: "1.578",
                    lengths: { '6.0M': '213.03', '7.5M': '266.29', '9.0M': '319.55', '10.5M': '372.80', '12.0M': '426.06' }
                },
                {
                    size: "20mm",
                    price: "₱22.50",
                    weight: "2.466",
                    lengths: { '6.0M': '332.91', '7.5M': '416.14', '9.0M': '499.37', '10.5M': '582.59', '12.0M': '665.82' }
                },
                {
                    size: "25mm",
                    price: "₱22.50",
                    weight: "3.853",
                    lengths: { '6.0M': '520.16', '7.5M': '650.19', '9.0M': '780.23', '10.5M': '910.27', '12.0M': '1040.31' }
                },
                {
                    size: "28mm",
                    price: "₱22.50",
                    weight: "4.834",
                    lengths: { '6.0M': '652.59', '7.5M': '815.74', '9.0M': '978.89', '10.5M': '1142.03', '12.0M': '1305.18' }
                },
                {
                    size: "32mm",
                    price: "₱22.70",
                    weight: "6.313",
                    lengths: { '6.0M': '859.83', '7.5M': '1074.79', '9.0M': '1289.75', '10.5M': '1504.70', '12.0M': '1719.66' }
                },
                {
                    size: "36mm",
                    price: "₱22.70",
                    weight: "7.99",
                    lengths: { '6.0M': '1088.24', '7.5M': '1360.30', '9.0M': '1632.36', '10.5M': '1904.42', '12.0M': '2176.48' }
                }
            ],
            shortdescp: "Superior Grade 60 reinforcing steel bars",
            description: "High-strength Grade 60 reinforcing steel bars engineered for demanding construction applications. Ideal for commercial buildings, bridges, and heavy-duty infrastructure projects."
        }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ModalProps>(projects[0]);
    const openModal = useCallback((details: ModalProps) => {
        setSelectedProduct(details);
        setIsOpen(true);
    }, []);
    return (
        <div className="top-banner">
            <h1>Products</h1>
            <Modal product={selectedProduct} isOpen={isOpen} setIsOpen={setIsOpen} />
            <Carousel items={projects} openModal={openModal} />
            <div className="full-width-flex">
                <button
                    className="product-button"
                    onClick={() =>
                        window.open(
                            "https://drive.google.com/file/d/1KmRxQPS3W630KvdKM4bNdMeA4FNBqlFS/view?usp=drive_link",
                            "_blank"
                        )
                    }
                >
                    VIEW FULL PRODUCT LIST <ArrowRight className="icon-sm" />
                </button>
            </div>
        </div>

    )
}

const BannerCard = ({ details, dragged, click }: { details: ModalProps, dragged: boolean, click: (item: ModalProps) => void }) => {
    const handleClick = () => {
        if (!dragged) {
            click(details);
        }
    }
    return (
        <div className='banner-card' onClick={handleClick}>
            <img src={details.image} alt="" />
            <h2>{details.name}</h2>
            <p>{details.shortdescp}</p>
        </div>
    )
}

const Partners = () => {
    const logos = [
        {
            name: "Bendotti",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362856/partner1_dita9v.png"
        },
        {
            name: "CMC",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362870/partner2_qqt38f.png"
        },
        {
            name: "Steel Work",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362876/partner3_ygi4en.png"
        },
        {
            name: "Atlas Steel",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362882/partner4_qiimgs.png"
        }

    ];

    return (
        <div className="partners-cont">
            <h2>Our Partners</h2>
            {logos.map((logo, index) => (
                <PartnersCard key={index} name={logo.name} url={logo.url} />
            ))}
        </div>
    )
}

const PartnersCard = ({ name, url }: { name: string, url: string }) => {
    return (
        <div className='partners-card'>
            <img src={url} alt={name} />
        </div>
    )
}

// ... existing code ...

const OpticalEmissionSpectrometer = () => {
    return (
        <div className="spectrometer-section">
            {/* Header */}
            <div className="spectrometer-header">
                <h2 className="spectrometer-title">
                    Optical Emission
                    <span className="spectrometer-title-highlight"> Spectrometer</span>
                </h2>
                <p className="spectrometer-subtitle">
                    Advanced technology for uncompromised material analysis and quality assurance
                </p>
            </div>

            {/* Image + Features grid */}
            <div className="spectrometer-container">
                {/* Left: Image */}
                <div className="spectrometer-image-container">
                    <img
                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753189483/productpageSpectrometer_nkp7rb.jpg"
                        alt="Optical Emission Spectrometer"
                        className="spectrometer-image"
                    />
                    <div className="spectrometer-logo-badge">
                        <img
                            src="https://res.cloudinary.com/drrzinr9v/image/upload/v1754201352/USSCI_logo_19x17inch-removebg-preview_idrn0g.png"
                            alt="USSCI Logo"
                        />
                    </div>
                </div>

                {/* Right: Features */}
                <div className="spectrometer-content">
                    <div className="spectrometer-features">
                        <div className="spectrometer-feature">
                            <div className="spectrometer-feature-dot" />
                            <div>
                                <h4 className="spectrometer-feature-title">
                                    Spark Excitation Analysis
                                </h4>
                                <p className="spectrometer-feature-description">
                                    Energy from electrode sparks excites specimen atoms, producing precise electromagnetic spectral patterns
                                </p>
                            </div>
                        </div>

                        <div className="spectrometer-feature">
                            <div className="spectrometer-feature-dot" />
                            <div>
                                <h4 className="spectrometer-feature-title">
                                    Quantitative Analysis
                                </h4>
                                <p className="spectrometer-feature-description">
                                    Measures spectral peak intensity for accurate qualitative and quantitative metal composition analysis
                                </p>
                            </div>
                        </div>

                        <div className="spectrometer-feature">
                            <div className="spectrometer-feature-dot" />
                            <div>
                                <h4 className="spectrometer-feature-title">
                                    Quality Enhancement
                                </h4>
                                <p className="spectrometer-feature-description">
                                    Enables effective raw material management and production efficiency optimization
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full width quote BELOW grid */}
            <div className="spectrometer-quote">
                <p>
                    In line with our commitment to development and continued pursuit of excellence, our Optical Emission Spectrometer
                    represents another step towards furthering our dedication to quality improvement and production efficiency.
                </p>
            </div>
        </div>
    );
};

// ... rest of the file ...


const MainBody = () => {
    return (
        <div className="main-body">
            <OpticalEmissionSpectrometer />
        </div>
    )
}

// Updated interface for finished projects
interface ProjectImage {
    id: number;
    name: string;
    description: string;
    image: string;
}

interface ProjectGroup {
    id: number;
    title: string;
    description: string;
    cardImage: string
    images: ProjectImage[];
}

// Enhanced Project Card Component
const ProjectCard = ({ project, onClick }: { project: ProjectGroup, onClick: (project: ProjectGroup) => void }) => {
    return (
        <div className="project-card" onClick={() => onClick(project)}>
            <div className="project-card-image-container">
                <img src={project.cardImage} alt={project.title} className="project-card-image" />
                <div className="project-card-overlay">
                    <div className="project-card-overlay-content">
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-description">{project.description}</p>
                        <div className="project-card-cta">
                            <span>View Gallery</span>
                            <ArrowRight className="project-card-arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Enhanced Scrollable Carousel Component
const ScrollableProjectCarousel = ({ projects, openModal }: { projects: ProjectGroup[], openModal: (project: ProjectGroup) => void }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    // Check scroll position
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    };

    // Scroll functions
    const scrollToLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -350, behavior: 'smooth' });
        }
    };

    const scrollToRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 350, behavior: 'smooth' });
        }
    };

    // Auto-scroll functionality
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        let autoScrollInterval: NodeJS.Timeout;

        const startAutoScroll = () => {
            autoScrollInterval = setInterval(() => {
                if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
                    // If at the end, scroll back to beginning
                    carousel.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    // Otherwise scroll right
                    carousel.scrollBy({ left: 350, behavior: 'smooth' });
                }
            }, 4000); // Auto-scroll every 4 seconds
        };

        const stopAutoScroll = () => {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        };

        // Start auto-scroll
        startAutoScroll();

        // Stop auto-scroll on hover or interaction
        carousel.addEventListener('mouseenter', stopAutoScroll);
        carousel.addEventListener('mouseleave', startAutoScroll);
        carousel.addEventListener('touchstart', stopAutoScroll);

        return () => {
            stopAutoScroll();
            if (carousel) {
                carousel.removeEventListener('mouseenter', stopAutoScroll);
                carousel.removeEventListener('mouseleave', startAutoScroll);
                carousel.removeEventListener('touchstart', stopAutoScroll);
            }
        };
    }, []);

    // Mouse drag functionality
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft ?? 0));
        setScrollLeft(carouselRef.current?.scrollLeft ?? 0);
        e.preventDefault();
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - (carouselRef.current?.offsetLeft ?? 0);
        const walk = (x - startX) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft - walk;
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
        setScrollLeft(carouselRef.current?.scrollLeft ?? 0);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const x = e.touches[0].clientX;
        const walk = (startX - x) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft + walk;
        }
    };

    useEffect(() => {
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.addEventListener('scroll', checkScrollPosition);
            checkScrollPosition();
            return () => carousel.removeEventListener('scroll', checkScrollPosition);
        }
    }, []);

    return (
        <div className="scrollable-carousel-container">
            {/* Navigation Arrows */}
            <button
                className={`carousel-nav-btn carousel-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
                onClick={scrollToLeft}
                disabled={!canScrollLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft className="carousel-nav-icon" />
            </button>

            <button
                className={`carousel-nav-btn carousel-nav-right ${!canScrollRight ? 'disabled' : ''}`}
                onClick={scrollToRight}
                disabled={!canScrollRight}
                aria-label="Scroll right"
            >
                <ChevronRightIcon className="carousel-nav-icon" />
            </button>

            {/* Carousel Container */}
            <div
                ref={carouselRef}
                className="scrollable-carousel"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={openModal}
                    />
                ))}
                {/* Duplicate cards for infinite scroll effect */}
                {projects.map((project) => (
                    <ProjectCard
                        key={`duplicate-${project.id}`}
                        project={project}
                        onClick={openModal}
                    />
                ))}
            </div>

            {/* Scroll Indicators */}
            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className="carousel-indicator"
                        onClick={() => {
                            if (carouselRef.current) {
                                carouselRef.current.scrollTo({
                                    left: index * 350,
                                    behavior: 'smooth'
                                });
                            }
                        }}
                    />
                ))}
            </div>


        </div>
    );
};

// Projects List Modal Component
const ProjectsListModal = ({ isOpen, setIsOpen }: ProjectsListModalProps) => {
    const infrastructureProjects = [
        "Batangas Flyover",
        "C-5 Flyover",
        "Cavitex Airport",
        "Cavitex C-5 Link Expressway",
        "Kalayaan Bridge",
        "La Mesa Dam",
        "LRT – Sumitomo Project",
        "Nagtahan Bridge",
        "NAIA Skyway",
        "NAIA Terminal 2",
        "New Bacolod Silay Airport",
        "NLEX Interchange",
        "NLEX Toll Plaza",
        "Skyway Stage 3",
        "SLEX Rehabilitation",
        "Startoll Bridge",
        "Subic Bay Port Development Project",
        "Subic Clark Pampanga Expressway"
    ];

    const currentProjects = [
        "MRT 7",
        "SLEX Widening"
    ];

    const closeModal = () => {
        setIsOpen(false);
    };

    if (!isOpen) return null;

    return (
        <div className="projects-list-modal-overlay" onClick={closeModal}>
            <div className="projects-list-modal" onClick={(e) => e.stopPropagation()}>
                <div className="projects-list-modal-header">
                    <h2 className="projects-list-modal-title">Complete Projects List</h2>
                    <button onClick={closeModal} className="projects-list-modal-close">
                        <X className="icon" />
                    </button>
                </div>

                <div className="projects-list-modal-content">
                    <div className="projects-list-section">
                        <h3 className="projects-list-section-title">Infrastructure Projects</h3>
                        <div className="projects-list-grid">
                            {infrastructureProjects.map((project, index) => (
                                <div key={index} className="projects-list-item">
                                    <div className="projects-list-number">{index + 1}</div>
                                    <span className="projects-list-name">{project}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="projects-list-section">
                        <h3 className="projects-list-section-title">Current Projects</h3>
                        <div className="projects-list-grid">
                            {currentProjects.map((project, index) => (
                                <div key={index} className="projects-list-item">
                                    <div className="projects-list-number">{index + 1}</div>
                                    <span className="projects-list-name">{project}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const FinishedProjects = () => {
    const projectGroups: ProjectGroup[] = [
        {
            id: 1,
            title: "Past Developments",
            description: "A comprehensive infrastructure development project showcasing our steel reinforcement solutions in major construction works. These projects demonstrate our commitment to quality and reliability in structural engineering.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_2_crov5j.jpg",
            images: [
                {
                    id: 1,
                    name: "Magallanes Interchange Project",
                    description: "Major infrastructure development featuring our premium Grade 60 rebars for enhanced structural integrity and durability in high-traffic interchange construction.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg"
                },
                {
                    id: 2,
                    name: "San Juanico Bridge",
                    description: "Critical bridge construction project utilizing our high-strength reinforcement solutions to ensure long-lasting structural performance and safety standards.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg"
                },
                {
                    id: 3,
                    name: "EDSA Shrine",
                    description: "Extensive highway development showcasing our comprehensive steel reinforcement capabilities for large-scale transportation infrastructure projects.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_1_wzrmyq.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "Present Developments",
            description: "Current ongoing projects highlighting our capability to supply high-quality materials for extensive construction developments across various sectors.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_Pics_for_website_1_yzhack.jpg",
            images: [
                {
                    id: 4,
                    name: "Metro Manila Skyway",
                    description: "Advanced foundation work for major commercial development utilizing our precision-manufactured rebars for optimal structural support and longevity.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_13_wrnwf1.jpg"
                },
                {
                    id: 5,
                    name: "Metro Manila Skyway",
                    description: "Multi-story building construction featuring our Grade 40 and Grade 60 reinforcement solutions for superior structural framework and seismic resistance.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_11_btaknk.jpg"
                },
                {
                    id: 6,
                    name: "Metro Manila Skyway",
                    description: "Progressive building construction demonstrating our consistent quality delivery across multiple construction phases and complex architectural requirements.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_10_gqdpk6.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Future Developments",
            description: "Upcoming multi-phase development project featuring our comprehensive steel reinforcement solutions, showcasing our ability to deliver consistent quality across large-scale construction projects.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_3_haeba5.jpg",
            images: [
                {
                    id: 7,
                    name: "MRT-7",
                    description: "Comprehensive site preparation and initial foundation work for large-scale residential development, featuring systematic reinforcement planning and installation.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_8_pbadil.jpg"
                },
                {
                    id: 8,
                    name: "MRT Extension",
                    description: "Multi-unit residential construction showcasing our versatile rebar solutions designed for modern housing developments with emphasis on safety and durability.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg"
                },
                {
                    id: 9,
                    name: "MRT Extension",
                    description: "Final construction phases demonstrating successful integration of our reinforcement materials in creating safe, durable residential structures for community development.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_3_hqua6e.jpg"
                }
            ]
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectGroup>(projectGroups[0]);
    const [isProjectsListOpen, setIsProjectsListOpen] = useState(false);

    const openProjectModal = useCallback((project: ProjectGroup) => {
        setSelectedProject(project);
        setIsOpen(true);
    }, []);

    return (
        <div className="finished-products">
            <div className="projects-header">
                <h1>Our Projects</h1>
                <p className="projects-subtitle">
                    Explore our comprehensive portfolio of construction projects showcasing our quality steel reinforcement solutions
                </p>
            </div>
            <ScrollableProjectCarousel projects={projectGroups} openModal={openProjectModal} />

            {/* View Other Projects Button */}
            <div className="view-other-projects-container">
                <button
                    className="view-other-projects-button"
                    onClick={() => setIsProjectsListOpen(true)}
                >
                    VIEW OTHER PROJECTS <ArrowRight className="icon-sm" />
                </button>
            </div>

            <ProjectModal project={selectedProject} isOpen={isOpen} setIsOpen={setIsOpen} />
            <ProjectsListModal isOpen={isProjectsListOpen} setIsOpen={setIsProjectsListOpen} />
        </div>
    );
};

const ProjectModal = ({ project, isOpen, setIsOpen }: { project: ProjectGroup, isOpen: boolean, setIsOpen: (o: boolean) => void }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === project.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? project.images.length - 1 : prev - 1
        );
    };

    const closeModal = () => {
        setIsOpen(false);
        setCurrentImageIndex(0);
    };

    if (!isOpen) return null;

    const currentImage = project.images[currentImageIndex];

    return (
        <div className="project-modal-overlay" onClick={closeModal}>
            <div className="project-modal" onClick={(e) => e.stopPropagation()}>
                {/* Close Button */}
                <button onClick={closeModal} className="modal-close-btn">
                    ×
                </button>

                {/* Header */}
                <div className="project-modal-header">
                    <h2 className="project-modal-title">{project.title}</h2>
                    <p className="project-modal-description">{project.description}</p>
                </div>

                {/* Main Content */}
                <div className="project-modal-content">
                    <button onClick={prevImage} className="modal-nav-btn">
                        <ArrowLeft className="modal-nav-icon" />
                    </button>

                    <div className="project-modal-image-container">
                        <img
                            src={currentImage.image}
                            alt={currentImage.name}
                            className="project-modal-image"
                        />
                        <div className="project-image-title-overlay">
                            <h3 className="project-image-title">{currentImage.name}</h3>
                        </div>
                    </div>

                    <button onClick={nextImage} className="modal-nav-btn">
                        <ArrowRight className="modal-nav-icon" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="project-modal-indicators">
                    {project.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`modal-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        />
                    ))}
                </div>

                {/* Counter */}
                <div className="project-modal-counter">
                    {currentImageIndex + 1} of {project.images.length}
                </div>
            </div>
        </div>
    );
};

const Carousel = ({ items, openModal }: { items: ModalProps[], openModal: (details: ModalProps) => void }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    let dragged: boolean = false;
    let dragging: boolean = false;
    let mouseX: number = 0;
    const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dragged = false;
        dragging = true;
        mouseX = e.pageX - (carouselRef.current?.offsetLeft ?? 0);
    }
    const mouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        dragging = false;
    }
    const bannerClick = (item: ModalProps) => {
        if (!dragged) {
            openModal(item)
        }
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (dragging) {
            const x = e.pageX - carouselRef.current!.offsetLeft;
            const walk = (x - mouseX) * 1;
            dragged = true;
            carouselRef.current!.scrollLeft -= walk;
        }
    }

    return (
        <div className='carousel' ref={carouselRef}
             onMouseDown={mouseDown}
             onMouseUp={mouseUp}
             onMouseMove={mouseMove}
        >
            {items.map((project, index) => (
                <BannerCard key={index} details={project} dragged={dragged} click={bannerClick} />
            ))}
        </div>
    )
}

const Modal = ({ product, isOpen, setIsOpen }: { product: ModalProps, isOpen: boolean, setIsOpen:(o:boolean) => void }) => {
    return (
        <div className="modal-cont" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className='modal'>
                <svg className='close-button' onClick={() => { setIsOpen(false) }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5"></circle>
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                    </g>
                </svg>

                <div className="modal-header">
                    <img src={product.image} alt={product.name} />
                    <div className="modal-title-section">
                        <h2 className='product-name'>{product.name}</h2>
                        <p className='price-range'>{product.priceRange}</p>
                        <p className='product-description'>{product.description}</p>
                    </div>
                </div>

                <div className="pricing-table-container">
                    <h3>Pricing Information</h3>
                    <div className="table-wrapper">
                        <table className="pricing-table">
                            <thead>
                            <tr>
                                <th>Size</th>
                                <th>Price/KG</th>
                                <th>Weight KG/M</th>
                                <th>6.0M</th>
                                <th>7.5M</th>
                                <th>9.0M</th>
                                <th>10.5M</th>
                                <th>12.0M</th>
                            </tr>
                            </thead>
                            <tbody>
                            {product.sizes.map((size, index) => (
                                <tr key={index}>
                                    <td className="size-cell">{size.size}</td>
                                    <td className="price-cell">{size.price}</td>
                                    <td className="weight-cell">{size.weight}</td>
                                    <td>{size.lengths['6.0M']}</td>
                                    <td>{size.lengths['7.5M']}</td>
                                    <td>{size.lengths['9.0M']}</td>
                                    <td>{size.lengths['10.5M']}</td>
                                    <td>{size.lengths['12.0M']}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main style={{ position: 'relative' }}>
                <TopBanner />
                <Partners />
                <MainBody />
                <FinishedProjects />
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