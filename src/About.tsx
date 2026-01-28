import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './About.css';

// Icon URLs from main branch
const iconUrls = {
    building: 'https://res.cloudinary.com/drrzinr9v/image/upload/building-two_yxzt3u.png',
    setting: 'https://res.cloudinary.com/drrzinr9v/image/upload/setting-two_e2vfvt.png',
    certificate: 'https://res.cloudinary.com/drrzinr9v/image/upload/certificate_dpjy9c.png',
    bridge: 'https://res.cloudinary.com/drrzinr9v/image/upload/bridge-two_hvjarm.png',
    // VMV icons
    vision: 'https://res.cloudinary.com/drrzinr9v/image/upload/exchange-two_w8z7jh.png',
    mission: 'https://res.cloudinary.com/drrzinr9v/image/upload/target_hljvmw.png',
    integrity: 'https://res.cloudinary.com/drrzinr9v/image/upload/hold_woblca.png',
    quality: 'https://res.cloudinary.com/drrzinr9v/image/upload/two-hands_v6resp.png',
    professionalism: 'https://res.cloudinary.com/drrzinr9v/image/upload/user-business_lxwokn.png',
    commitment: 'https://res.cloudinary.com/drrzinr9v/image/upload/check-correct_lbqpjk.png',
};

// Arrow Icon
const ArrowRight = () => (
    <svg className="milestone__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

// Milestones Section (4 Widgets)
const Milestones = () => {
    const milestones = [
        { icon: iconUrls.building, text: 'USSCI was established in 1966' },
        { icon: iconUrls.setting, text: 'Continuous modernization of production lines' },
        { icon: iconUrls.certificate, text: 'Achieved BPS and ISO certifications' },
        { icon: iconUrls.bridge, text: 'Accredited testing laboratory for government projects' },
    ];

    return (
        <section className="milestones">
            <div className="milestones__container">
                {milestones.map((item, i) => (
                    <div key={i} className="milestone__wrapper">
                        <div className="milestone__item">
                            <img src={item.icon} alt="" className="milestone__icon" />
                            <p className="milestone__text">{item.text}</p>
                        </div>
                        {i < milestones.length - 1 && <ArrowRight />}
                    </div>
                ))}
            </div>
        </section>
    );
};

// Page Hero
const PageHero = () => (
    <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
            <span className="page-hero__label">About Us</span>
            <h1 className="page-hero__title">
                Building Excellence Since 1966
            </h1>
            <p className="page-hero__text">
                Universal Steel Smelting Co., Inc. is a trusted leader in steel manufacturing, 
                powering the construction and infrastructure sectors across the Philippines.
            </p>
        </div>
    </section>
);

// Company Overview
const Overview = () => (
    <section className="overview">
        <div className="overview__container">
            <div className="overview__image">
                <div className="overview__logo">
                    <img 
                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753452588/Screenshot_2025-06-16_232816_rrkh3e.png" 
                        alt="LKG Group of Companies"
                    />
                </div>
                <img 
                    src="https://res.cloudinary.com/drrzinr9v/image/upload/ge-removebg-preview_ee8tvd.png" 
                    alt="Universal Steel facility"
                />
            </div>
            <div className="overview__content">
                <span className="section-label">Our Story</span>
                <h2 className="overview__title">Company Background</h2>
                <p className="overview__text">
                    Universal Steel Smelting Co., Inc. (USSCI) was established on January 27, 1966 
                    with the manufacturing objective of producing the highest quality standards of 
                    reinforcing steel bars for the Philippine Construction Industry.
                </p>
                <p className="overview__text">
                    It is financially strong as part of the LKG group of companies and with strategic 
                    alliances with several of the major financial institutions in the Philippines. Our 
                    manufacturing plant is located along Quirino Highway, Balintawak, Quezon City.
                </p>
                <p className="overview__text">
                    Today, USSCI continues to uphold its commitment to quality, innovation, and 
                    customer satisfaction, serving as a cornerstone of the Philippine steel industry.
                </p>
            </div>
        </div>
    </section>
);

// Stats Bar
const StatsBar = () => {
    const stats = [
        { value: '1966', label: 'Year Established' },
        { value: '60+', label: 'Years Experience' },
        { value: 'ISO', label: '9001:2015 Certified' },
        { value: 'BPS', label: 'Certified Products' },
    ];

    return (
        <section className="stats-bar">
            <div className="stats-bar__container">
                {stats.map((stat, i) => (
                    <div key={i} className="stats-bar__item">
                        <span className="stats-bar__value">{stat.value}</span>
                        <span className="stats-bar__label">{stat.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

// Manufacturing Facility with Carousel
const Facility = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const images = [
        'https://res.cloudinary.com/drrzinr9v/image/upload/IMG_0634_ehtkiu.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/v1755004449/hero5_ydk14p.jpg',
    ];

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="facility">
            <div className="facility__container">
                <div className="facility__content">
                    <span className="section-label">Our Facilities</span>
                    <h2 className="facility__title">State-of-the-Art Manufacturing</h2>
                    <p className="facility__text">
                        From its humble beginnings as a hand-fed mill, our management team has 
                        prioritized facility modernization. Today, our manufacturing process has 
                        evolved into a Full Tandem Mill from roughing to finishing passes.
                    </p>
                    <p className="facility__text">
                        We operate a state-of-the-art continuous type reheating furnace, designed 
                        and supplied by FORNI INDUSTRIAL BENDOTTI. The furnace utilizes a fully 
                        computerized High Pressure Burner System with atomized air for efficient 
                        combustion.
                    </p>
                    <ul className="facility__list">
                        <li>Full Tandem Mill production line</li>
                        <li>Continuous reheating furnace system</li>
                        <li>Programmable Logic Control automation</li>
                        <li>Uniform heating technology</li>
                    </ul>
                </div>
                <div className="facility__carousel">
                    <div className="facility__carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="facility__slide">
                                <img src={image} alt={`Factory image ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                    <div className="facility__indicators">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                className={`facility__indicator ${currentSlide === index ? 'facility__indicator--active' : ''}`}
                                onClick={() => goToSlide(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Quality Assurance
const Quality = () => (
    <section className="quality">
        <div className="quality__container">
            <div className="quality__header">
                <span className="section-label">Quality Assurance</span>
                <h2 className="quality__title">Committed to Excellence</h2>
                <p className="quality__subtitle">
                    USSCI has given utmost priority to its manufacturing quality standards, 
                    ensuring every product meets the strictest industry requirements.
                </p>
            </div>
            <div className="quality__grid">
                <div className="quality__card">
                    <h3 className="quality__card-title">Testing Laboratory</h3>
                    <p className="quality__card-text">
                        Carbon Analyzer Spectrometer and Universal Testing Machine for 
                        comprehensive quality control.
                    </p>
                </div>
                <div className="quality__card">
                    <h3 className="quality__card-title">BPS Certified</h3>
                    <p className="quality__card-text">
                        Philippine Standard Quality Certification Mark for all Deformed 
                        Steel Bars products.
                    </p>
                </div>
                <div className="quality__card">
                    <h3 className="quality__card-title">Government Accredited</h3>
                    <p className="quality__card-text">
                        Bureau of Research and Standards accredited for government 
                        infrastructure projects.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// Vision Mission Values
const VMV = () => (
    <section className="vmv">
        <div className="vmv__container">
            <div className="vmv__header">
                <h2 className="vmv__title">Vision, Mission, & Values</h2>
            </div>
            <div className="vmv__layout">
                <div className="vmv__left">
                    <div className="vmv__card">
                        <img src={iconUrls.vision} alt="Vision" className="vmv__card-icon" />
                        <div className="vmv__card-content">
                            <h3 className="vmv__card-title">Vision</h3>
                            <p className="vmv__card-text">
                                To be a trusted leader in manufacturing high-quality reinforcing steel 
                                bars through continuous innovation and commitment to customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="vmv__card">
                        <img src={iconUrls.mission} alt="Mission" className="vmv__card-icon" />
                        <div className="vmv__card-content">
                            <h3 className="vmv__card-title">Mission</h3>
                            <p className="vmv__card-text">
                                To deliver dependable and certified steel products using modern technology 
                                and uphold the highest manufacturing standards in the industry.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="vmv__right">
                    <div className="vmv__values-card">
                        <h3 className="vmv__values-title">Values</h3>
                        <div className="vmv__values-list">
                            <div className="vmv__value-item">
                                <img src={iconUrls.integrity} alt="Integrity" className="vmv__value-icon" />
                                <span>Integrity</span>
                            </div>
                            <div className="vmv__value-item">
                                <img src={iconUrls.quality} alt="Quality" className="vmv__value-icon" />
                                <span>Quality</span>
                            </div>
                            <div className="vmv__value-item">
                                <img src={iconUrls.professionalism} alt="Professionalism" className="vmv__value-icon" />
                                <span>Professionalism</span>
                            </div>
                            <div className="vmv__value-item">
                                <img src={iconUrls.commitment} alt="Customer Commitment" className="vmv__value-icon" />
                                <span>Customer Commitment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Proof of Quality - Certifications
const ProofOfQuality = () => {
    const certifications = [
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_TUV_ISO_exp_2028_t3dha9.jpg",
            title: "ISO 9001:2015 Certified",
            issuer: "TÜV Philippines",
            description: "Our Quality Management System meets international standards.",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg",
            title: "BPS Certification Mark",
            issuer: "Bureau of Product Standards",
            description: "Philippine Standard Quality Certification Mark for all Deformed Steel Bars.",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg",
            title: "DPWH-Accredited Laboratory",
            issuer: "Bureau of Research and Standards",
            description: "Accredited for government infrastructure projects.",
        },
    ];

    return (
        <section className="proof-quality">
            <div className="proof-quality__container">
                <div className="proof-quality__header">
                    <span className="section-label">Proof of Quality</span>
                    <h2 className="proof-quality__title">ISO 9001:2015 Certified</h2>
                    <p className="proof-quality__subtitle">
                        Industry-leading certifications that demonstrate our commitment to excellence
                    </p>
                </div>
                <div className="proof-quality__grid">
                    {certifications.map((cert, i) => (
                        <div key={i} className="proof-quality__card">
                            <div className="proof-quality__image">
                                <img src={cert.image} alt={cert.title} />
                            </div>
                            <div className="proof-quality__content">
                                <h3 className="proof-quality__card-title">{cert.title}</h3>
                                <span className="proof-quality__issuer">{cert.issuer}</span>
                                <p className="proof-quality__desc">{cert.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Customer Service Satisfaction Policy
const CustomerService = () => {
    const features = [
        { icon: iconUrls.quality, title: 'Quality Performance', desc: 'Excellence in every rebar we produce' },
        { icon: iconUrls.commitment, title: 'Timely Delivery', desc: 'On-time deliveries at project sites' },
        { icon: iconUrls.professionalism, title: 'Professional Support', desc: 'Complete customer support at bar-user level' },
        { icon: iconUrls.integrity, title: 'After-Sales Service', desc: 'Best after-sales service program' },
    ];

    return (
        <section className="customer-service">
            <div className="customer-service__container">
                <div className="customer-service__content">
                    <div className="customer-service__text">
                        <span className="section-label">Our Promise</span>
                        <h2 className="customer-service__title">Customer Service Satisfaction Policy</h2>
                        <p className="customer-service__intro">
                            USSCI is committed to fulfill its obligation to total customer service 
                            satisfaction from the actual performance of our rebars to its timely 
                            deliveries at the project site.
                        </p>
                        <p className="customer-service__desc">
                            Our Customer Service Team shall provide all the supports needed to ensure 
                            complete customer satisfaction at the bar-user level. Our professional management 
                            team is dedicated to the continuing development and training of its employees.
                        </p>
                        <div className="customer-service__highlight">
                            <h3>At Universal Steel, we forge strong alliances for the future.</h3>
                        </div>
                    </div>
                    <div className="customer-service__features">
                        {features.map((feature, i) => (
                            <div key={i} className="customer-service__feature">
                                <img src={feature.icon} alt={feature.title} className="customer-service__icon" />
                                <div>
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

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
                
                {/* Animated Marquee Row 1 - Left to Right */}
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
                
                {/* Animated Marquee Row 2 - Right to Left */}
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

// CTA Section
const CTA = () => (
    <section className="about-cta">
        <div className="about-cta__container">
            <h2 className="about-cta__title">Ready to Partner With Us?</h2>
            <p className="about-cta__text">
                Contact our team to discuss your steel requirements and discover 
                how USSCI can support your construction projects.
            </p>
            <div className="about-cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Us</Link>
                <Link to="/products" className="btn btn--outline">View Products</Link>
            </div>
        </div>
    </section>
);

// Main About Component
const About = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                <Milestones />
                <Overview />
                <StatsBar />
                <Facility />
                <Quality />
                <VMV />
                <ProofOfQuality />
                <CustomerService />
                <MajorClients />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default About;
