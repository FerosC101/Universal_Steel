import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './About.css';

// Logo URLs
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

const ArrowRight = () => (
    <svg fill="none" stroke="white" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const X = () => (
    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="24" height="24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Banner = () => {
    return (
        <section className='banner'>
            <div className='banner-content'>
                <h1>About Us</h1>
                <h2>Universal Steel Smelting Co., Inc.</h2>
                <p>Forging Strong Alliances for the Future - A leading steel smelting company providing high quality, reliable steel solutions for construction and manufacturing industries</p>
            </div>
            <div className='icons-container'>
                <div className='item'>
                    <img src={logoUrl1} alt="Established 1966" />
                    <p>USSCI was established in 1966</p>
                </div>
                <ArrowRight />
                <div className='item'>
                    <img src={logoUrl2} alt="Modernization" />
                    <p>Continuous modernization of production lines</p>
                </div>
                <ArrowRight />
                <div className='item'>
                    <img src={logoUrl3} alt="Certifications" />
                    <p>Achieved BPS and ISO certifications</p>
                </div>
                <ArrowRight />
                <div className='item'>
                    <img src={logoUrl4} alt="Accredited Laboratory" />
                    <p>Accredited testing laboratory for government projects</p>
                </div>
            </div>
        </section>
    );
};

const CompanyBackground = () => {
    return (
        <section className='company-background'>
            <div className='text-container'>
                <h2>Company Background</h2>
                <h3><em>Forging Strong Alliances for the Future</em></h3>
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
            <div className='image-container'>
                <img src={logoUrl5} alt="Company Building" />
            </div>
        </section>
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

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className='manufacturing-facility'>
            <div className="carousel-wrapper">
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
            <div className='text-container'>
                <h2>Manufacturing Facility</h2>
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
        </section>
    );
};

const QualityAssurance = () => {
    return (
        <section className='quality-assurance'>
            <div className='text-container'>
                <h2>Quality Assurance Standard</h2>
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
            <div className='features-container'>
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
        </section>
    );
};

const Vision = () => {
    return (
        <section className='vision'>
            <h2>Vision, Mission, & Values</h2>
            <div className="vision-grid">
                <div className='vision-mission-container'>
                    <div className='vision-item'>
                        <img src={logoUrl6} alt="Vision Icon" />
                        <div className='text'>
                            <h3>Vision</h3>
                            <p>To be a trusted leader in manufacturing high-quality reinforcing steel bars through continuous innovation and commitment to customer satisfaction.</p>
                        </div>
                    </div>
                    <div className='mission-item'>
                        <img src={logoUrl7} alt="Mission Icon" />
                        <div className='text'>
                            <h3>Mission</h3>
                            <p>To deliver dependable and certified steel products using modern technology and uphold the highest manufacturing standards in the industry.</p>
                        </div>
                    </div>
                </div>
                <div className='values-item'>
                    <h3>Values</h3>
                    <div className='values-grid'>
                        <div className='value'>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                                <path d="M2 17l10 5 10-5"/>
                                <path d="M2 12l10 5 10-5"/>
                            </svg>
                            <p><strong>Integrity</strong></p>
                        </div>
                        <div className='value'>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                <polyline points="22 4 12 14.01 9 11.01"/>
                            </svg>
                            <p><strong>Quality</strong></p>
                        </div>
                        <div className='value'>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                <circle cx="12" cy="7" r="4"/>
                            </svg>
                            <p><strong>Professionalism</strong></p>
                        </div>
                        <div className='value'>
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 6L9 17l-5-5"/>
                            </svg>
                            <p><strong>Customer Commitment</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const ISOCertification = () => {
    const certImages = [
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_TUV_ISO_exp_2028_t3dha9.jpg?ts=${Date.now()}`,
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg?ts=${Date.now()}`,
        `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg?ts=${Date.now()}`
    ];

    return (
        <section className='iso-certification'>
            <h2>Proof of Quality: ISO 9001:2015 Certified</h2>
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
                <div className="cards-container">
                    <div className="cert-card">
                        <img src={certImages[0]} alt="ISO 9001:2015 Certificate" />
                        <h4>ISO 9001:2015 Certified</h4>
                        <p>by TÜV Philippines</p>
                    </div>
                    <div className="cert-card">
                        <img src={certImages[1]} alt="BPS Certification" />
                        <h4>BPS Certification Mark</h4>
                        <p>Bureau of Product Standards</p>
                    </div>
                    <div className="cert-card">
                        <img src={certImages[2]} alt="DPWH Laboratory Accreditation" />
                        <h4>DPWH-Accredited Testing Laboratory</h4>
                        <p>by Bureau of Research and Standards (BRS)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const CustomerService = () => {
    return (
        <section className='customer-service'>
            <div className='service-content'>
                <div className='service-text'>
                    <h2>Customer Service Satisfaction Policy</h2>
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
        </section>
    );
};

const MajorClients = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const clients = [
        {
            name: "AYALA LAND, INC.",
            projects: [
                "RESIDENTIAL",
                "The Residences @ Greenbelt 2 & 3",
                "Serendra Project",
                "COMMERCIAL",
                "Glorietta Redevelopment",
                "Vertis North"
            ]
        },
        {
            name: "A.M. ORETA & COMPANY",
            projects: [
                "INFRASTRUCTURE",
                "NAIA Terminal II",
                "Manila Polo Club",
                "MWSS – La Mesa Dam",
                "Balog-balog Multipurpose"
            ]
        },
        {
            name: "AVIDA LAND CORPORATION",
            projects: [
                "RESIDENTIAL",
                "Avida Towers San Lazaro",
                "Avida Towers Makati West",
                "Avida Nuvali"
            ]
        },
        {
            name: "DDT KONSTRACT INC.",
            projects: [
                "COMMERCIAL",
                "Waltermart Munoz",
                "Hamilo Coast Country Club"
            ]
        },
        {
            name: "D.M. CONSUNJI INC.",
            projects: [
                "RESIDENTIAL",
                "Bonifacio Heights",
                "Mayfield Park",
                "Palm Grove",
                "Riverfront Residences",
                "Cypress Towers",
                "Rosewood Tower"
            ]
        },
        {
            name: "EEI CORPORATION",
            projects: [
                "INFRASTRUCTURE",
                "LRT – Sumitomo Project",
                "San Miguel Yamamura Project",
                "Rio Tuba Nickel",
                "Bocque Toll Plaza",
                "NLEX Toll Plaza",
                "Caticlan Airport",
                "COMMERCIAL",
                "RCBC Building",
                "Novotel Araneta Center"
            ]
        },
        {
            name: "FEDERAL LAND, INC.",
            projects: [
                "RESIDENTIAL",
                "Four Seasons Riviera",
                "Paseo de Roces Tower 2",
                "IMET Tower",
                "The Big apple",
                "Grand Hyatt Residence",
                "The Seasons Residence"
            ]
        },
        {
            name: "F.F. CRUZ & COMPANY",
            projects: [
                "INFRASTRUCTURE",
                "Nagtahan Bridge",
                "Kalayaan Bridge",
                "C-5 Fly over",
                "Magsaysay Viaduct",
                "Bubog Bridge",
                "ATI Pier 13 Building",
                "Batangas Flyover",
                "Startoll Way Bridge",
                "Alabang Viaduct Rehabilitation",
                "PPA Port – Iloilo",
                "ATI Manila South Harbor – Pier 3",
                "Lamesa Dam",
                "Cavitex C-5 Link Expressway",
                "Balara Treatment Plant"
            ]
        },
        {
            name: "FILINVEST ALABANG INC. / FILINVEST LAND INC.",
            projects: [
                "RESIDENTIAL",
                "Filinvest Corporate City",
                "Studio One & Two",
                "One Oasis – Alabang",
                "Megablock Tower 1, 2, 3 & 4",
                "Studio Tower 3 & 7"
            ]
        },
        {
            name: "GLOBAL ESTATE RESORT INC.",
            projects: [
                "COMMERCIAL",
                "Chancellor Hotel Boracay",
                "Boracay Town Center",
                "Fairways and Blue Water Resort",
                "Twinlakes Bel Vedere"
            ]
        },
        {
            name: "KAJIMA PHILS. INC.",
            projects: [
                "INFRASTRUCTURE",
                "Subic-Clark-Pampanga Expressway"
            ]
        },
        {
            name: "MAKATI DEVELOPMENT CORPORATION",
            projects: [
                "COMMERCIAL",
                "Greenbelt Redevelopment",
                "UP North Science & Technology",
                "Cloverleaf Projects",
                "UP Town Center",
                "Seda Hotel",
                "BGC Corporate Center",
                "Park Terraces Projects"
            ]
        },
        {
            name: "MEGAWIDE CONSTRUCTION CORPORATION",
            projects: [
                "COMMERCIAL",
                "Gateway Mall & Hotel",
                "RESIDENTIAL",
                "Urban Deca Ortigas",
                "Double Dragon Tower",
                "The Hive Tower",
                "Urban Deca Cubao"
            ]
        },
        {
            name: "MEGAWORLD CORPORATION & SUBSIDIARIES",
            projects: [
                "COMMERCIAL",
                "One & Two Lafayette Square",
                "Petron Mega Plaza",
                "Marriot Newport Hotel",
                "Iloilo BPO",
                "Venice Corporate Center",
                "Iloilo Business Park",
                "Savoy Hotel Mactan Cebu",
                "Marriot Courtyard Hotel – Iloilo City",
                "Belmont Hotel Mactan Cebu",
                "Festive Walk Mall – Iloilo City",
                "RESIDENTIAL",
                "Manhattan Square",
                "Sheraton Marina Square I & II",
                "El – Jardin del Presidente",
                "Eastwood Lafayette I to III",
                "Eastwood Corporate Plaza",
                "One Orchard Road",
                "Residential Resort at New Port City",
                "Eastwood Legrand I to III",
                "The Venice Luxury Residences",
                "One Madison Palace tower 1 & 2 – Iloilo City",
                "Lafayette Parksquare – Iloilo City",
                "Salcedo Skysuites",
                "Uptown Park suites 1 & 2"
            ]
        },
        {
            name: "OBAYASHI CORPORATION – Subic Expressway",
            projects: [
                "INFRASTRUCTURE",
                "Subic-Tarlac Expressway Project"
            ]
        },
        {
            name: "PENTA – SHIMIZU TOA JOINT VENTURE",
            projects: [
                "INFRASTRUCTURE",
                "Subic Bay Port Devt.Project",
                "Subic Bay Administration Building"
            ]
        },
        {
            name: "ROBINSONS LAND CORPORATION",
            projects: [
                "COMMERCIAL",
                "Robinsons Place La Union",
                "Robinsons Cybergate Delta 2",
                "Robinsons - Dumaguete Expansion",
                "Robinsons Bridgetowne Mall",
                "Magnolia -CPPD project",
                "Cybergate Delta 2-Davao",
                "Gateway Mall",
                "Cybergate Bacolod 2",
                "Opus Mall (Bridgetowne)",
                "RESIDENTIAL",
                "Cybergate Iloilo Tower",
                "Sync Tower",
                "The Sapphire Bloc-East Tower & South Podium",
                "Sierra Valley Gardens Tower 3 and Podium",
                "Cybergate Bacolod 2",
                "Cybergate Iloilo Tower 2 & 3"
            ]
        },
        {
            name: "SHANG ROBINSONS PROPERTIES, INC.",
            projects: [
                "RESIDENTIAL",
                "Aurelia Residence",
                "Haraya project",
                "Shang residences at Wack Wack"
            ]
        },
        {
            name: "SM DEVELOPMENT CORPORATION",
            projects: [
                "RESIDENTIAL",
                "Bloom Residences",
                "Charm Residences",
                "Field residences",
                "Lush Residences",
                "Coast Residences",
                "Shore 3 Residences",
                "SM Fame Residences",
                "Vine Residences",
                "Mint Residences",
                "Glade Residence",
                "Light 2 Residences",
                "Twin Residences",
                "Sail Residences"
            ]
        },
        {
            name: "SM PRIME HOLDINGS, INC.",
            projects: [
                "COMMERCIAL",
                "Park Inn Bacolod",
                "SM MOA Block 4",
                "SM City Fairview Mall Expansion",
                "SM City Legazpi",
                "SM Southmall BPO & Car Park Bldg.",
                "SM City – Iloilo BPO",
                "Horizon Terraces Tagaytay",
                "SM Tanza",
                "SM Sorsogon",
                "SM City Sta. Rosa Mall Expansion",
                "SM City Cagayan De Oro Redevelopment",
                "SM City Cauayan",
                "SM Tarlac",
                "SM Sto. Tomas"
            ]
        },
        {
            name: "SMCC PHILIPPINES, INC.",
            projects: [
                "INFRASTRUCTURE",
                "40MW Northern Negros Geothermal Plant",
                "RIO Tuba Nickel HPP"
            ]
        },
        {
            name: "TAISEI-SHIMIZU JOINT VENTURE",
            projects: [
                "INFRASTRUCTURE",
                "Iloilo Intl. Airport Project",
                "Cagayan Power Plant Project"
            ]
        }
    ];

    return (
        <section className='major-clients'>
            <h2>Major Clients</h2>
            <button className="view-clients-btn" onClick={() => setIsModalOpen(true)}>View Complete Client List</button>
            
            {isModalOpen && (
                <div className='clients-modal' onClick={() => setIsModalOpen(false)}>
                    <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setIsModalOpen(false)}>
                            <X />
                        </button>
                        <h2>Our Valued Clients</h2>
                        <div className="clients-grid">
                            {clients.map((client, index) => (
                                <div key={index} className="client-item">
                                    <div className="client-header">
                                        <span className="client-number">{index + 1}.</span>
                                        <h3>{client.name}</h3>
                                    </div>
                                    {client.projects.length > 0 && (
                                        <div className="projects-list">
                                            {client.projects.map((project, projIndex) => {
                                                const isCategory = project === project.toUpperCase() && project.length > 5;
                                                return (
                                                    <div key={projIndex} className={`project-item ${isCategory ? 'category-header' : ''}`}>
                                                        {!isCategory && (
                                                            <span className="project-letter">
                                                                {(() => {
                                                                    const letters = "abcdefghijklmnopqrstuvwxyz";
                                                                    const nonCategoryProjects = client.projects.filter(p =>
                                                                        p !== p.toUpperCase() || p.length <= 5
                                                                    );
                                                                    const actualIndex = nonCategoryProjects.indexOf(project);
                                                                    if (actualIndex === -1) return "";
                                                                    let length = 1;
                                                                    let count = 26;
                                                                    let idx = actualIndex;
                                                                    while (idx >= count) {
                                                                        idx -= count;
                                                                        length++;
                                                                        count = 26;
                                                                    }
                                                                    const letter = letters[idx % 26];
                                                                    return letter.repeat(length) + ".";
                                                                })()}
                                                            </span>
                                                        )}
                                                        <span className="project-name">{project}</span>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

const About = () => {
    return (
        <div className="about-page">
            <Header />
            <main>
                <Banner />
                <CompanyBackground />
                <ManufacturingFacility />
                <QualityAssurance />
                <Vision />
                <ISOCertification />
                <CustomerService />
                <MajorClients />
            </main>
            <Footer />
        </div>
    );
};

export default About;
