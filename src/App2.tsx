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
                        <Link to="/" className="nav-link">Home</Link>
                        <button>
                            About Us <ChevronDown className="icon-sm" />
                        </button>
                        <button>
                            Products <ChevronDown className="icon-sm active" />
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
                            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                            <a href="#" onClick={closeMenu}>About Us</a>
                            <Link to="/" className="nav-link active" onClick={closeMenu}>Products</Link>
                            <a href="#" onClick={closeMenu}>Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
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
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
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

const MainBody = () => {
    return (
        <div className="main-body">
            <div className="card-row">
                <div className="card card-left">
                    <div className="card-content">
                        <h2>Optical Emiission Spectrometer</h2>
                        <p>
                            In line with our commitment to development and continued pursuit of excellence, the acquisition of an Optical Emission Spectrometer was another step towards furthering our dedication to improve on our quality and develop efficiency in our production for the benefit of both the company and the end users. In the Optical Emission Spectroscopy, atoms in specimen materials are excited by energy that comes from a spark formed between specimen and electrode. The energy of the spark causes the electrons in the specimen to emit light which is converted into electromagnetic spectral pattern. By measuring the intensity of the peaks in the said spectrum, the analyser can produce qualitative and quantitative metal analysis of material composition with uncompromised accuracy. It is through this analysis that we determine the integrity of the raw materials for use in our production. This allows us to define the most effective way to use the raw materials, through effective segregation and management of raw materials allocation. With an effective system of raw materials management, it enhances production efficiency and further improves on the quality of reinforcing bars for public use.
                        </p>
                    </div>
                </div>
                <div className="card card-middle">
                    <div className="card-content">

                    </div>
                </div>
                <div className="card card-right">
                    <div className="">

                    </div>
                </div>
            </div>
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
                    name: "Project 1",
                    description: "Description",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg"
                },
                {
                    id: 2,
                    name: "Project 2",
                    description: "Description",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg"
                },
                {
                    id: 3,
                    name: "Project 3",
                    description: "Description",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_1_wzrmyq.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "Present Developments",
            description: "This project highlights our capability to supply high-quality materials for extensive construction projects.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_Pics_for_website_1_yzhack.jpg",
            images: [
                {
                    id: 4,
                    name: "Foundation Work",
                    description: "Deep foundation reinforcement with our Grade 60 rebars",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_13_wrnwf1.jpg"
                },
                {
                    id: 5,
                    name: "Structural Framework",
                    description: "Building framework construction using our steel products",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_11_btaknk.jpg"
                },
                {
                    id: 6,
                    name: "Upper Level Construction",
                    description: "Multi-story construction showcasing structural integrity",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_10_gqdpk6.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Future Developments",
            description: "Multi-phase residential development project featuring our comprehensive steel reinforcement solutions. This showcases our ability to deliver consistent quality across large-scale construction projects.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_3_haeba5.jpg",
            images: [
                {
                    id: 7,
                    name: "Site Preparation",
                    description: "Initial site preparation and foundation work for the project",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_8_pbadil.jpg"
                },
                {
                    id: 8,
                    name: "Building Framework",
                    description: "Multi-story building framework construction",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg"
                },
                {
                    id: 9,
                    name: "Completion Phase",
                    description: "Final construction phase showing completed structures",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_3_hqua6e.jpg"
                }
            ]
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectGroup>(projectGroups[0]);

    const openProjectModal = useCallback((project: ProjectGroup) => {
        setSelectedProject(project);
        setIsOpen(true);
    }, []);

    return (
        <div className="finished-products">
            <ProjectModal project={selectedProject} isOpen={isOpen} setIsOpen={setIsOpen} />
            <h1 style={{ marginBottom: '50px'}}>Finished Projects</h1>
            <ProjectCarousel projects={projectGroups} openModal={openProjectModal} />
        </div>
    )
}

const ProjectImageCard = ({ project, click }: { project: ProjectGroup, click: (project: ProjectGroup) => void }) => {
    return (
        <div className='banner-card' onClick={() => click(project)}>
            <img src={project.cardImage} alt={project.title} />
            <h2>{project.title}</h2>
            <p>Click to view project details</p>
        </div>
    )
}

// Project carousel component - using original carousel class
const ProjectCarousel = ({ projects, openModal }: { projects: ProjectGroup[], openModal: (project: ProjectGroup) => void }) => {
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

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (dragging) {
            const x = e.pageX - carouselRef.current!.offsetLeft;
            const walk = (x - mouseX) * 1;
            dragged = true;
            carouselRef.current!.scrollLeft -= walk;
        }
    }

    const projectClick = (project: ProjectGroup) => {
        if (!dragged) {
            openModal(project);
        }
    }

    return (
        <div className='carousel' ref={carouselRef}
             onMouseDown={mouseDown}
             onMouseUp={mouseUp}
             onMouseMove={mouseMove}
        >
            {projects.map(project => (
                <ProjectImageCard key={project.id} project={project} click={projectClick} />
            ))}
        </div>
    )
}

// Project modal with image navigation
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

    return (
        <div className="project-modal-cont">
            <div className='project-modal'>
                <svg className='close-button' onClick={closeModal} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <circle cx="12" cy="12" r="10" stroke="#1C274C" strokeWidth="1.5"></circle>
                        <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" strokeWidth="1.5" strokeLinecap="round"></path>
                    </g>
                </svg>

                <div className='project-modal-header'>
                    <h2 className='project-title'>{project.title}</h2>
                    {/* Only show the main project description */}
                    <p className='project-description'>{project.description}</p>
                </div>

                <div className='image-navigation-container'>
                    <button className='nav-button prev-button' onClick={prevImage}>
                        <ArrowLeft className='icon' />
                    </button>

                    <div className='image-container'>
                        {/* Only show the image, no individual image name or description */}
                        <img src={project.images[currentImageIndex].image} alt={project.images[currentImageIndex].name} />
                    </div>

                    <button className='nav-button next-button' onClick={nextImage}>
                        <ArrowRight className='icon' />
                    </button>
                </div>

                <div className='image-indicators'>
                    {project.images.map((_, index) => (
                        <div
                            key={index}
                            className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(index)}
                        />
                    ))}
                </div>

                <div className='image-counter'>
                    {currentImageIndex + 1} of {project.images.length}
                </div>
            </div>
        </div>
    )
}

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