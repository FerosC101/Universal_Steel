import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { PageWithSkeleton } from './hooks/usePageLoading';
import { HomePageSkeleton } from './components/Skeleton';
import './Home.css';

// Hero Section
const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/images/hero/test-5.jpg',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6053.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6136.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6205.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6269.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6380.webp',
        '/images/facility/Unisteel%20Final%20Photos/5E8A6518.webp',
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

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
                        At Universal Steel, beyond Forging Strong Alliances for the Future, we build partnerships that will last.
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

// About & Legacy Section (2-Panel Layout)
const AboutAndLegacy = () => (
    <section className="about-legacy">
        <div className="about-legacy__container">
            {/* About Panel */}
            <div className="about-legacy__panel about-legacy__panel--about">
                <div className="about-legacy__header">
                    <span className="about-legacy__label">About Us</span>
                    <h2 className="about-legacy__title">
                        UNIVERSAL STEEL SMELTING CO INC
                    </h2>
                </div>
                <div className="about-legacy__video">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="metadata"
                    >
                        <source src="/UniSteelVid.mp4" type="video/mp4" />
                    </video>
                </div>
                <div className="about-legacy__text-content">
                    <p className="about-legacy__text">
                        Founded with a vision to fuel industrial growth through innovation and strength, 
                        Universal Steel Smelting Company Incorporated is a trusted leader in steel 
                        manufacturing and smelting solutions.
                    </p>
                    <p className="about-legacy__text">
                        For over 60 years, we have specialized in the production of high-grade deformed 
                        bars that power the construction and infrastructure sectors.
                    </p>
                    <p className="about-legacy__text">
                        Headquartered in Quezon City, our advanced smelting and manufacturing facilities 
                        are equipped with cutting-edge technology and operated by a skilled workforce 
                        committed to quality, safety, and sustainability.
                    </p>
                </div>
            </div>

            {/* Legacy Panel */}
            <div className="about-legacy__panel about-legacy__panel--legacy">
                <div className="about-legacy__header">
                    <span className="about-legacy__label">Our Legacy</span>
                    <h2 className="about-legacy__title">60 Years of Building the Nation</h2>
                </div>
                <div className="about-legacy__image">
                    <img 
                        src="/images/hero/test-5.jpg" 
                        alt="60 Years Milestone" 
                        loading="lazy"
                    />
                </div>
                <div className="about-legacy__legacy-content">
                    <p className="about-legacy__text">
                        &emsp;Throughout our Sixty-year journey as a company this 2026, we have constantly refined our business model and operational systems to adapt itself to the ever-changing needs of the market and especially, of our clientele. We have evolved from being highly production driven to being more customer driven to better meet our clients' changing demands. We have professionalized our approach to the objectives of the company with the primary objective of complete customer satisfaction.
                    </p>
                    <p className="about-legacy__text">
                        &emsp;Now at our 60th anniversary, we stand firm yet humble for we have been bestowed with the distinction as being one of the industry's finest. Continually driven and compelled by our sincere desire to serve our clients excellently well, we commit to constantly reengineer ourselves for the challenges in the years ahead. Above all, we will continue to rely upon the guidance and the wisdom of the Almighty God, to lead us onwards. By His mighty blessing which we continue to implore, we shall remain a company fit as a worthy industry partner for decades to come.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

// Parallax Image Section
const Parallax = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const parallaxSpeed = isMobile ? 0.08 : 0.15;

    return (
        <section className="parallax">
            <div 
                className="parallax__image" 
                style={{ 
                    backgroundImage: 'url(/images/hero/construction-site-with-cranes-against-blue-sky.webp)',
                    backgroundPosition: `center ${-offset * parallaxSpeed}px`,
                    backgroundSize: 'cover',
                }}
            />
        </section>
    );
};

// Products Section
const Products = () => {
    const products = [
        {
            title: 'Grade 40 Rebars',
            priceRange: '₱21.80 - ₱22.00/KG',
            shortDesc: 'High-quality Grade 40 reinforcing steel bars',
            desc: 'Premium Grade 40 reinforcing steel bars manufactured to international standards. Perfect for residential and light commercial construction projects requiring reliable structural reinforcement.',
            image: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753545927/Grade_40_1_epdri0.jpg',
        },
        {
            title: 'Grade 60 Rebars',
            priceRange: '₱22.50 - ₱22.70/KG',
            shortDesc: 'Superior Grade 60 reinforcing steel bars',
            desc: 'High-strength Grade 60 reinforcing steel bars engineered for demanding construction applications. Ideal for commercial buildings, bridges, and heavy-duty infrastructure projects.',
            image: 'https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753799328/Grade_60_7_l46gsy.jpg',
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
                                <img src={product.image} alt={product.title} loading="lazy" />
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
                <div className="announcement-banner announcement-banner--inline">
                    <div className="announcement-banner__container">
                        <span className="announcement-banner__badge">Coming Soon</span>
                        <div className="announcement-banner__body">
                            <h3 className="announcement-banner__title">Grade 75 & Grade 80 Rebars</h3>
                            <p className="announcement-banner__text">
                                Higher-strength reinforcing bars for seismic zones and high-rise construction.
                            </p>
                        </div>
                        <Link to="/products" className="announcement-banner__link">Learn More →</Link>
                    </div>
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
        { name: "Bendotti", url: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_200/v1753362856/partner1_dita9v.png" },
        { name: "CMC", url: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_200/v1753362870/partner2_qqt38f.png" },
        { name: "Steel Work", url: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_200/v1753362876/partner3_ygi4en.png" },
        { name: "Atlas Steel", url: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_200/v1753362882/partner4_qiimgs.png" },
        { name: "BDO", url: "/images/partners/BDO_logo.png" },
        { name: "BPI", url: "/images/partners/BPI logo.png" },
        { name: "China Bank", url: "/images/partners/Chinabank_Since_1910_Logo.png" },
        { name: "Metrobank", url: "/images/partners/metrobanklogo.png" },
        { name: "UnionBank", url: "/images/partners/Unionbank_2018_logo.png" },
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
                            <img src={partner.url} alt={partner.name} loading="lazy" />
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
        <div className="cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6425.webp)' }}></div>
        <div className="cta__overlay"></div>
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
        <PageWithSkeleton skeleton={<HomePageSkeleton />}>
            <div className="page">
                <Header />
                <main>
                    <Hero />
                    <Partners />
                    <AboutAndLegacy />
                    <Parallax />
                    <Products />
                    <WhyUs />
                    <CTA />
                </main>
                <Footer />
            </div>
        </PageWithSkeleton>
    );
};

export default Home;
