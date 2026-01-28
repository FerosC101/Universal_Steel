import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

// Hero Section
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        'https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/hero_sqtj19.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/hero2_omdk5s.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/hero3_exwvmu.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/hero4_c9ylu9.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/hero5_ydk14p.jpg',
        'https://res.cloudinary.com/drrzinr9v/image/upload/hero6_e7u9ss.jpg',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero">
            <div className="hero__bg">
                {slides.map((slide, i) => (
                    <div 
                        key={i}
                        className={`hero__slide ${i === currentSlide ? 'hero__slide--active' : ''}`}
                        style={{ backgroundImage: `url(${slide})` }}
                    />
                ))}
                <div className="hero__overlay" />
            </div>
            <div className="hero__container">
                <div className="hero__content">
                    <h1 className="hero__title">
                        Forging Strong<br />
                        <span>Alliances for the Future!</span>
                    </h1>
                    <p className="hero__text">
                        Backed by decades of innovation and resilience, UNIVERSAL STEEL SMELTING CO INC 
                        continues to shape the construction industry, building a legacy of strength and 
                        progress across the Philippines.
                    </p>
                    <div className="hero__actions">
                        <Link to="/about" className="btn btn--primary">
                            Learn More
                        </Link>
                        <Link to="/products" className="btn btn--outline-light">
                            View Products
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};



// About Section
const About = () => (
    <section className="about">
        <div className="about__container">
            <div className="about__image">
                <img 
                    src="https://res.cloudinary.com/drrzinr9v/image/upload/v1752676337/514315094_122186224832360700_1263205354293391856_n_qrnviz.jpg" 
                    alt="Universal Steel facility"
                />
            </div>
            <div className="about__content">
                <span className="about__label">About Us</span>
                <h2 className="about__title">
                    UNIVERSAL STEEL SMELTING CO INC
                </h2>
                <p className="about__text">
                    Founded with a vision to fuel industrial growth through innovation and strength, 
                    Universal Steel Smelting Company Incorporated is a trusted leader in steel 
                    manufacturing and smelting solutions.
                </p>
                <p className="about__text">
                    For over 60 years, we have specialized in the production of high-grade deformed 
                    bars that power the construction and infrastructure sectors.
                </p>
                <p className="about__text">
                    Headquartered in Quezon City, our advanced smelting and manufacturing facilities 
                    are equipped with cutting-edge technology and operated by a skilled workforce 
                    committed to quality, safety, and sustainability.
                </p>
                <p className="about__text">
                    At Universal Steel Smelting, we prioritize innovation, environmental responsibility, 
                    and long-term client relationships. Our operations are TUV and BPS certified and 
                    DPWH-Accredited Testing Laboratory by the Bureau of Research and Standards (BRS).
                </p>
                <p className="about__text about__text--highlight">
                    Driven by integrity, engineered for durability — Universal Steel Smelting Company 
                    Inc. is forging strong alliances for the future.
                </p>
                <Link to="/about" className="btn btn--primary">
                    Read More About Us →
                </Link>
            </div>
        </div>
    </section>
);

// Products Section
const Products = () => {
    const products = [
        {
            title: 'Grade 40 Rebars',
            priceRange: '₱21.80 - ₱22.00/KG',
            shortDesc: 'High-quality Grade 40 reinforcing steel bars',
            desc: 'Premium Grade 40 reinforcing steel bars manufactured to international standards. Perfect for residential and light commercial construction projects requiring reliable structural reinforcement.',
            image: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg',
        },
        {
            title: 'Grade 60 Rebars',
            priceRange: '₱22.50 - ₱22.70/KG',
            shortDesc: 'Superior Grade 60 reinforcing steel bars',
            desc: 'High-strength Grade 60 reinforcing steel bars engineered for demanding construction applications. Ideal for commercial buildings, bridges, and heavy-duty infrastructure projects.',
            image: 'https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg',
        },
    ];

    return (
        <section className="products">
            <div className="products__container">
                <div className="products__header">
                    <span className="products__label">Our Products</span>
                    <h2 className="products__title">Products</h2>
                </div>
                <div className="products__grid">
                    {products.map((product, i) => (
                        <div key={i} className="product-card">
                            <div className="product-card__image">
                                <img src={product.image} alt={product.title} />
                            </div>
                            <div className="product-card__body">
                                <h3 className="product-card__title">{product.title}</h3>
                                <p className="product-card__short">{product.shortDesc}</p>
                                <Link to="/products" className="product-card__link">
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="products__cta">
                    <button
                        className="btn btn--outline"
                        onClick={() => window.open("https://drive.google.com/file/d/1KmRxQPS3W630KvdKM4bNdMeA4FNBqlFS/view?usp=drive_link", "_blank")}
                    >
                        View Full Product List →
                    </button>
                </div>
            </div>
        </section>
    );
};

// Video Section
const Video = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const toggleVideo = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="video">
            <div className="video__container">
                <div className="video__wrapper" onClick={toggleVideo}>
                    {!isPlaying && (
                        <div className="video__play">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    )}
                    <video
                        ref={videoRef}
                        className="video__player"
                        onEnded={() => setIsPlaying(false)}
                        poster="https://res.cloudinary.com/drrzinr9v/image/upload/v1752675549/hero_sqtj19.jpg"
                    >
                        <source 
                            src="https://res.cloudinary.com/drrzinr9v/video/upload/v1752759885/homepageVid_a3fuh3.mov" 
                            type="video/mp4" 
                        />
                    </video>
                </div>
            </div>
        </section>
    );
};

// Why Choose Us - Original content from main branch
const WhyUs = () => {
    const features = [
        {
            number: '01',
            title: 'Legacy of Strength',
            desc: 'Rooted in pre-WWII history. Built on resilience, innovation, and decades of expertise from the LKG Group legacy.',
        },
        {
            number: '02',
            title: 'Diverse Industry Footprint',
            desc: 'Active in manufacturing, construction, real estate, and education. A broad base ensures reliable and stable operations.',
        },
        {
            number: '03',
            title: 'Top-Tier Performance',
            desc: 'Ranked among the Philippines top 500 corporations. Delivers scale, stability, and results.',
        },
        {
            number: '04',
            title: 'Commitment to Quality',
            desc: 'Strict adherence to international manufacturing. Driven by quality control and ongoing improvement.',
        },
        {
            number: '05',
            title: 'Future-Ready Vision',
            desc: 'Focused on innovation and sustainability. Building strong, long-term partnerships.',
        },
    ];

    return (
        <section className="why">
            <div className="why__container">
                <div className="why__header">
                    <span className="why__label">Why Choose Us</span>
                    <h2 className="why__title">Why should you choose Universal Steel Smelting Co Inc?</h2>
                </div>
                <div className="why__list">
                    {features.map((f, i) => (
                        <div key={i} className="why__item">
                            <span className="why__number">{f.number}</span>
                            <div className="why__item-content">
                                <h3 className="why__item-title">{f.title}</h3>
                                <p className="why__item-desc">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Partners Marquee Section
const Partners = () => {
    const partners = [
        { name: "Bendotti", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362856/partner1_dita9v.png" },
        { name: "CMC", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362870/partner2_qqt38f.png" },
        { name: "Steel Work", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362876/partner3_ygi4en.png" },
        { name: "Atlas Steel", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362882/partner4_qiimgs.png" },
    ];

    // Duplicate partners array for seamless infinite scroll
    const duplicatedPartners = [...partners, ...partners, ...partners, ...partners];

    return (
        <section className="partners-marquee">
            <h2 className="partners-marquee__title">Our Partners</h2>
            <div className="partners-marquee__track">
                <div className="partners-marquee__content">
                    {duplicatedPartners.map((partner, i) => (
                        <div key={i} className="partners-marquee__item">
                            <img src={partner.url} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// CTA Section
const CTA = () => (
    <section className="cta">
        <div className="cta__container">
            <h2 className="cta__title">Ready to Start Your Project?</h2>
            <p className="cta__text">
                Contact our team to discuss your steel requirements and get a competitive quote.
            </p>
            <div className="cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Us</Link>
                <Link to="/pricing" className="btn btn--outline">View Pricing</Link>
            </div>
        </div>
    </section>
);

// Main Home Component
const Home = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <Hero />
                <Partners />
                <About />
                <Products />
                <Video />
                <WhyUs />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
