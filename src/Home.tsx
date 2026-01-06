import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Cloudinary image URLs
const cloudinary = {
    hero1: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/hero_sqtj19.jpg',
    hero2: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero2_omdk5s.jpg',
    hero3: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero3_exwvmu.jpg',
    hero4: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero4_c9ylu9.jpg',
    hero5: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero5_ydk14p.jpg',
    hero6: 'https://res.cloudinary.com/drrzinr9v/image/upload/hero6_e7u9ss.jpg',
    product: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1755264013/viber_image_2025-08-15_14-33-32-091_oboevs.jpg',
    certs: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/homepageAbout_wezvdg.jpg',
    about: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1752676337/514315094_122186224832360700_1263205354293391856_n_qrnviz.jpg',
};

// Products Modal Component
const ProductsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const grade40Data = [
        { size: '10mm', price: 22.00, weight: 0.617, '6.0M': 81.44, '7.5M': 101.81, '9.0M': 122.17, '10.5M': 142.53, '12.0M': 162.89 },
        { size: '12mm', price: 22.00, weight: 0.888, '6.0M': 117.22, '7.5M': 146.52, '9.0M': 175.82, '10.5M': 205.13, '12.0M': 234.43 },
        { size: '16mm', price: 21.80, weight: 1.578, '6.0M': 206.40, '7.5M': 258.00, '9.0M': 309.60, '10.5M': 361.20, '12.0M': 412.80 },
        { size: '20mm', price: 21.80, weight: 2.466, '6.0M': 322.55, '7.5M': 403.19, '9.0M': 483.83, '10.5M': 564.47, '12.0M': 645.11 },
        { size: '25mm', price: 21.80, weight: 3.853, '6.0M': 503.97, '7.5M': 629.97, '9.0M': 755.96, '10.5M': 881.95, '12.0M': 1007.94 },
        { size: '28mm', price: 21.80, weight: 4.834, '6.0M': 632.29, '7.5M': 790.36, '9.0M': 948.43, '10.5M': 1106.50, '12.0M': 1264.57 },
        { size: '32mm', price: 22.00, weight: 6.313, '6.0M': 833.32, '7.5M': 1041.65, '9.0M': 1249.97, '10.5M': 1458.30, '12.0M': 1666.63 },
        { size: '36mm', price: 22.00, weight: 7.99, '6.0M': 1054.68, '7.5M': 1318.35, '9.0M': 1582.02, '10.5M': 1845.69, '12.0M': 2109.36 },
    ];

    const grade60Data = [
        { size: '10mm', price: 22.70, weight: 0.617, '6.0M': 84.04, '7.5M': 105.04, '9.0M': 126.05, '10.5M': 147.06, '12.0M': 168.07 },
        { size: '12mm', price: 22.70, weight: 0.888, '6.0M': 120.95, '7.5M': 151.18, '9.0M': 181.42, '10.5M': 211.65, '12.0M': 241.89 },
        { size: '16mm', price: 22.50, weight: 1.578, '6.0M': 213.03, '7.5M': 266.29, '9.0M': 319.55, '10.5M': 372.80, '12.0M': 426.06 },
        { size: '20mm', price: 22.50, weight: 2.466, '6.0M': 332.91, '7.5M': 416.14, '9.0M': 499.37, '10.5M': 582.59, '12.0M': 665.82 },
        { size: '25mm', price: 22.50, weight: 3.853, '6.0M': 520.16, '7.5M': 650.19, '9.0M': 780.23, '10.5M': 910.27, '12.0M': 1040.31 },
        { size: '28mm', price: 22.50, weight: 4.834, '6.0M': 652.59, '7.5M': 815.74, '9.0M': 978.89, '10.5M': 1142.03, '12.0M': 1305.18 },
        { size: '32mm', price: 22.70, weight: 6.313, '6.0M': 859.83, '7.5M': 1074.79, '9.0M': 1289.75, '10.5M': 1504.70, '12.0M': 1719.66 },
        { size: '36mm', price: 22.70, weight: 7.99, '6.0M': 1088.24, '7.5M': 1360.30, '9.0M': 1632.36, '10.5M': 1904.42, '12.0M': 2176.48 },
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="certifications-modal" onClick={onClose}>
            <div className="certifications-modal-content products-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="certifications-modal-close" onClick={onClose}>
                    <X />
                </button>
                <h2>Rebar Products & Pricing</h2>
                <div className="pricing-tables-container">
                    <div className="pricing-table-section">
                        <h3>GRADE 40 Rebars</h3>
                        <div className="table-responsive">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>PRICE/KILO</th>
                                        <th>WEIGHT KG/M</th>
                                        <th colSpan={5}>LENGTH</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>6.0M</th>
                                        <th>7.5M</th>
                                        <th>9.0M</th>
                                        <th>10.5M</th>
                                        <th>12.0M</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grade40Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="size-cell">{row.size}</td>
                                            <td className="price-cell">{row.price.toFixed(2)}</td>
                                            <td className="weight-cell">{row.weight}</td>
                                            <td className="length-cell">{row['6.0M']}</td>
                                            <td className="length-cell">{row['7.5M']}</td>
                                            <td className="length-cell">{row['9.0M']}</td>
                                            <td className="length-cell">{row['10.5M']}</td>
                                            <td className="length-cell">{row['12.0M']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="pricing-table-section">
                        <h3>GRADE 60 Rebars</h3>
                        <div className="table-responsive">
                            <table className="pricing-table">
                                <thead>
                                    <tr>
                                        <th>SIZE</th>
                                        <th>PRICE/KILO</th>
                                        <th>WEIGHT KG/M</th>
                                        <th colSpan={5}>LENGTH</th>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <th></th>
                                        <th></th>
                                        <th>6.0M</th>
                                        <th>7.5M</th>
                                        <th>9.0M</th>
                                        <th>10.5M</th>
                                        <th>12.0M</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {grade60Data.map((row, index) => (
                                        <tr key={index}>
                                            <td className="size-cell">{row.size}</td>
                                            <td className="price-cell">{row.price.toFixed(2)}</td>
                                            <td className="weight-cell">{row.weight}</td>
                                            <td className="length-cell">{row['6.0M']}</td>
                                            <td className="length-cell">{row['7.5M']}</td>
                                            <td className="length-cell">{row['9.0M']}</td>
                                            <td className="length-cell">{row['10.5M']}</td>
                                            <td className="length-cell">{row['12.0M']}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="pricing-note">
                    <p><strong>Note:</strong> All prices are subject to change without prior notice. Contact us for the most current pricing and availability.</p>
                </div>
            </div>
        </div>
    );
};

// Certifications Modal
const CertificationsModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const certifications = [
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_TUV_ISO_exp_2028_t3dha9.jpg?ts=${Date.now()}`,
            title: "ISO 9001:2015 Certified",
            subtitle: "by TÃœV Philippines"
        },
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_PS_Mark_exp_24Aug2027_page-0001_z47en5.jpg?ts=${Date.now()}`,
            title: "BPS Certification Mark",
            subtitle: "Bureau of Product Standards"
        },
        {
            image: `https://res.cloudinary.com/drrzinr9v/image/upload/USSCI_DPWH_exp_2025_page-0001_cgqgyj.jpg?ts=${Date.now()}`,
            title: "DPWH-Accredited Testing Laboratory",
            subtitle: "by Bureau of Research and Standards (BRS)"
        }
    ];

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="certifications-modal" onClick={onClose}>
            <div className="certifications-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="certifications-modal-close" onClick={onClose}>
                    <X />
                </button>
                <h2>Our Certifications</h2>
                <div className="certifications-grid">
                    {certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <img src={cert.image} alt={cert.title} />
                            <h3>{cert.title}</h3>
                            <p>{cert.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Hero Section with Slideshow
const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        cloudinary.hero1,
        cloudinary.hero2,
        cloudinary.hero3,
        cloudinary.hero4,
        cloudinary.hero5,
        cloudinary.hero6
    ];

    const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    useEffect(() => {
        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-slideshow">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
                        style={{ backgroundImage: `url('${slide}')` }}
                    />
                ))}
            </div>
            <button className="hero-nav hero-nav-prev" onClick={prevSlide}>&#8249;</button>
            <button className="hero-nav hero-nav-next" onClick={nextSlide}>&#8250;</button>
            <div className="hero-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`hero-dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </div>
            <div className="hero-content">
                <h1 className="hero-title">
                    Forging Strong Alliances 
                    <span className="hero-title-accent">for the Future!</span>
                </h1>
                <p className="hero-description">
                    Backed by decades of innovation and resilience, UNIVERSAL STEEL SMELTING CO INC continues to shape the construction industry, building a legacy of strength and progress across the Philippines.
                </p>
                <Link to="/about" className="hero-button">LEARN MORE</Link>
            </div>
        </section>
    );
};

// About Section
const AboutSection = () => (
    <section className="about-section">
        <div className="container-simple">
            <div className="about-grid">
                <div className="about-image" style={{ backgroundImage: `url('${cloudinary.about}')` }}></div>
                <div className="about-content">
                    <h2>UNIVERSAL STEEL SMELTING CO INC</h2>
                    <p>
                        Founded with a vision to fuel industrial growth through innovation and strength, Universal Steel Smelting Company Incorporated is a trusted leader in steel manufacturing and smelting solutions.
                        For over 60 years, we have specialized in the production of high-grade deformed bars that power the construction and infrastructure sectors.
                    </p>
                    <p>
                        Headquartered in Quezon City, our advanced smelting and manufacturing facilities are equipped with cutting-edge technology and operated by a skilled workforce committed to quality, safety, and sustainability.
                        We produce a wide range of deformed bar products tailored to meet the demanding standards of global markets.
                    </p>
                    <p>
                        At Universal Steel Smelting, we prioritize innovation, environmental responsibility, and long-term client relationships. Our operations are TUV and BPS certified and DPWH-Accredited Testing Laboratory by the Bureau of Research and Standards (BRS).
                    </p>
                    <p>
                        Driven by integrity, engineered for durability — Universal Steel Smelting Company Inc. is forging strong alliances for the future.
                    </p>
                    <Link to="/about" className="about-button">READ MORE ABOUT US →</Link>
                </div>
            </div>
        </div>
    </section>
);

// Video Section
const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
                setIsPlaying(false);
            } else {
                videoRef.current.play();
                setIsPlaying(true);
            }
        }
    };

    return (
        <section className="video-section">
            <div className="video-container">
                {!isPlaying && (
                    <svg
                        className="icon-lg play-button"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        onClick={toggleVideo}
                    >
                        <path d="M8 5v14l11-7z" />
                    </svg>
                )}
                <video
                    ref={videoRef}
                    className='video'
                    onClick={toggleVideo}
                    onEnded={() => setIsPlaying(false)}
                >
                    <source src="https://res.cloudinary.com/drrzinr9v/video/upload/v1752759885/homepageVid_a3fuh3.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </section>
    );
};

// Features Section
const FeaturesSection = () => {
    const [isCertModalOpen, setIsCertModalOpen] = useState(false);
    const [isProductsModalOpen, setIsProductsModalOpen] = useState(false);

    const features = [
        {
            number: "01",
            title: "Legacy of Strength",
            description: "Rooted in pre-WWII history. Built on resilience, innovation, and decades of expertise from the LKG Group legacy."
        },
        {
            number: "02",
            title: "Diverse Industry Footprint",
            description: "Active in manufacturing, construction, real estate, and education. A broad base ensures reliable and stable operations."
        },
        {
            number: "03",
            title: "Top-Tier Performance",
            description: "Ranked among the Philippines top 500 corporations. Delivers scale, stability, and results."
        },
        {
            number: "04",
            title: "Commitment to Quality",
            description: "Strict adherence to international manufacturing. Driven by quality control and ongoing improvement."
        },
        {
            number: "05",
            title: "Future-Ready Vision",
            description: "Focused on innovation and sustainability. Building strong, long-term partnerships."
        }
    ];

    return (
        <>
            <section className="features-section">
                <div className="container-simple">
                    <div className="features-grid">
                        <div className="features-content">
                            <h2>Why should you choose Universal Steel Smelting Co Inc?</h2>
                            <div className="features-list">
                                {features.map((feature, index) => (
                                    <div key={index} className="feature-item">
                                        <div className="feature-number">{feature.number}</div>
                                        <div className="feature-text">
                                            <h3>{feature.title}</h3>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="features-sidebar">
                            <div
                                className="sidebar-card"
                                style={{ backgroundImage: `url('${cloudinary.product}')` }}
                                onClick={() => setIsProductsModalOpen(true)}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Products</span>
                                    <button className="arrow-btn">→</button>
                                </div>
                            </div>
                            <div
                                className="sidebar-card"
                                style={{ backgroundImage: `url('${cloudinary.certs}')` }}
                                onClick={() => setIsCertModalOpen(true)}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Certifications</span>
                                    <button className="arrow-btn">→</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <ProductsModal isOpen={isProductsModalOpen} onClose={() => setIsProductsModalOpen(false)} />
            <CertificationsModal isOpen={isCertModalOpen} onClose={() => setIsCertModalOpen(false)} />
        </>
    );
};

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <main>
                <HeroSection />
                <AboutSection />
                <VideoSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
