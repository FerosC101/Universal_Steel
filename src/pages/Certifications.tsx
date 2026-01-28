import Header from '../components/Header';
import Footer from '../components/Footer';
import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_TUV_ISO_exp_2028_t3dha9.jpg",
            title: "ISO 9001:2015 Certified",
            subtitle: "by TÜV Philippines",
            description: "Our Quality Management System meets international standards, ensuring consistent product quality and customer satisfaction."
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg",
            title: "BPS Certification Mark",
            subtitle: "Bureau of Product Standards",
            description: "Philippine Standard Quality Certification Mark for all Deformed Steel Bars, ensuring compliance with national quality standards."
        },
        {
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg",
            title: "DPWH-Accredited Testing Laboratory",
            subtitle: "Bureau of Research and Standards (BRS)",
            description: "Fully accredited to undertake materials testing for all government infrastructure projects."
        }
    ];

    return (
        <div className="certifications-page">
            <Header />

            {/* Hero Section */}
            <section className="page-hero">
                <div className="page-hero-content">
                    <span className="page-hero-label">Quality Assurance</span>
                    <h1>Our Certifications</h1>
                    <p>Committed to excellence through internationally recognized quality standards</p>
                </div>
            </section>

            {/* Certifications Grid */}
            <section className="certifications-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Industry-Leading Standards</h2>
                        <p>Our certifications demonstrate our commitment to producing high-quality steel products that meet rigorous international and national standards.</p>
                    </div>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <article key={index} className="certification-card">
                                <div className="certification-image">
                                    <img src={cert.image} alt={cert.title} />
                                </div>
                                <div className="certification-content">
                                    <h3>{cert.title}</h3>
                                    <span className="certification-issuer">{cert.subtitle}</span>
                                    <p>{cert.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quality Statement Section */}
            <section className="quality-statement">
                <div className="container">
                    <div className="statement-content">
                        <h2>Our Commitment to Quality</h2>
                        <p>
                            At Universal Steel Smelting Co., Inc., quality is not just a goal—it's our foundation. 
                            Our Quality Assurance Testing Laboratory utilizes advanced Carbon Analyzer Spectrometer 
                            and Universal Testing Machine to ensure that all production meets the strictest quality 
                            standards in rebar manufacturing.
                        </p>
                        <div className="quality-features">
                            <div className="quality-feature">
                                <div className="feature-number">01</div>
                                <div className="feature-text">
                                    <h4>Advanced Testing</h4>
                                    <p>Carbon Analyzer Spectrometer & Universal Testing Machine</p>
                                </div>
                            </div>
                            <div className="quality-feature">
                                <div className="feature-number">02</div>
                                <div className="feature-text">
                                    <h4>Continuous Monitoring</h4>
                                    <p>Real-time quality control throughout production</p>
                                </div>
                            </div>
                            <div className="quality-feature">
                                <div className="feature-number">03</div>
                                <div className="feature-text">
                                    <h4>Standards Compliance</h4>
                                    <p>Meeting international and Philippine standards</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Certifications;
