import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Projects.css';

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
    cardImage: string;
    images: ProjectImage[];
}

const ChevronLeft = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ChevronRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<ProjectGroup | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const projectGroups: ProjectGroup[] = [
        {
            id: 1,
            title: "Past Developments",
            description: "A comprehensive infrastructure development project showcasing our steel reinforcement solutions in major construction works.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_2_crov5j.jpg",
            images: [
                {
                    id: 1,
                    name: "Magallanes Interchange Project",
                    description: "Major infrastructure development featuring our premium Grade 60 rebars for enhanced structural integrity.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg"
                },
                {
                    id: 2,
                    name: "San Juanico Bridge",
                    description: "Critical bridge construction project utilizing our high-strength reinforcement solutions.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg"
                },
                {
                    id: 3,
                    name: "EDSA Shrine",
                    description: "Extensive highway development showcasing our comprehensive steel reinforcement capabilities.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_1_wzrmyq.jpg"
                }
            ]
        },
        {
            id: 2,
            title: "Present Developments",
            description: "Current ongoing projects highlighting our capability to supply high-quality materials for extensive construction developments.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_Pics_for_website_1_yzhack.jpg",
            images: [
                {
                    id: 4,
                    name: "Metro Manila Skyway",
                    description: "Advanced foundation work for major commercial development utilizing our precision-manufactured rebars.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_13_wrnwf1.jpg"
                },
                {
                    id: 5,
                    name: "Metro Manila Skyway Phase 2",
                    description: "Multi-story building construction featuring our Grade 40 and Grade 60 reinforcement solutions.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_11_btaknk.jpg"
                },
                {
                    id: 6,
                    name: "Metro Manila Skyway Phase 3",
                    description: "Progressive building construction demonstrating our consistent quality delivery.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_10_gqdpk6.jpg"
                }
            ]
        },
        {
            id: 3,
            title: "Future Developments",
            description: "Upcoming multi-phase development project featuring our comprehensive steel reinforcement solutions.",
            cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_3_haeba5.jpg",
            images: [
                {
                    id: 7,
                    name: "MRT-7",
                    description: "Comprehensive site preparation and initial foundation work for large-scale development.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_8_pbadil.jpg"
                },
                {
                    id: 8,
                    name: "MRT Extension",
                    description: "Multi-unit construction showcasing our versatile rebar solutions.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg"
                },
                {
                    id: 9,
                    name: "MRT Extension Phase 2",
                    description: "Final construction phases demonstrating successful integration of our reinforcement materials.",
                    image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_3_hqua6e.jpg"
                }
            ]
        }
    ];

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

    const openGallery = (project: ProjectGroup) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const closeGallery = () => {
        setSelectedProject(null);
        setCurrentImageIndex(0);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === selectedProject.images.length - 1 ? 0 : prev + 1
            );
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImageIndex((prev) => 
                prev === 0 ? selectedProject.images.length - 1 : prev - 1
            );
        }
    };

    return (
        <div className="projects-page">
            <Header />

            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-content">
                    <span className="page-hero-label">Our Portfolio</span>
                    <h1>Projects</h1>
                    <p>Explore our comprehensive portfolio of construction projects showcasing our quality steel reinforcement solutions</p>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="featured-projects">
                <div className="container">
                    <div className="section-header">
                        <h2>Featured Projects</h2>
                        <p>Discover how our steel products power the nation's infrastructure</p>
                    </div>

                    <div className="projects-grid">
                        {projectGroups.map((project) => (
                            <article 
                                key={project.id} 
                                className="project-card"
                                onClick={() => openGallery(project)}
                            >
                                <div className="project-image">
                                    <img src={project.cardImage} alt={project.title} />
                                    <div className="project-overlay">
                                        <span className="view-gallery">View Gallery</span>
                                    </div>
                                </div>
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <p>{project.description}</p>
                                    <span className="project-count">{project.images.length} Images</span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Projects List */}
            <section className="all-projects">
                <div className="container">
                    <div className="section-header">
                        <h2>Complete Project Portfolio</h2>
                        <p>A comprehensive list of infrastructure projects powered by Universal Steel</p>
                    </div>

                    <div className="projects-list-container">
                        <div className="projects-list-section">
                            <h3>Infrastructure Projects</h3>
                            <ul className="projects-list">
                                {infrastructureProjects.map((project, index) => (
                                    <li key={index}>
                                        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="project-name">{project}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="projects-list-section current">
                            <h3>Current Projects</h3>
                            <ul className="projects-list">
                                {currentProjects.map((project, index) => (
                                    <li key={index}>
                                        <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
                                        <span className="project-name">{project}</span>
                                        <span className="status-badge">Ongoing</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Modal */}
            {selectedProject && (
                <div className="gallery-modal" onClick={closeGallery}>
                    <div className="gallery-content" onClick={(e) => e.stopPropagation()}>
                        <button className="gallery-close" onClick={closeGallery}>
                            <X />
                        </button>

                        <div className="gallery-header">
                            <h2>{selectedProject.title}</h2>
                            <p>{selectedProject.description}</p>
                        </div>

                        <div className="gallery-main">
                            <button className="gallery-nav prev" onClick={prevImage}>
                                <ChevronLeft />
                            </button>

                            <div className="gallery-image-container">
                                <img 
                                    src={selectedProject.images[currentImageIndex].image} 
                                    alt={selectedProject.images[currentImageIndex].name} 
                                />
                                <div className="image-info">
                                    <h4>{selectedProject.images[currentImageIndex].name}</h4>
                                    <p>{selectedProject.images[currentImageIndex].description}</p>
                                </div>
                            </div>

                            <button className="gallery-nav next" onClick={nextImage}>
                                <ChevronRight />
                            </button>
                        </div>

                        <div className="gallery-indicators">
                            {selectedProject.images.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentImageIndex(index)}
                                />
                            ))}
                        </div>

                        <div className="gallery-counter">
                            {currentImageIndex + 1} / {selectedProject.images.length}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Projects;
