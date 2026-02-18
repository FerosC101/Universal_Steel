import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { PageWithSkeleton } from './hooks/usePageLoading';
import { AboutPageSkeleton } from './components/Skeleton';
import './About.css';

// Icon URLs
const iconUrls = {
    // VMV icons
    vision: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/exchange-two_w8z7jh.png',
    mission: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/target_hljvmw.png',
    integrity: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/hold_woblca.png',
    quality: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/two-hands_v6resp.png',
    professionalism: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/user-business_lxwokn.png',
    commitment: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_96/check-correct_lbqpjk.png',
};

// Page Hero
const PageHero = () => {
    return (
        <section className="about-page-hero">
            <div className="about-page-hero__overlay" />
            <div className="about-page-hero__content">
                <span className="about-page-hero__label">About Us</span>
                <h1 className="about-page-hero__title">
                    Building Excellence Since 1966
                </h1>
                <p className="about-page-hero__text">
                    Universal Steel Smelting Co., Inc. is a trusted leader in steel manufacturing, 
                    powering the construction and infrastructure sectors across the Philippines.
                </p>
            </div>
        </section>
    );
};

// Company Overview
const Overview = () => (
    <section className="overview">
        <div className="overview__container">
            <div className="overview__header">
                <span className="section-label">Our Story</span>
                <h2 className="overview__title">Company Background</h2>
            </div>
            <div className="overview__image">
                <div className="overview__logo">
                    <img 
                        src="https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_400/v1753452588/Screenshot_2025-06-16_232816_rrkh3e.png" 
                        alt="LKG Group of Companies"
                        loading="lazy"
                    />
                </div>
                <img 
                    src="https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/ge-removebg-preview_ee8tvd.png" 
                    alt="Universal Steel facility"
                    loading="lazy"
                />
            </div>
            <div className="overview__content">
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

// Founder History
const FounderHistory = () => (
    <section className="founder">
        <div className="founder__container">
            <div className="founder__header">
                <span className="section-label">Our Legacy</span>
                <h2 className="founder__title">The Visionary Behind USSCI</h2>
            </div>
            <div className="founder__content">
                <div className="founder__images">
                    <div className="founder__image founder__image--main">
                        <img 
                            src="/images/Old Pics/Pic1.jpg" 
                            alt="USSCI Historical" 
                            loading="lazy"
                        />
                    </div>
                    <div className="founder__image founder__image--secondary">
                        <img 
                            src="/images/Old Pics/Pic2.jpg" 
                            alt="USSCI Legacy" 
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="founder__text">
                    <p>
                        As a young individual, Mr. Lim began his career even before the Second World War, starting out as an apprentice in a small trading firm in the textile quarters of Manila's Binondo district where he learned the intricate aspects involved in building a business enterprise. His trading business gradually grew and became very prosperous.
                    </p>
                    <p>
                        When the Second World War began, many of his colleagues halted their business operations, but Mr. Lim persevered even in the face of great adversity in ingenious ways. Following the country's liberation from the Japanese, he pressed forward with his businesses, enterprising in fully integrated textile manufacturing, steel making and cement manufacturing and the rest, as we know, is our history.
                    </p>
                    <p>
                        It is also well worth mentioning that throughout all these business endeavors, the primary identity of our founder in building his organization has faithfully remained, to be a good Christian first &amp; foremost then a successful businessman only second to it. This explains why in 1965, he co-founded the metropolitan hospital now the Metropolitan Medical Center in Binondo.
                    </p>
                </div>
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
        '/images/facility/Unisteel%20Final%20Photos/5E8A6094.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6112.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6148.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6161.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6180.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6216.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6238.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6291.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6325.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6396.webp',
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
    }, [images.length]);

    return (
        <section className="facility">
            <div className="facility__container">
                <div className="facility__header">
                    <span className="section-label">Our Facilities</span>
                    <h2 className="facility__title">State-of-the-Art Manufacturing</h2>
                </div>
                <div className="facility__carousel">
                    <div className="facility__carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="facility__slide">
                                <img src={image} alt={`Factory image ${index + 1}`} loading="lazy" />
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
                <Link to="/facility-gallery" className="facility__view-more">
                    View More Photos
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <div className="facility__content">
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
            </div>
        </section>
    );
};

// Quality Assurance
const Quality = () => (
    <section className="quality" style={{ backgroundImage: 'url(/images/hero/heavy-machines-construction-workers-working-building.webp)' }}>
        <div className="quality__overlay" />
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
                <span className="section-label">Our Foundation</span>
                <h2 className="vmv__title">Vision, Mission, & Values</h2>
            </div>
            <div className="vmv__layout">
                <div className="vmv__left">
                    <div className="vmv__card">
                        <img src={iconUrls.vision} alt="Vision" className="vmv__card-icon" loading="lazy" />
                        <div className="vmv__card-content">
                            <h3 className="vmv__card-title">Vision</h3>
                            <p className="vmv__card-text">
                                To be a trusted leader in manufacturing high-quality reinforcing steel 
                                bars through continuous innovation and commitment to customer satisfaction.
                            </p>
                        </div>
                    </div>
                    <div className="vmv__card">
                        <img src={iconUrls.mission} alt="Mission" className="vmv__card-icon" loading="lazy" />
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
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_500/USSCI_TUV_ISO_exp_2028_t3dha9.jpg",
            title: "ISO 9001:2015 Certified",
            issuer: "TÜV Philippines",
            description: "Our Quality Management System meets international standards.",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_500/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg",
            title: "BPS Certification Mark",
            issuer: "Bureau of Product Standards",
            description: "Philippine Standard Quality Certification Mark for all Deformed Steel Bars.",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_500/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg",
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
                                <img src={cert.image} alt={cert.title} loading="lazy" />
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
// const MajorClients = () => {
//     const clientsRow1 = [
//         { name: "AYALA LAND, INC.", category: "Real Estate" },
//         { name: "A.M. ORETA & COMPANY", category: "Construction" },
//         { name: "D.M. CONSUNJI INC.", category: "Construction" },
//         { name: "EEI CORPORATION", category: "Infrastructure" },
//         { name: "FEDERAL LAND, INC.", category: "Real Estate" },
//         { name: "F.F. CRUZ & COMPANY", category: "Infrastructure" },
//     ];
    
//     const clientsRow2 = [
//         { name: "FILINVEST LAND INC.", category: "Real Estate" },
//         { name: "MAKATI DEVELOPMENT CORP.", category: "Real Estate" },
//         { name: "MEGAWIDE CONSTRUCTION", category: "Construction" },
//         { name: "MEGAWORLD CORPORATION", category: "Real Estate" },
//         { name: "ROBINSONS LAND CORP.", category: "Real Estate" },
//         { name: "SM PRIME HOLDINGS", category: "Real Estate" },
//     ];

//     return (
//         <section className="major-clients">
//             <div className="major-clients__container">
//                 <div className="major-clients__header">
//                     <span className="section-label">Trusted Partnerships</span>
//                     <h2 className="major-clients__title">Major Clients</h2>
//                     <p className="major-clients__subtitle">
//                         Building the nation's infrastructure with the Philippines' leading developers
//                     </p>
//                 </div>
                
//                 {/* Animated Marquee Row 1 - Left to Right */}
//                 <div className="major-clients__track">
//                     <div className="major-clients__marquee major-clients__marquee--left">
//                         {[...clientsRow1, ...clientsRow1].map((client, i) => (
//                             <div key={i} className="major-clients__card">
//                                 <span className="major-clients__category">{client.category}</span>
//                                 <h3 className="major-clients__name">{client.name}</h3>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
                
//                 {/* Animated Marquee Row 2 - Right to Left */}
//                 <div className="major-clients__track">
//                     <div className="major-clients__marquee major-clients__marquee--right">
//                         {[...clientsRow2, ...clientsRow2].map((client, i) => (
//                             <div key={i} className="major-clients__card">
//                                 <span className="major-clients__category">{client.category}</span>
//                                 <h3 className="major-clients__name">{client.name}</h3>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// CTA Section
const CTA = () => (
    <section className="about-cta">
        <div className="about-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6436.webp)' }}></div>
        <div className="about-cta__overlay"></div>
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
        <PageWithSkeleton skeleton={<AboutPageSkeleton />}>
            <div className="page">
                <Header />
                <main>
                    <PageHero />
                    <Overview />
                    <FounderHistory />
                    <VMV />
                    <StatsBar />
                    <Facility />
                    <Quality />
                    <ProofOfQuality />
                    <CustomerService />
                    <CTA />
                </main>
                <Footer />
            </div>
        </PageWithSkeleton>
    );
};

export default About;
