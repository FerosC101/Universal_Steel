import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Projects.css';
import '../About.css';

// Major Clients - Modern Marquee Animation
const MajorClients = () => {
    const clientsRow1 = [
        { name: "AYALA LAND, INC.", category: "Real Estate" },
        { name: "A.M. ORETA & COMPANY", category: "Construction" },
        { name: "D.M. CONSUNJI INC.", category: "Construction" },
        { name: "EEI CORPORATION", category: "Infrastructure" },
        { name: "FEDERAL LAND, INC.", category: "Real Estate" },
        { name: "F.F. CRUZ & COMPANY", category: "Infrastructure" },
    ];
    
    const clientsRow2 = [
        { name: "FILINVEST LAND INC.", category: "Real Estate" },
        { name: "MAKATI DEVELOPMENT CORP.", category: "Real Estate" },
        { name: "MEGAWIDE CONSTRUCTION", category: "Construction" },
        { name: "MEGAWORLD CORPORATION", category: "Real Estate" },
        { name: "ROBINSONS LAND CORP.", category: "Real Estate" },
        { name: "SM PRIME HOLDINGS", category: "Real Estate" },
    ];

    return (
        <section className="major-clients">
            <div className="major-clients__container">
                <div className="major-clients__header">
                    <span className="section-label">Trusted Partnerships</span>
                    <h2 className="major-clients__title">Major Clients</h2>
                    <p className="major-clients__subtitle">
                        Building the nation's infrastructure with the Philippines' leading developers
                    </p>
                </div>
                
                <div className="major-clients__track">
                    <div className="major-clients__marquee major-clients__marquee--left">
                        {[...clientsRow1, ...clientsRow1].map((client, i) => (
                            <div key={i} className="major-clients__card">
                                <span className="major-clients__category">{client.category}</span>
                                <h3 className="major-clients__name">{client.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className="major-clients__track">
                    <div className="major-clients__marquee major-clients__marquee--right">
                        {[...clientsRow2, ...clientsRow2].map((client, i) => (
                            <div key={i} className="major-clients__card">
                                <span className="major-clients__category">{client.category}</span>
                                <h3 className="major-clients__name">{client.name}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Project Data
const projectGroups = [
    {
        id: 1,
        title: "Past Developments",
        description: "A comprehensive infrastructure development project showcasing our steel reinforcement solutions in major construction works.",
        cardImage: "/images/facility/Unisteel%20Final%20Photos/5E8A6053.jpg",
        images: [
            { name: "Magallanes Interchange Project", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg" },
            { name: "San Juanico Bridge", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg" },
            { name: "EDSA Shrine", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_1_wzrmyq.jpg" },
        ],
    },
    {
        id: 2,
        title: "Present Developments",
        description: "Current ongoing projects highlighting our capability to supply high-quality materials for extensive construction developments.",
        cardImage: "/images/facility/Unisteel%20Final%20Photos/5E8A6172.jpg",
        images: [
            { name: "Metro Manila Skyway Stage 1", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_13_wrnwf1.jpg" },
            { name: "Metro Manila Skyway Stage 2", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_11_btaknk.jpg" },
            { name: "Metro Manila Skyway Stage 3", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_10_gqdpk6.jpg" },
        ],
    },
    {
        id: 3,
        title: "Future Developments",
        description: "Upcoming multi-phase development project featuring our comprehensive steel reinforcement solutions.",
        cardImage: "/images/facility/Unisteel%20Final%20Photos/5E8A6396.jpg",
        images: [
            { name: "MRT-7", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_8_pbadil.jpg" },
            { name: "MRT Extension Phase 1", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg" },
            { name: "MRT Extension Phase 2", image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_3_hqua6e.jpg" },
        ],
    },
];

// Page Hero
const PageHero = () => (
    <section className="projects-page-hero">
        <div className="projects-page-hero__overlay" />
        <div className="projects-page-hero__content">
            <span className="projects-page-hero__label">Our Portfolio</span>
            <h1 className="projects-page-hero__title">Featured Projects</h1>
            <p className="projects-page-hero__text">
                Explore infrastructure projects powered by our premium steel products
            </p>
        </div>
    </section>
);

// Projects Grid
const ProjectsGrid = () => {
    const [selectedGroup, setSelectedGroup] = useState<typeof projectGroups[0] | null>(null);

    return (
        <>
            <section className="projects-grid-section">
                <div className="projects-grid-section__container">
                    <div className="projects-grid-section__header">
                        <span className="section-label">Project Gallery</span>
                        <h2 className="projects-grid-section__title">Development Portfolio</h2>
                        <p className="projects-grid-section__subtitle">Browse our past, present, and future infrastructure projects</p>
                    </div>
                    <div className="projects-grid">
                        {projectGroups.map((group) => (
                            <div
                                key={group.id}
                                className="project-card"
                                onClick={() => setSelectedGroup(group)}
                            >
                                <div className="project-card__image">
                                    <img src={group.cardImage} alt={group.title} />
                                    <div className="project-card__overlay">
                                        <h3 className="project-card__title">{group.title}</h3>
                                        <p className="project-card__desc">{group.description}</p>
                                        <span className="project-card__cta">
                                            View Gallery →
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal */}
            {selectedGroup && (
                <div className="projects-modal" onClick={() => setSelectedGroup(null)}>
                    <div className="projects-modal__content" onClick={(e) => e.stopPropagation()}>
                        <button 
                            className="projects-modal__close"
                            onClick={() => setSelectedGroup(null)}
                        >
                            ✕
                        </button>
                        <h2 className="projects-modal__title">{selectedGroup.title}</h2>
                        <div className="projects-modal__grid">
                            {selectedGroup.images.map((img, i) => (
                                <div key={i} className="projects-modal__item">
                                    <img src={img.image} alt={img.name} />
                                    <p>{img.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};


// Projects List Section
const ProjectsList = () => {
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

    return (
        <section className="projects-list">
            <div className="projects-list__container">
                <div className="projects-list__header">
                    <span className="section-label">Complete Portfolio</span>
                    <h2 className="projects-list__title">Infrastructure Projects</h2>
                </div>
                
                <div className="projects-list__sections">
                    <div className="projects-list__section">
                        <h3 className="projects-list__section-title">Completed Projects</h3>
                        <div className="projects-list__grid">
                            {infrastructureProjects.map((project, i) => (
                                <div key={i} className="projects-list__item">
                                    <span className="projects-list__number">{i + 1}</span>
                                    <span className="projects-list__name">{project}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="projects-list__section">
                        <h3 className="projects-list__section-title">Current Projects</h3>
                        <div className="projects-list__grid">
                            {currentProjects.map((project, i) => (
                                <div key={i} className="projects-list__item projects-list__item--current">
                                    <span className="projects-list__number">{i + 1}</span>
                                    <span className="projects-list__name">{project}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// CTA
const CTA = () => (
    <section className="projects-cta">
        <div className="projects-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6462.jpg)' }}></div>
        <div className="projects-cta__overlay"></div>
        <div className="projects-cta__container">
            <h2 className="projects-cta__title">Partner With Us</h2>
            <p className="projects-cta__text">
                Let USSCI be your trusted steel supplier for your next project.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
    </section>
);

// Main Component
const Projects = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                <MajorClients />
                <ProjectsGrid />
                <ProjectsList />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Projects;
