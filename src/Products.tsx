import { useState, useEffect, useRef, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Products.css';

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const ArrowLeft = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
);

const ChevronLeft = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

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

interface Product {
    id: number;
    name: string;
    image: string;
    priceRange: string;
    description: string;
    sizes: SizePrice[];
}

// Projects List Modal Interface
interface ProjectsListModalProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
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

const products: Product[] = [
    {
        id: 1,
        name: "Grade 40 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg",
        priceRange: "₱21.80 - ₱22.00/KG",
        description: "Premium Grade 40 reinforcing steel bars manufactured to international standards. Perfect for residential and light commercial construction projects requiring reliable structural reinforcement.",
        sizes: [
            { size: "10mm", price: "₱22.00", weight: "0.617", lengths: { '6.0M': '81.44', '7.5M': '101.81', '9.0M': '122.17', '10.5M': '142.53', '12.0M': '162.89' }},
            { size: "12mm", price: "₱22.00", weight: "0.888", lengths: { '6.0M': '117.22', '7.5M': '146.52', '9.0M': '175.82', '10.5M': '205.13', '12.0M': '234.43' }},
            { size: "16mm", price: "₱21.80", weight: "1.578", lengths: { '6.0M': '206.40', '7.5M': '258.00', '9.0M': '309.60', '10.5M': '361.20', '12.0M': '412.80' }},
            { size: "20mm", price: "₱21.80", weight: "2.466", lengths: { '6.0M': '322.55', '7.5M': '403.19', '9.0M': '483.83', '10.5M': '564.47', '12.0M': '645.11' }},
            { size: "25mm", price: "₱21.80", weight: "3.853", lengths: { '6.0M': '503.97', '7.5M': '629.97', '9.0M': '755.96', '10.5M': '881.95', '12.0M': '1007.94' }},
            { size: "28mm", price: "₱21.80", weight: "4.834", lengths: { '6.0M': '632.29', '7.5M': '790.36', '9.0M': '948.43', '10.5M': '1106.50', '12.0M': '1264.57' }},
            { size: "32mm", price: "₱22.00", weight: "6.313", lengths: { '6.0M': '833.32', '7.5M': '1041.65', '9.0M': '1249.97', '10.5M': '1458.30', '12.0M': '1666.63' }},
            { size: "36mm", price: "₱22.00", weight: "7.99", lengths: { '6.0M': '1054.68', '7.5M': '1318.35', '9.0M': '1582.02', '10.5M': '1845.69', '12.0M': '2109.36' }}
        ]
    },
    {
        id: 2,
        name: "Grade 60 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg",
        priceRange: "₱22.50 - ₱22.70/KG",
        description: "High-strength Grade 60 reinforcing steel bars engineered for demanding construction applications. Ideal for commercial buildings, bridges, and heavy-duty infrastructure projects.",
        sizes: [
            { size: "10mm", price: "₱22.70", weight: "0.617", lengths: { '6.0M': '84.04', '7.5M': '105.04', '9.0M': '126.05', '10.5M': '147.06', '12.0M': '168.07' }},
            { size: "12mm", price: "₱22.70", weight: "0.888", lengths: { '6.0M': '120.95', '7.5M': '151.18', '9.0M': '181.42', '10.5M': '211.65', '12.0M': '241.89' }},
            { size: "16mm", price: "₱22.50", weight: "1.578", lengths: { '6.0M': '213.03', '7.5M': '266.29', '9.0M': '319.55', '10.5M': '372.80', '12.0M': '426.06' }},
            { size: "20mm", price: "₱22.50", weight: "2.466", lengths: { '6.0M': '332.91', '7.5M': '416.14', '9.0M': '499.37', '10.5M': '582.59', '12.0M': '665.82' }},
            { size: "25mm", price: "₱22.50", weight: "3.853", lengths: { '6.0M': '520.16', '7.5M': '650.19', '9.0M': '780.23', '10.5M': '910.27', '12.0M': '1040.31' }},
            { size: "28mm", price: "₱22.50", weight: "4.834", lengths: { '6.0M': '652.59', '7.5M': '815.74', '9.0M': '978.89', '10.5M': '1142.03', '12.0M': '1305.18' }},
            { size: "32mm", price: "₱22.70", weight: "6.313", lengths: { '6.0M': '859.83', '7.5M': '1074.79', '9.0M': '1289.75', '10.5M': '1504.70', '12.0M': '1719.66' }},
            { size: "36mm", price: "₱22.70", weight: "7.99", lengths: { '6.0M': '1088.24', '7.5M': '1360.30', '9.0M': '1632.36', '10.5M': '1904.42', '12.0M': '2176.48' }}
        ]
    }
];

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

const ScrollableProjectCarousel = ({ projects, openModal }: { projects: ProjectGroup[], openModal: (project: ProjectGroup) => void }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    // Create multiple copies for seamless infinite scroll
    const infiniteProjects = [...projects, ...projects, ...projects, ...projects];

    // Check scroll position
    const checkScrollPosition = () => {
        if (carouselRef.current) {
            const { scrollLeft } = carouselRef.current;
        }
    };

    // Infinite scroll logic
    const handleInfiniteScroll = () => {
        if (!carouselRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        const cardWidth = 950 + 30; // card width + gap
        const projectsLength = projects.length;
        const oneSetWidth = projectsLength * cardWidth;

        // If we've scrolled past the second set, jump back to the first set
        if (scrollLeft >= oneSetWidth * 2) {
            carouselRef.current.scrollLeft = scrollLeft - oneSetWidth;
        }
        // If we've scrolled before the first set, jump to the second set
        else if (scrollLeft <= 0) {
            carouselRef.current.scrollLeft = oneSetWidth;
        }
    };

    // Initialize scroll position to start from the second set (for seamless backward scroll)
    useEffect(() => {
        if (carouselRef.current && projects.length > 0) {
            const cardWidth = 950 + 30; // card width + gap
            const oneSetWidth = projects.length * cardWidth;
            carouselRef.current.scrollLeft = oneSetWidth;
        }
    }, [projects]);

    // Scroll functions
    const scrollToLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -980, behavior: 'smooth' });
        }
    };

    const scrollToRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 980, behavior: 'smooth' });
        }
    };

    // Auto-scroll functionality with infinite loop
    useEffect(() => {
        if (!isAutoScrolling) return;

        const carousel = carouselRef.current;
        if (!carousel) return;

        let autoScrollInterval: number;

        const startAutoScroll = () => {
            autoScrollInterval = window.setInterval(() => {
                if (carousel) {
                    // Always scroll right for auto-scroll
                    carousel.scrollBy({ left: 980, behavior: 'smooth' });
                }
            }, 4000);
        };

        const stopAutoScroll = () => {
            if (autoScrollInterval) {
                clearInterval(autoScrollInterval);
            }
        };

        // Start auto-scroll
        startAutoScroll();

        // Stop auto-scroll on hover or interaction
        const handleMouseEnter = () => {
            setIsAutoScrolling(false);
            stopAutoScroll();
        };

        const handleMouseLeave = () => {
            setIsAutoScrolling(true);
        };

        const handleTouchStart = () => {
            setIsAutoScrolling(false);
            stopAutoScroll();
        };

        carousel.addEventListener('mouseenter', handleMouseEnter);
        carousel.addEventListener('mouseleave', handleMouseLeave);
        carousel.addEventListener('touchstart', handleTouchStart);

        return () => {
            stopAutoScroll();
            if (carousel) {
                carousel.removeEventListener('mouseenter', handleMouseEnter);
                carousel.removeEventListener('mouseleave', handleMouseLeave);
                carousel.removeEventListener('touchstart', handleTouchStart);
            }
        };
    }, [isAutoScrolling]);

    // Handle scroll events for infinite scroll
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const handleScroll = () => {
            handleInfiniteScroll();
            checkScrollPosition();
        };

        carousel.addEventListener('scroll', handleScroll);
        checkScrollPosition();

        return () => {
            if (carousel) {
                carousel.removeEventListener('scroll', handleScroll);
            }
        };
    }, [projects]);

    // Mouse drag functionality
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(e.pageX - (carouselRef.current?.offsetLeft ?? 0));
        setScrollLeft(carouselRef.current?.scrollLeft ?? 0);
        setIsAutoScrolling(false);
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
        setTimeout(() => setIsAutoScrolling(true), 2000); // Resume auto-scroll after 2 seconds
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    // Touch events for mobile
    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
        setScrollLeft(carouselRef.current?.scrollLeft ?? 0);
        setIsAutoScrolling(false);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        const x = e.touches[0].clientX;
        const walk = (startX - x) * 2;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollLeft + walk;
        }
    };

    const handleTouchEnd = () => {
        setTimeout(() => setIsAutoScrolling(true), 2000); // Resume auto-scroll after 2 seconds
    };

    return (
        <div className="scrollable-carousel-container">
            {/* Navigation Arrows - Always show them */}
            <button
                className="carousel-nav-btn carousel-nav-left"
                onClick={scrollToLeft}
                aria-label="Scroll left"
            >
                <ChevronLeft className="carousel-nav-icon" />
            </button>

            <button
                className="carousel-nav-btn carousel-nav-right"
                onClick={scrollToRight}
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
                onTouchEnd={handleTouchEnd}
                style={{
                    scrollBehavior: isDragging ? 'auto' : 'smooth'
                }}
            >
                {infiniteProjects.map((project, index) => (
                    <ProjectCard
                        key={`${project.id}-${index}`}
                        project={project}
                        onClick={openModal}
                    />
                ))}
            </div>

            {/* Scroll Indicators - Show only original project count */}
            <div className="carousel-indicators">
                {projects.map((_, index) => (
                    <div
                        key={index}
                        className={`carousel-indicator ${index === 0 ? 'active' : ''}`}
                        onClick={() => {
                            if (carouselRef.current) {
                                const cardWidth = 950 + 30; // card width + gap
                                const oneSetWidth = projects.length * cardWidth;
                                const targetScroll = oneSetWidth + (index * cardWidth);
                                carouselRef.current.scrollTo({
                                    left: targetScroll,
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

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="products-page">
            <Header />
            
            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-overlay-products">
                    <h1>Our Products</h1>
                    <p>Providing Superior Quality Rebars for Every Construction Need</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-simple">
                <div className="container-simple">
                    <div className="products-grid-main">
                        {products.map((product) => (
                            <div key={product.id} className="product-card-main">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-details">
                                    <h2>{product.name}</h2>
                                    <p className="price-tag">{product.priceRange}</p>
                                    <p className="product-description">{product.description}</p>
                                    <button 
                                        className="btn-view-details"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        View Pricing Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="full-list-cta">
                        <button
                            className="btn-full-list"
                            onClick={() => window.open("https://drive.google.com/file/d/1KmRxQPS3W630KvdKM4bNdMeA4FNBqlFS/view?usp=drive_link", "_blank")}
                        >
                            View Full Product List <ArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Quality Testing Section */}
            <section className="section-simple quality-testing">
                <div className="container-simple">
                    <h2>Optical Emission Spectrometer</h2>
                    <p className="section-subtitle">Advanced technology for uncompromised material analysis and quality assurance</p>
                    
                    <div className="testing-content">
                        <div className="testing-image">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1755264913/viber_image_2025-08-15_14-35-30-423_douzo9.jpg" 
                                alt="Optical Emission Spectrometer"
                            />
                        </div>
                        <div className="testing-info">
                            <div className="feature-item">
                                <h4>Spark Excitation Analysis</h4>
                                <p>Energy from electrode sparks excites specimen atoms, producing precise electromagnetic spectral patterns</p>
                            </div>
                            <div className="feature-item">
                                <h4>Quantitative Analysis</h4>
                                <p>Measures spectral peak intensity for accurate qualitative and quantitative metal composition analysis</p>
                            </div>
                            <div className="feature-item">
                                <h4>Quality Enhancement</h4>
                                <p>Enables effective raw material management and production efficiency optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="section-simple partners-section">
                <div className="container-simple">
                    <h2>Our Partners</h2>
                    <div className="partners-grid">
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362856/partner1_dita9v.png" alt="Bendotti" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362870/partner2_qqt38f.png" alt="CMC" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362876/partner3_ygi4en.png" alt="Steel Work" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362882/partner4_qiimgs.png" alt="Atlas Steel" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Modal */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
                            <X className="icon" />
                        </button>
                        
                        <div className="modal-header">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                            <div>
                                <h2>{selectedProduct.name}</h2>
                                <p className="modal-price">{selectedProduct.priceRange}</p>
                            </div>
                        </div>

                        <div className="pricing-table-wrapper">
                            <h3>Pricing Information</h3>
                            <div className="table-scroll">
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
                                        {selectedProduct.sizes.map((size, index) => (
                                            <tr key={index}>
                                                <td>{size.size}</td>
                                                <td>{size.price}</td>
                                                <td>{size.weight}</td>
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
            )}

            {/* Projects Section */}
            <FinishedProjects />

            <Footer />
        </div>
    );
};

export default Products;
