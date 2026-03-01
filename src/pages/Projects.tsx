import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Projects.css';
import '../About.css';

type CategoryGroup = { type: string; projects: string[] };
type ClientEntry = { name: string; categories: CategoryGroup[] };

// On-Going Projects
const onGoingClients: ClientEntry[] = [
    {
        name: "Ayala Land Inc.",
        categories: [
            { type: "Residential", projects: ["Avida Towers Makati South"] },
        ],
    },
    {
        name: "Ali Eton Property Development Corp.",
        categories: [
            { type: "Residential", projects: ["Parklinks South Tower", "The Lattice at Parklinks"] },
        ],
    },
    {
        name: "Anchor Properties & Subsidiaries",
        categories: [
            { type: "Residential", projects: ["One Legacy", "Panorama Manila Tower"] },
            { type: "Commercial", projects: ["One Financial Center"] },
        ],
    },
    {
        name: "AM Oreta & Co., Inc.",
        categories: [
            { type: "Institutional", projects: ["SOCO Project"] },
        ],
    },
    {
        name: "Arthaland Corporation",
        categories: [
            { type: "Residential", projects: ["Sevina Park Villas", "Una Apartment Tower 2"] },
        ],
    },
    {
        name: "BDO Unibank Inc.",
        categories: [
            { type: "Commercial", projects: ["BDO Corporate Center"] },
        ],
    },
    {
        name: "Century Limitless Corporation",
        categories: [
            { type: "Residential", projects: ["Aquatown Villa", "Batulao Commune Village"] },
        ],
    },
    {
        name: "DMCI Project Developers Inc.",
        categories: [
            { type: "Residential", projects: ["Acacia Estates", "Alder Residences", "Fortis Residences", "Mulberry Place 2", "The Oriana"] },
        ],
    },
    {
        name: "EEI Corporation",
        categories: [
            { type: "Institutional", projects: ["National Teachers College", "Mapua Malayan College Laguna"] },
        ],
    },
    {
        name: "Empire East Land Holdings Inc.",
        categories: [
            { type: "Residential", projects: ["Highland City Tower 3 & 4", "Kasara Tower 3 & 5", "The Paddington Place Tower 1 to Tower 4"] },
        ],
    },
    {
        name: "Federal Land Inc.",
        categories: [
            { type: "Residential", projects: ["The Season Residence", "The Quantum Residence"] },
        ],
    },
    {
        name: "Filinvest Land Inc.",
        categories: [
            { type: "Residential", projects: ["Alta Spatial", "Manna East"] },
        ],
    },
    {
        name: "First Balfour – Leighton Skylink JV",
        categories: [
            { type: "Industrial", projects: ["EDSA on Ramp"] },
        ],
    },
    {
        name: "Global Estate Resorts Inc.",
        categories: [
            { type: "Residential", projects: ["Arden The Lindgren", "The Hamptons Terraces"] },
            { type: "Commercial", projects: ["Twinlakes Countrywoods", "Twinlakes Vineyard Manor"] },
        ],
    },
    {
        name: "JQ International",
        categories: [
            { type: "Residential", projects: ["Sunwealth Tower"] },
            { type: "Commercial", projects: ["Avenida Tower"] },
        ],
    },
    {
        name: "Megawide Construction Corporation",
        categories: [
            { type: "Industrial", projects: ["Megawide – Precast Plant Taytay 1 & 2"] },
        ],
    },
    {
        name: "Megaworld Corporation",
        categories: [
            { type: "Residential", projects: ["Kingsquare Residential", "Firenze Residence - Iloilo", "Kensington Sky Garden - Bacolod", "Arden West Park Village", "Manhattan Towers", "Maple Park Residences"] },
            { type: "Commercial", projects: ["Arcovia Park Place", "Kingsford Hotel", "Northwin", "Savoy Hotel Capital Town", "Upper East - Bacolod"] },
        ],
    },
    {
        name: "Monolith Construction",
        categories: [
            { type: "Residential", projects: ["MJ Tower Fort"] },
            { type: "Commercial", projects: ["The Bench Tower"] },
            { type: "Industrial", projects: ["DLSU Building", "UST Building"] },
        ],
    },
    {
        name: "New San Jose Builders",
        categories: [
            { type: "Residential", projects: ["Victoria Sports Tower Monumento", "Victoria Arts and Theater", "Victoria De Valenzuela"] },
            { type: "Industrial", projects: ["Bataan Harbour City", "Namria"] },
        ],
    },
    {
        name: "Persan Construction Inc.",
        categories: [
            { type: "Institutional", projects: ["Ramon Magsaysay School", "Silverio Elementary School", "Victorino Mapa High School"] },
        ],
    },
    {
        name: "Robinsons Land Corporation",
        categories: [
            { type: "Residential", projects: ["Le Pont Residences Tower", "The Velaris Residences"] },
            { type: "Commercial", projects: ["Grand Summit Hotel Pangasinan", "Malolos Bayan Park Mall", "The Jewel (Forum Redevelopment Project)"] },
        ],
    },
    {
        name: "Shang Robinsons Properties",
        categories: [
            { type: "Residential", projects: ["Laya by Shang Properties", "Shang Summit"] },
        ],
    },
    {
        name: "Stages Design & Construction",
        categories: [
            { type: "Commercial", projects: ["Waltermart – Paliparan", "Waltermart – Tayabas"] },
        ],
    },
    {
        name: "SM Development Corporation",
        categories: [
            { type: "Residential", projects: ["Highland Residences"] },
            { type: "Commercial", projects: ["SM City Fairview Mall Expansion", "SM - Harrison", "SM - Megamall Expansion"] },
        ],
    },
    {
        name: "SMCC Philippines Inc.",
        categories: [
            { type: "Residential", projects: ["IDESIA SJDM Housing"] },
            { type: "Industrial", projects: ["IE Medical Pharmaceutical Warehouse"] },
        ],
    },
];

// Completed Projects
const completedClients: ClientEntry[] = [
    {
        name: "Ayala Land Inc.",
        categories: [
            { type: "Residential", projects: ["The Residences @ Greenbelt 3", "Montgomery Place", "One Serendra East Tower", "The Columns Ayala Avenue", "The Montane", "The Residences @ Greenbelt 2", "Two Serendra"] },
            { type: "Commercial", projects: ["Glorietta Redevelopment", "Vertis North"] },
        ],
    },
    {
        name: "Anchor Properties & Subsidiaries",
        categories: [
            { type: "Residential", projects: ["8 Alonzo Parksuites", "Anchor Grand Suites", "Copton Baysuites", "Cornel Parksuites", "Cosmosuites"] },
            { type: "Commercial", projects: ["ALHI Corporate Office", "Juna Luna Logistics Center"] },
        ],
    },
    {
        name: "AM Oreta & Co., Inc.",
        categories: [
            { type: "Commercial", projects: ["Dasma Corporate Center", "Malabon Grand Hotel", "Manila Polo Club", "Metro Bank"] },
            { type: "Institutional", projects: ["MWSS – La Mesa Dam", "NAIA Terminal II"] },
        ],
    },
    {
        name: "Avida Land Corporation",
        categories: [
            { type: "Residential", projects: ["Avida Horizontal & Manufacturing Plant", "Avida Nuvali", "Avida Towers Makati West", "Avida Towers New Manila", "Avida Towers San Lazaro", "Makati South Point"] },
        ],
    },
    {
        name: "DDT Konstract Inc.",
        categories: [
            { type: "Residential", projects: ["Lancaster Tower 2", "The Olive Place"] },
            { type: "Commercial", projects: ["Cyber Scape Gamma", "Grand West Side Hotel", "Hamilo Coast Country Club", "Manila Bay Resort", "San Lazaro BPO Bldg. A", "Taal Vista Hotel", "Waltermart Munoz"] },
            { type: "Industrial", projects: ["Kristong Hari Shrine"] },
        ],
    },
    {
        name: "DM Wenceslao",
        categories: [
            { type: "Residential", projects: ["Pixel Residences"] },
            { type: "Commercial", projects: ["Parqal Mall"] },
        ],
    },
    {
        name: "DMCI Project Developers Inc.",
        categories: [
            { type: "Residential", projects: ["Bonifacio Heights", "Cypress Tower", "Mayfield Park", "Palm Grove", "Riverfront Residences", "Rosewood Tower", "Vista De Lago"] },
            { type: "Commercial", projects: ["Shangrila Resort & Spa @ Boracay"] },
        ],
    },
    {
        name: "EEI Corporation",
        categories: [
            { type: "Residential", projects: ["GA Tower"] },
            { type: "Commercial", projects: ["ADB Project", "Mandarin Project", "Novotel Araneta Center", "RCBC Building"] },
            { type: "Institutional", projects: ["Caticlan Airport", "Makati Medical Center Annex Building", "Rio Tuba Nickel"] },
        ],
    },
    {
        name: "Empire East Land Holdings Inc.",
        categories: [
            { type: "Residential", projects: ["Pioneer Woodlands Tower 3 to 6", "The Cambridge Village", "Rochester Tower", "The Xavier Hills", "California Garden", "Gilmore Heights", "Greenhills Garden", "One Governor's Place"] },
        ],
    },
    {
        name: "Eton Properties Phils Inc.",
        categories: [
            { type: "Residential", projects: ["68 Roces", "Eton Residences @ Greenbelt"] },
            { type: "Commercial", projects: ["Eton Centris", "Eton West End Square"] },
        ],
    },
    {
        name: "Federal Land Inc.",
        categories: [
            { type: "Residential", projects: ["IMET Tower", "MI Casa Tower 1", "Palm Beach West", "Siena Tower 1", "The Grand Midori Ortigas", "The Seasons Residence", "Grand Hyatt Residence", "Peninsula Garden Midtown Homes Mahogany Tower", "The Big Apple", "8 Park Avenue", "Four Seasons Riviera Tower 3", "Paseo de Roces Tower 2", "Six Senses Resort", "Terrazas de Valencia"] },
        ],
    },
    {
        name: "FF Cruz & Company",
        categories: [
            { type: "Institutional", projects: ["Libingan ng mga Bayani"] },
            { type: "Industrial", projects: ["ATI Manila South Harbor – Pier 3", "Balara Treatment Plant"] },
        ],
    },
    {
        name: "Filinvest Land Inc.",
        categories: [
            { type: "Residential", projects: ["Alta Spatial", "Bali Oasis 2", "Manna East", "Marina Town Dumaguete", "One Oasis – Alabang", "Panglao Oasis", "Sorrento Oasis", "Studio Tower N"] },
            { type: "Commercial", projects: ["Boracay Sea Scapes Resort", "Cebu Cyberzone Tower 3 & 4", "Dormitel Tower A", "Filinvest Corporate City", "Foramall Tagaytay", "Gil Puyat Office Building", "Marina Spatial Dumaguete", "One Filinvest", "Princeton Mall"] },
        ],
    },
    {
        name: "First Balfour – Leighton JV",
        categories: [
            { type: "Industrial", projects: ["Diagon South", "Polaris Data Center Phase 1", "River Water Treatment Facility"] },
        ],
    },
    {
        name: "Global Estate Resorts Inc.",
        categories: [
            { type: "Residential", projects: ["Holland Park 3 & 4", "Oceanway Residences"] },
            { type: "Commercial", projects: ["Boracay Town Center", "Chancellor Hotel Boracay", "Fairways and Blue Water Resort"] },
        ],
    },
    {
        name: "JQ International",
        categories: [
            { type: "Residential", projects: ["101 Residences", "Avenida Tower", "Dowell Tower", "Index Residences", "Luxe Tower", "Riverpark Place", "Royal Tower", "Signature Residences"] },
            { type: "Commercial", projects: ["Avenida Tower"] },
        ],
    },
    {
        name: "Mallers Investments Corporation",
        categories: [
            { type: "Commercial", projects: ["Fishermall - Malabon"] },
        ],
    },
    {
        name: "Megawide Construction Corporation",
        categories: [
            { type: "Residential", projects: ["The Hive Tower", "Urban Deca Cubao", "Urban Deca Ortigas"] },
            { type: "Commercial", projects: ["Double Dragon Tower", "Gateway Mall & Hotel", "Proposed Golden Bay Tower (Aspire)", "The Corner House"] },
            { type: "Industrial", projects: ["Megawide – Precast Plant Taytay 1 & 2"] },
        ],
    },
    {
        name: "Megaworld Corporation",
        categories: [
            { type: "Residential", projects: ["9 Central Park", "Arden West Park Village", "Aurora Gardens", "Bayshore Residential Resort", "Eastwood Excelsior", "Eastwood Legrand I to III", "Firenze Residence", "Forbeswood Heights", "Governors Place", "Greenbelt Hamilton", "Greenhills Heights", "Kensington Sky Garden", "Kingsquare Residential Suites", "La Cassia Residences", "Lafayette Parksquare – Iloilo City", "Manhattan Parkways (3 Towers)", "Manhattan Plaza Tower 3 (Laurent Park)", "Manhattan Square", "Maple Grove", "Maple Park Residences", "McKinley Corporate Plaza", "McKinley Garden Villa (Phase 2)", "McKinley Hills Tuscany Private Estate", "Montrose Parkview", "One Beverly Place Condominium", "One Central Park", "One Lafayette Square", "One Madison Place Tower 1 & 2 – Iloilo City", "One Orchard Road", "One Regis – Bacolod", "Park McKinley West Phase 1 & 2", "Paseo Park View", "Positano Mactan", "Residential Resort @ Newport", "Residential Resort at New Port City", "Salcedo Skysuites", "Sunny Coast Residential Resort", "The Albany", "The Noble Place", "The Palladium - Iloilo", "The Pearl Global Residences", "The Venice Luxury Residences", "Two Lafayette Square", "Upper East – Bacolod", "Uptown Arts Residence", "Uptown Parksuites 1 & 2"] },
            { type: "Commercial", projects: ["Belmont Hotel Mactan Cebu", "Cityplace Mall", "Eastwood Citywalk", "Eastwood Corporate Plaza", "Enterprise Two", "Festive Walk Mall – Iloilo City", "Iloilo Business Park", "International Corporate Plaza", "Maple Grove Commercial District", "Marriott Courtyard Hotel – Iloilo City", "Marriott Newport Hotel", "Northwin Global City", "One Republic Plaza", "Petron Mega Plaza", "Savoy Hotel Mactan Cebu", "Sheraton Marina Square I & II", "Techno Plaza One & Two", "Two World Square", "Uptown Parade Mall", "Venice Corporate Center", "World Centre", "World Commerce Place", "World Commerce Plaza", "World Finance Plaza"] },
        ],
    },
    {
        name: "Monocrete Construction Philippines Inc.",
        categories: [
            { type: "Residential", projects: ["Chinese General Hospital Garden Suites"] },
            { type: "Institutional", projects: ["STI – Legaspi"] },
            { type: "Industrial", projects: ["Luna Data Center"] },
        ],
    },
    {
        name: "New San Jose Builders",
        categories: [
            { type: "Residential", projects: ["Dormitorio De Espana 2", "Fort Victoria", "Isabelle de Valenzuela", "Isabelle Hidalgo", "Victoria de Malate", "Victoria de Morato", "Victoria Station 2", "Victoria Station Tower – Edsa", "Victoria Tower de Manila - Taft"] },
            { type: "Commercial", projects: ["Las Casas Filipinas De Acuzar"] },
        ],
    },
    {
        name: "Persan Construction Inc.",
        categories: [
            { type: "Residential", projects: ["Construction of Binondominium 1"] },
            { type: "Institutional", projects: ["Aurora A. Quezon Elementary School", "Dr. Alejandro Albert Elementary School", "Gotamco Elementary School", "Malabon Sports Complex", "Manila Science High School", "Paranaque Coliseum", "Rosauro Almario Elementary School"] },
            { type: "Industrial", projects: ["Baclaran Gateway Market"] },
        ],
    },
    {
        name: "Robinsons Land Corporation",
        categories: [
            { type: "Residential", projects: ["Gateway Regency Studios", "Pueblo Angono", "Sierra Valley Gardens Tower 3 and Podium", "Sync Tower", "The Sapphire Bloc-East Tower"] },
            { type: "Commercial", projects: ["Magnolia – CPPD Project", "Robinsons Place La Union", "Robinsons Bridgetowne Mall", "Robinsons Cyber Omega", "Robinsons Cybergate Delta 2", "Cybergate Delta 2 - Davao", "Gateway Mall", "GBF Center 1 & 2", "Robinsons Place Balanga", "Cybergate Bacolod 2", "Opus Mall (Bridgetowne)", "Cybergate Iloilo Tower", "Montclair Land Development", "Malolos Bayan Park Mall"] },
        ],
    },
    {
        name: "Rockwell Land Corporation",
        categories: [
            { type: "Residential", projects: ["The Proscenium Tower Residences Tower 2", "The Proscenium – The Lorraine", "The Proscenium – The Kirov", "The Proscenium – The Lincoln", "The Vantage"] },
        ],
    },
    {
        name: "San Lorenzo Ruiz Investment",
        categories: [
            { type: "Commercial", projects: ["The Yuchengco Center"] },
        ],
    },
    {
        name: "Shang Robinsons Properties",
        categories: [
            { type: "Residential", projects: ["Aurelia Residences", "Haraya Residences", "Shang Residences at Wack Wack"] },
        ],
    },
    {
        name: "Stages Design & Construction",
        categories: [
            { type: "Residential", projects: ["Acacia Project"] },
            { type: "Commercial", projects: ["Abenson – Quezon Avenue", "Abenson – San Juan", "Silver City – KPO", "Tiendesitas", "Waltermart – Antipolo", "Waltermart – Carmona", "Waltermart – Mabalacat", "Waltermart – Silang"] },
            { type: "Institutional", projects: ["Sta. Anastacia School Building", "Sto. Thomas School Building", "Talisay School Building"] },
        ],
    },
    {
        name: "SM Development Corporation",
        categories: [
            { type: "Residential", projects: ["Bloom Residences", "Charm Residences", "Coast Residences", "Costa Del Hamilo – Freia Condominium", "Field Residences", "Glade Residences", "Lush Residences", "Mint Residences", "Shore 3 Residences", "SM Fame Residences", "Spring Residences", "Springtown Development - Leaf Residences", "Vine Residences"] },
        ],
    },
    {
        name: "SM Prime Holdings Inc.",
        categories: [
            { type: "Residential", projects: ["Hope Residences", "Horizon Terraces Project", "Horizon Terraces Tagaytay", "Light 2 Residences", "Sail Residences", "Style Residence – Iloilo City", "Twin Residences"] },
            { type: "Commercial", projects: ["Park Inn Bacolod", "SM MOA Block 4", "SM City Fairview Mall Expansion", "SM City Legazpi", "SM Southmall BPO & Car Park Bldg.", "SM City – Iloilo BPO", "SM Tanza", "SM Sorsogon", "SM City Sta. Rosa Mall Expansion", "SM City Cagayan De Oro Redevelopment", "SM City Cauayan", "SM Tarlac", "SM Sto. Tomas", "SM Tagum"] },
            { type: "Industrial", projects: ["CPG Silangan Warehouse", "SM Iloilo Public Central & Terminal Market"] },
        ],
    },
    {
        name: "SMCC Philippines Inc.",
        categories: [
            { type: "Residential", projects: ["Coral Bay 3 & 4", "Hayashi Project", "The Villages at Lipa"] },
            { type: "Industrial", projects: ["40MW Northern Negros Geothermal Plant", "Komyo Phils. Factory Expansion", "New Leaf Warehouse", "NIDEC Precision Phils. Factory", "Proposed Daiho – Lima Factory 2", "RIO Tuba Nickel HPP", "Sakamoto Plant Expansion"] },
        ],
    },
    {
        name: "Townsquare Development Inc.",
        categories: [
            { type: "Residential", projects: ["Little Baguio Terraces", "Suntrust Asmara", "Suntrust Aurora Garden", "Suntrust Capitol Plaza", "Suntrust Parkview", "Suntrust Shanata", "The Cambridge Village"] },
            { type: "Commercial", projects: ["Clark Green Frontier Phase 1"] },
        ],
    },
    {
        name: "VB Columna Construction",
        categories: [
            { type: "Institutional", projects: ["Ace Balagtas", "Ace Mandaluyong", "Ace San Jose", "Ace San Miguel", "La Salle – Lipa Batangas"] },
        ],
    },
];

const categoryColors: Record<string, string> = {
    "Residential": "#1a5276",
    "Commercial": "#1e8449",
    "Industrial": "#d35400",
    "Institutional": "#7d3c98",
};

// Client List Modal
const ClientListModal = ({ onClose }: { onClose: () => void }) => {
    const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');
    const list = activeTab === 'ongoing' ? onGoingClients : completedClients;

    return (
        <div className="clients-modal" onClick={onClose}>
            <div className="clients-modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="clients-modal__header">
                    <div>
                        <span className="section-label">Complete Directory</span>
                        <h2 className="clients-modal__title">Full Client List</h2>
                    </div>
                    <button className="clients-modal__close" onClick={onClose}>✕</button>
                </div>

                <div className="clients-modal__tabs">
                    <button
                        className={`clients-modal__tab ${activeTab === 'ongoing' ? 'clients-modal__tab--active' : ''}`}
                        onClick={() => setActiveTab('ongoing')}
                    >
                        On-Going Projects
                    </button>
                    <button
                        className={`clients-modal__tab ${activeTab === 'completed' ? 'clients-modal__tab--active' : ''}`}
                        onClick={() => setActiveTab('completed')}
                    >
                        Completed Projects
                    </button>
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
                    {list.map((client, i) => (
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
    );
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

        {showModal && <ClientListModal onClose={() => setShowModal(false)} />}
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
            { name: "The Yuchengco Centre", image: "/images/The_Yuchengco_Centre.png" },
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
                            In all of its corporate relations, USSCI is firmly committed to ensuring total customer satisfaction, from the performance of our rebars to on-time deliveries at project sites. Our customer service has been given the highest regard as attested by many, with the paradigm that treats all its clients as its industry partners. Our customers have full access to a Customer Service Team at any given time and provide the on-site technical assistance needed by many.
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
