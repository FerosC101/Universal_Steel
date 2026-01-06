import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './Home.css';

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1>Celebrating 60 Years of Excellence</h1>
                        <p>Leading the Philippine steel industry with quality and reliability since 1964</p>
                        <div className="hero-buttons">
                            <Link to="/products" className="btn-primary">View Products</Link>
                            <Link to="/contact" className="btn-secondary">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="section-simple about-preview">
                <div className="container-simple">
                    <div className="section-intro">
                        <h2>Representing Hope for the Philippine Industry</h2>
                        <p>
                            In our fast-changing world, some things are designed to last a lifetime. Shelter is one. 
                            Builders require quality materials that are strong, durable, and affordable. Universal Steel 
                            Smelting Co Inc has prided itself in producing the finest quality steel bars since its inception.
                        </p>
                        <Link to="/about" className="link-with-arrow">
                            Learn More About Us <ArrowRight className="arrow-icon" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="section-simple products-preview">
                <div className="container-simple">
                    <h2>Our Products</h2>
                    <p className="section-subtitle">Providing Superior Quality Rebars</p>
                    
                    <div className="products-grid">
                        <div className="product-card-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg" 
                                alt="Grade 40 Rebars" 
                            />
                            <div className="product-info">
                                <h3>Grade 40 Rebars</h3>
                                <p>High-quality Grade 40 reinforcing steel bars for residential and light commercial projects</p>
                                <span className="price-range">₱21.80 - ₱22.00/KG</span>
                            </div>
                        </div>

                        <div className="product-card-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg" 
                                alt="Grade 60 Rebars" 
                            />
                            <div className="product-info">
                                <h3>Grade 60 Rebars</h3>
                                <p>High-strength Grade 60 reinforcing steel bars for demanding construction applications</p>
                                <span className="price-range">₱22.50 - ₱22.70/KG</span>
                            </div>
                        </div>
                    </div>

                    <div className="center-link">
                        <Link to="/products" className="link-with-arrow">
                            View All Products <ArrowRight className="arrow-icon" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quality Section */}
            <section className="section-simple quality-section">
                <div className="container-simple">
                    <h2>Quality Assurance</h2>
                    <div className="quality-content">
                        <div className="quality-text">
                            <p>
                                When it comes to steel, builders know they have a steadfast ally in Universal Steel. 
                                Our commitment to quality is backed by international certifications and rigorous testing procedures.
                            </p>
                            <ul className="quality-list">
                                <li>ISO 9001 Certified</li>
                                <li>Bureau of Product Standards Accredited</li>
                                <li>Philippine Accreditation Bureau Certified</li>
                                <li>Advanced Optical Emission Spectrometer Testing</li>
                            </ul>
                        </div>
                        <div className="quality-image">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1755264913/viber_image_2025-08-15_14-35-30-423_douzo9.jpg" 
                                alt="Quality Testing Equipment" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section-simple projects-preview-section">
                <div className="container-simple">
                    <h2>Featured Projects</h2>
                    <p className="section-subtitle">Forming the Backbone of the Nation</p>
                    
                    <div className="projects-grid-simple">
                        <div className="project-card-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_projects_for_website_2_hrfykz.jpg" 
                                alt="Infrastructure Project" 
                            />
                            <h4>Major Infrastructure Projects</h4>
                        </div>
                        <div className="project-card-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_projects_for_website_11_btaknk.jpg" 
                                alt="Commercial Project" 
                            />
                            <h4>Commercial Developments</h4>
                        </div>
                        <div className="project-card-simple">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753516398/USSCI_projects_for_website_5_jo4ul6.jpg" 
                                alt="Residential Project" 
                            />
                            <h4>Residential Projects</h4>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
