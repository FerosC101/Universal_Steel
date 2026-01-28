import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

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
                        <Link to="/products" className="sidebar-card-link">
                            <div
                                className="sidebar-card"
                                style={{ backgroundImage: `url('${cloudinary.product}')` }}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Products</span>
                                    <span className="arrow-btn">→</span>
                                </div>
                            </div>
                        </Link>
                        <Link to="/certifications" className="sidebar-card-link">
                            <div
                                className="sidebar-card"
                                style={{ backgroundImage: `url('${cloudinary.certs}')` }}
                            >
                                <div className="overlay">
                                    <span className="card-text">Our Certifications</span>
                                    <span className="arrow-btn">→</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
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
