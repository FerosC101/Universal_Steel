import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './About.css';

const Check = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const About = () => {
    return (
        <div className="about-page">
            <Header />
            
            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-overlay-about">
                    <h1>About Us</h1>
                    <p>Six Decades of Excellence in Steel Manufacturing</p>
                </div>
            </section>

            {/* Company History */}
            <section className="section-simple">
                <div className="container-simple">
                    <div className="about-content-grid">
                        <div className="about-text">
                            <h2>Our History</h2>
                            <p>
                                Universal Steel Smelting Co Inc has been at the forefront of the Philippine steel industry 
                                since 1964. For over 60 years, we have maintained our commitment to producing the finest 
                                quality steel reinforcing bars.
                            </p>
                            <p>
                                What started as a vision to provide reliable construction materials has grown into one of 
                                the most trusted names in the industry. Our journey has been marked by continuous innovation, 
                                unwavering quality standards, and dedication to serving the construction needs of the nation.
                            </p>
                            <p>
                                Through economic challenges and industry evolution, we have consistently adapted and improved, 
                                ensuring that builders and contractors across the Philippines can rely on our products for 
                                their most demanding projects.
                            </p>
                        </div>
                        <div className="about-image">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753516396/USSCI_Pics_for_website_1_yzhack.jpg" 
                                alt="Company History" 
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision, Mission, Values */}
            <section className="section-simple vmv-section">
                <div className="container-simple">
                    <div className="vmv-grid">
                        <div className="vmv-card">
                            <h3>Our Vision</h3>
                            <p>
                                To be the leading steel manufacturer in the Philippines, recognized for our unwavering 
                                commitment to quality, innovation, and customer satisfaction.
                            </p>
                        </div>

                        <div className="vmv-card">
                            <h3>Our Mission</h3>
                            <p>
                                To provide superior quality steel reinforcing bars that meet international standards, 
                                supporting the nation's infrastructure development and ensuring the safety and durability 
                                of every construction project.
                            </p>
                        </div>

                        <div className="vmv-card">
                            <h3>Our Values</h3>
                            <ul>
                                <li><Check className="check-icon" /> Quality Excellence</li>
                                <li><Check className="check-icon" /> Customer Commitment</li>
                                <li><Check className="check-icon" /> Integrity & Reliability</li>
                                <li><Check className="check-icon" /> Continuous Innovation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Factory Modernization */}
            <section className="section-simple modernization-section">
                <div className="container-simple">
                    <h2>Factory Modernization</h2>
                    <p className="section-subtitle">
                        Investing in Technology for Superior Quality
                    </p>

                    <div className="modernization-grid">
                        <div className="modernization-card">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1755264913/viber_image_2025-08-15_14-35-30-423_douzo9.jpg" 
                                alt="Optical Emission Spectrometer" 
                            />
                            <h4>Advanced Testing Equipment</h4>
                            <p>
                                Our state-of-the-art Optical Emission Spectrometer ensures precise material analysis 
                                and quality control at every stage of production.
                            </p>
                        </div>

                        <div className="modernization-card">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753516397/USSCI_Pics_for_website_3_haeba5.jpg" 
                                alt="Modern Facility" 
                            />
                            <h4>Modern Manufacturing</h4>
                            <p>
                                Continuous upgrades to our production facilities ensure we maintain the highest 
                                standards of efficiency and product quality.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section-simple certifications-section">
                <div className="container-simple">
                    <h2>Certifications & Accreditations</h2>
                    <p className="section-subtitle">
                        Recognized for Excellence in Quality and Standards
                    </p>

                    <div className="certifications-grid">
                        <div className="cert-card">
                            <div className="cert-icon">ISO</div>
                            <h4>ISO 9001</h4>
                            <p>Quality Management System Certified</p>
                        </div>

                        <div className="cert-card">
                            <div className="cert-icon">ISO</div>
                            <h4>ISO 14001</h4>
                            <p>Environmental Management System</p>
                        </div>

                        <div className="cert-card">
                            <div className="cert-icon">BPS</div>
                            <h4>Bureau of Product Standards</h4>
                            <p>Philippine Standards Accredited</p>
                        </div>

                        <div className="cert-card">
                            <div className="cert-icon">PAB</div>
                            <h4>Philippine Accreditation Bureau</h4>
                            <p>Laboratory Testing Certified</p>
                        </div>
                    </div>

                    <div className="commitment-statement">
                        <p>
                            Our certifications reflect our unwavering commitment to maintaining international quality 
                            standards and delivering products that builders can trust. Every rebar that leaves our 
                            facility meets or exceeds industry requirements, ensuring the safety and longevity of 
                            construction projects across the Philippines.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section-simple why-choose-section">
                <div className="container-simple">
                    <h2>Why Choose Universal Steel?</h2>
                    
                    <div className="benefits-grid">
                        <div className="benefit-item">
                            <h4>60 Years of Experience</h4>
                            <p>Proven track record in delivering quality steel products</p>
                        </div>

                        <div className="benefit-item">
                            <h4>International Standards</h4>
                            <p>Products that meet and exceed global quality requirements</p>
                        </div>

                        <div className="benefit-item">
                            <h4>Advanced Technology</h4>
                            <p>State-of-the-art equipment for precision manufacturing</p>
                        </div>

                        <div className="benefit-item">
                            <h4>Reliable Supply</h4>
                            <p>Consistent availability to meet your project timelines</p>
                        </div>

                        <div className="benefit-item">
                            <h4>Technical Support</h4>
                            <p>Expert guidance for your construction needs</p>
                        </div>

                        <div className="benefit-item">
                            <h4>Competitive Pricing</h4>
                            <p>Quality products at fair market rates</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
