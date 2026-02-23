import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Projects.css';
import '../About.css';

// Full client list — On-Going Projects
const fullClientList = [
    {
        name: "AYALA LAND INC.",
        categories: [
            { type: "Residential", projects: ["Avida Towers Makati South"] }
        ]
    },
    {
        name: "ALI ETON PROPERTY DEVELOPMENT CORP.",
        categories: [
            { type: "Residential", projects: ["Parklinks South Tower", "The Lattice at Parklinks"] }
        ]
    },
    {
        name: "ANCHOR PROPERTIES & SUBSIDIARIES",
        categories: [
            { type: "Residential", projects: ["One Legacy", "Panorama Manila Tower"] },
            { type: "Commercial", projects: ["One Financial Center"] }
        ]
    },
    {
        name: "AM ORETA & CO., INC.",
        categories: [
            { type: "Institutional", projects: ["SOCO Project"] }
        ]
    },
    {
        name: "ARTHALAND CORPORATION",
        categories: [
            { type: "Residential", projects: ["Sevina Park Villas", "Una Apartment Tower 2"] }
        ]
    },
    {
        name: "BDO UNIBANK INC.",
        categories: [
            { type: "Commercial", projects: ["BDO Corporate Center"] }
        ]
    },
    {
        name: "CENTURY LIMITLESS CORPORATION",
        categories: [
            { type: "Residential", projects: ["Aquatown Villa", "Batulao Commune Village"] }
        ]
    },
    {
        name: "DMCI PROJECT DEVELOPERS INC.",
        categories: [
            { type: "Residential", projects: ["Acacia Estates", "Alder Residences", "Fortis Residences", "Mulberry Place 2", "The Oriana"] }
        ]
    },
    {
        name: "EEI CORPORATION",
        categories: [
            { type: "Institutional", projects: ["National Teachers College", "Mapua Malayan College Laguna"] }
        ]
    },
    {
        name: "EMPIRE EAST LAND HOLDINGS INC.",
        categories: [
            { type: "Residential", projects: ["Highland City Tower 3 & 4", "Kasara Tower 3 & 5", "The Paddington Place Tower 1 to Tower 4"] }
        ]
    },
    {
        name: "FEDERAL LAND INC.",
        categories: [
            { type: "Residential", projects: ["The Season Residence", "The Quantum Residence"] }
        ]
    },
    {
        name: "FILINVEST LAND INC.",
        categories: [
            { type: "Residential", projects: ["Alta Spatial", "Manna East"] }
        ]
    },
    {
        name: "FIRST BALFOUR – LEIGHTON SKYLINK JV",
        categories: [
            { type: "Industrial", projects: ["Edsa on Ramp"] }
        ]
    },
    {
        name: "GLOBAL ESTATE RESORTS INC.",
        categories: [
            { type: "Residential", projects: ["Arden The Lindgren", "The Hamptons Terraces"] },
            { type: "Commercial", projects: ["Twinlakes Countrywoods", "Twinlakes Vineyard Manor"] }
        ]
    },
    {
        name: "JQ INTERNATIONAL",
        categories: [
            { type: "Residential", projects: ["Sunwealth Tower"] },
            { type: "Commercial", projects: ["AVENIDA TOWER"] }
        ]
    },
    {
        name: "MEGAWIDE CONSTRUCTION CORPORATION",
        categories: [
            { type: "Industrial", projects: ["Megawide – Precast Plant Taytay 1 & 2"] }
        ]
    },
    {
        name: "MEGAWORLD CORPORATION",
        categories: [
            { type: "Residential", projects: ["Kingsquare Residential", "Firenze Residence - Iloilo", "Kensington Sky Garden - Bacolod", "Arden West Park Village", "Manhattan Towers", "Maple Park Residences"] },
            { type: "Commercial", projects: ["Arcovia Park Place", "Kingsford Hotel", "Northwin", "Savoy Hotel Capital Town", "Upper East - Bacolod"] }
        ]
    },
    {
        name: "MONOLITH CONSTRUCTION",
        categories: [
            { type: "Residential", projects: ["MJ Tower Fort"] },
            { type: "Commercial", projects: ["The Bench Tower"] },
            { type: "Industrial", projects: ["DLSU Building", "UST Building"] }
        ]
    },
    {
        name: "NEW SAN JOSE BUILDERS",
        categories: [
            { type: "Residential", projects: ["Victoria Sports Tower Monumento", "Victoria Arts and Theater", "Victoria De Valenzuela"] },
            { type: "Industrial", projects: ["Bataan Harbour City", "Namria"] }
        ]
    },
    {
        name: "PERSAN CONSTRUCTION INC.",
        categories: [
            { type: "Institutional", projects: ["Ramon Magsaysay School", "Silverio Elementary School", "Victorino Mapa High School"] }
        ]
    },
    {
        name: "ROBINSONS LAND CORPORATION",
        categories: [
            { type: "Residential", projects: ["Le Pont Residences Tower", "The Velaris Residences"] },
            { type: "Commercial", projects: ["Grand Summit Hotel Pangasinan", "Malolos Bayan Park Mall", "The Jewel (Forum Redevelopment Project)"] }
        ]
    },
    {
        name: "SHANG ROBINSONS PROPERTIES",
        categories: [
            { type: "Residential", projects: ["Laya by Shang Properties", "Shang Summit"] }
        ]
    },
    {
        name: "STAGES DESIGN & CONSTRUCTION",
        categories: [
            { type: "Commercial", projects: ["Waltermart – Paliparan", "Waltermart – Tayabas"] }
        ]
    },
    {
        name: "SM DEVELOPMENT CORPORATION",
        categories: [
            { type: "Residential", projects: ["Highland Residences"] },
            { type: "Commercial", projects: ["SM City Fairview Mall Expansion", "SM - Harrison", "SM - Megamall Expansion"] }
        ]
    },
    {
        name: "SMCC PHILIPPINES INC.",
        categories: [
            { type: "Residential", projects: ["IDESIA SJDM HOUSING"] },
            { type: "Industrial", projects: ["IE MEDICAL PHARMACEUTICAL WAREHOUSE"] }
        ]
    },
];

const categoryColors: Record<string, string> = {
    "Residential": "#1a5276",
    "Commercial": "#1e8449",
    "Industrial": "#d35400",
    "Institutional": "#7d3c98",
};

// Major Clients - Modern Marquee Animation
const MajorClients = () => {
    const [showModal, setShowModal] = useState(false);

    const clientsRow1 = [
        { name: "AYALA LAND INC.", category: "Residential" },
        { name: "ARTHALAND CORPORATION", category: "Residential" },
        { name: "DMCI PROJECT DEVELOPERS INC.", category: "Residential" },
        { name: "EEI CORPORATION", category: "Institutional" },
        { name: "FEDERAL LAND INC.", category: "Residential" },
        { name: "MEGAWORLD CORPORATION", category: "Residential" },
        { name: "ROBINSONS LAND CORPORATION", category: "Residential" },
    ];
    
    const clientsRow2 = [
        { name: "FILINVEST LAND INC.", category: "Residential" },
        { name: "MEGAWIDE CONSTRUCTION CORPORATION", category: "Industrial" },
        { name: "SM DEVELOPMENT CORPORATION", category: "Commercial" },
        { name: "SMCC PHILIPPINES INC.", category: "Residential" },
        { name: "EMPIRE EAST LAND HOLDINGS INC.", category: "Residential" },
        { name: "CENTURY LIMITLESS CORPORATION", category: "Residential" },
        { name: "FIRST BALFOUR – LEIGHTON SKYLINK JV", category: "Industrial" },
    ];

    return (
        <>
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

                <div className="major-clients__footer">
                    <button className="major-clients__view-all" onClick={() => setShowModal(true)}>
                        View Full List
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>

        {/* Full Client List Modal */}
        {showModal && (
            <div className="clients-modal" onClick={() => setShowModal(false)}>
                <div className="clients-modal__content" onClick={(e) => e.stopPropagation()}>
                    <div className="clients-modal__header">
                        <div>
                            <span className="section-label">Complete Directory</span>
                            <h2 className="clients-modal__title">Full Client List</h2>
                        </div>
                        <button className="clients-modal__close" onClick={() => setShowModal(false)}>✕</button>
                    </div>

                    <div className="clients-modal__legend">
                        {Object.entries(categoryColors).map(([cat, color]) => (
                            <span key={cat} className="clients-modal__legend-item">
                                <span className="clients-modal__legend-dot" style={{ background: color }} />
                                {cat}
                            </span>
                        ))}
                    </div>

                    <div className="clients-modal__grid">
                        {fullClientList.map((client, i) => (
                            <div key={i} className="clients-modal__card">
                                <h3 className="clients-modal__client-name">{client.name}</h3>
                                {client.categories.map((cat, j) => (
                                    <div key={j} className="clients-modal__category-group">
                                        <span
                                            className="clients-modal__badge"
                                            style={{ background: categoryColors[cat.type] || '#555' }}
                                        >
                                            {cat.type}
                                        </span>
                                        <ul className="clients-modal__projects">
                                            {cat.projects.map((project, k) => (
                                                <li key={k} className="clients-modal__project-item">
                                                    <span className="clients-modal__project-dot" />
                                                    {project}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )}
        </>
    );
};

// Project Data
const projectGroups = [
    {
        id: 1,
        title: "Past Developments",
        description: "A comprehensive infrastructure development project showcasing our steel reinforcement solutions in major construction works.",
        cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg",
        images: [
            { name: "Magallanes Interchange Project", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg" },
            { name: "San Juanico Bridge", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516398/USSCI_projects_for_website_7_tjttq6.jpg" },
            { name: "EDSA Shrine", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516396/USSCI_projects_for_website_1_wzrmyq.jpg" },
            { name: "NAIA Terminal 1", image: "/images/hero/NAIA%201.jpg" },
            { name: "NAIA Terminal 2", image: "/images/hero/NAIA%202.webp" },
        ],
    },
    {
        id: 2,
        title: "Present Developments",
        description: "Current ongoing projects highlighting our capability to supply high-quality materials for extensive construction developments.",
        cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753516396/USSCI_projects_for_website_11_btaknk.jpg",
        images: [
            { name: "Metro Manila Skyway Stage 1", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516396/USSCI_projects_for_website_13_wrnwf1.jpg" },
            { name: "Metro Manila Skyway Stage 2", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516396/USSCI_projects_for_website_11_btaknk.jpg" },
            { name: "Metro Manila Skyway Stage 3", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516398/USSCI_projects_for_website_10_gqdpk6.jpg" },
        ],
    },
    {
        id: 3,
        title: "Future Developments",
        description: "Upcoming multi-phase development project featuring our comprehensive steel reinforcement solutions for modern transit infrastructure.",
        cardImage: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg",
        images: [
            { name: "MRT-7", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516398/USSCI_projects_for_website_8_pbadil.jpg" },
            { name: "MRT Extension Phase 1", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg" },
            { name: "MRT Extension Phase 2", image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516397/USSCI_projects_for_website_3_hqua6e.jpg" },
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
                        <h2 className="projects-grid-section__title">Projects</h2>
                        <p className="projects-grid-section__subtitle">
                            &emsp;In all of its corporate relations, USSCI is firmly committed to ensuring total customer satisfaction, from the performance of our rebars to on-time deliveries at project sites. Our customer service has been given the highest regard as attested by many, with the paradigm that treats all its clients as its industry partners. Our customers have full access to a Customer Service Team at any given time and provide the on-site technical assistance needed by many.
                        </p>
                    </div>
                    <div className="projects-grid">
                        {projectGroups.map((group) => (
                            <div
                                key={group.id}
                                className="project-card"
                                onClick={() => setSelectedGroup(group)}
                            >
                                <div className="project-card__image">
                                    <img src={group.cardImage} alt={group.title} loading="lazy" />
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
                                    <img src={img.image} alt={img.name} loading="lazy" />
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
        "NAIA Terminal 1",
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
        <div className="projects-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6462.webp)' }}></div>
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
