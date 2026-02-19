import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './Certifications.css';

// Images
const images = {
    hero: '/images/facility/Unisteel%20Final%20Photos/5E8A6567.webp',
    facility: '/images/facility/Unisteel%20Final%20Photos/5E8A6458.webp',
    lab: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_800/v1753516397/USSCI_Pics_for_website_2_crov5j.jpg',
};

// Page Hero with Image Background
const PageHero = () => (
    <section className="certs-hero">
        <div className="certs-hero__bg">
            <img src={images.hero} alt="Quality Assurance" />
            <div className="certs-hero__overlay" />
        </div>
        <div className="certs-hero__content">
            <span className="certs-hero__label">Proof of Quality</span>
            <h1 className="certs-hero__title">ISO 9001:2015 Certified</h1>
            <p className="certs-hero__text">
                Committed to excellence through internationally recognized quality standards
            </p>
        </div>
    </section>
);

// Certifications Grid with Modal
const CertificationsGrid = () => {
    const [selectedCert, setSelectedCert] = useState<number | null>(null);
    
    const certifications = [
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/USSCI_TUV_ISO_exp_2028_t3dha9.jpg",
            title: "ISO 9001:2015 Certified",
            issuer: "TÜV Philippines",
            description: "Our Quality Management System meets international standards, ensuring consistent product quality and customer satisfaction.",
            validity: "Valid until 2028",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg",
            title: "BPS Certification Mark",
            issuer: "Bureau of Product Standards",
            description: "Philippine Standard Quality Certification Mark for all Deformed Steel Bars, ensuring compliance with national quality standards.",
            validity: "Valid until August 2027",
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg",
            title: "DPWH-Accredited Laboratory",
            issuer: "Bureau of Research and Standards",
            description: "Fully accredited to undertake materials testing for all government infrastructure projects.",
            validity: "Valid until 2025",
        },
    ];

    return (
        <>
            <section className="certs-grid-section">
                <div className="certs-grid-section__container">
                    <div className="certs-grid-section__header">
                        <span className="section-label">Industry Standards</span>
                        <h2 className="certs-grid-section__title">Certifications</h2>
                        <p className="certs-grid-section__subtitle">
                                &emsp;And throughout these six decades of striving for manufacturing excellence, USSCI is committed to providing its customers with the highest quality products. The company holds several quality certifications and for years now, USSCI has maintained the distinguished citation of being ISO 9001:2008 standard compliant, ensuring that its manufacturing processes operate in accordance with international manufacturing, quality, and safety standards. Year after year, USSCI has constantly pursued its ISO recertification without fail, demonstrating its firm commitment to maintaining consistency in the high standards it wishes to provide its clientele. USSCI has also been marked with the Philippine Standard Quality Certification by the Bureau of Product Standards &amp; is fully accredited by the Bureau of Research and Standards to undertake materials testing for all government infrastructure projects.
                        </p>
                    </div>
                    <div className="certs-grid">
                        {certifications.map((cert, i) => (
                            <div 
                                key={i} 
                                className="cert-card"
                                onClick={() => setSelectedCert(i)}
                            >
                                <div className="cert-card__image">
                                    <img src={cert.image} alt={cert.title} loading="lazy" />
                                    <div className="cert-card__zoom">
                                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                        <span>View Certificate</span>
                                    </div>
                                </div>
                                <div className="cert-card__content">
                                    <h3 className="cert-card__title">{cert.title}</h3>
                                    <span className="cert-card__issuer">{cert.issuer}</span>
                                    <span className="cert-card__validity">{cert.validity}</span>
                                    <p className="cert-card__desc">{cert.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Modal */}
            {selectedCert !== null && (
                <div className="cert-modal" onClick={() => setSelectedCert(null)}>
                    <div className="cert-modal__content" onClick={(e) => e.stopPropagation()}>
                        <button className="cert-modal__close" onClick={() => setSelectedCert(null)}>✕</button>
                        <img src={certifications[selectedCert].image} alt={certifications[selectedCert].title} />
                        <h3>{certifications[selectedCert].title}</h3>
                        <p>{certifications[selectedCert].issuer}</p>
                    </div>
                </div>
            )}
        </>
    );
};

// Quality Statement
const QualityStatement = () => (
    <section className="quality-statement">
        <div className="quality-statement__container">
            <div className="quality-statement__content">
                <span className="section-label">Our Commitment</span>
                <h2 className="quality-statement__title">Commitment to Quality</h2>
                <p className="quality-statement__text">
                    At Universal Steel Smelting Co., Inc., quality is not just a goal—it's our 
                    foundation. Our Quality Assurance Testing Laboratory utilizes advanced 
                    equipment to ensure all production meets the strictest standards.
                </p>
                <div className="quality-statement__features">
                    <div className="quality-statement__feature">
                        <span className="quality-statement__number">01</span>
                        <div>
                            <h4>Advanced Testing</h4>
                            <p>Carbon Analyzer Spectrometer & Universal Testing Machine</p>
                        </div>
                    </div>
                    <div className="quality-statement__feature">
                        <span className="quality-statement__number">02</span>
                        <div>
                            <h4>Continuous Monitoring</h4>
                            <p>Real-time quality control throughout production</p>
                        </div>
                    </div>
                    <div className="quality-statement__feature">
                        <span className="quality-statement__number">03</span>
                        <div>
                            <h4>Standards Compliance</h4>
                            <p>Meeting international and Philippine standards</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// CTA
const CTA = () => (
    <section className="certs-cta">
        <div className="certs-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6425.webp)' }}></div>
        <div className="certs-cta__overlay"></div>
        <div className="certs-cta__container">
            <h2 className="certs-cta__title">Need Documentation?</h2>
            <p className="certs-cta__text">
                Contact us for certification documents and product test reports.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
    </section>
);

// Main Component
const Certifications = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                <CertificationsGrid />
                <QualityStatement />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Certifications;
