import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../Products.css';

const product = {
    id: 2,
    name: "Grade 60 Rebars",
    image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753799328/Grade_60_7_l46gsy.jpg",
    description: "High-strength deformed bars engineered for demanding applications. Perfect for commercial buildings, bridges, and heavy infrastructure.",
    longDescription: "Grade 60 deformed steel bars are engineered for the most demanding structural applications. With a minimum yield strength of 420 MPa, these high-tensile rebars are the preferred choice for bridges, high-rise buildings, and heavy infrastructure projects. Manufactured at our ISO 9001:2015 certified facility and rigorously tested to ensure full compliance with international standards, Grade 60 bars provide superior performance in seismic zones and critical load-bearing structures.",
    features: [
        "High tensile strength (420 MPa)",
        "BPS Certified quality",
        "Available in 10mm to 36mm",
        "Optimal for seismic zones",
        "ISO 9001:2015 certified production",
        "DPWH Laboratory tested",
    ],
    applications: [
        "High-rise commercial buildings",
        "Bridges & overpasses",
        "Heavy infrastructure projects",
        "Seismic-resistant structures",
        "Flyovers & expressways",
        "Industrial & government facilities",
    ],
    sizes: [
        { size: "10mm", weight: "0.617 kg/m", price: "₱22.70/kg" },
        { size: "12mm", weight: "0.888 kg/m", price: "₱22.70/kg" },
        { size: "16mm", weight: "1.578 kg/m", price: "₱22.50/kg" },
        { size: "20mm", weight: "2.466 kg/m", price: "₱22.50/kg" },
        { size: "25mm", weight: "3.853 kg/m", price: "₱22.50/kg" },
        { size: "28mm", weight: "4.834 kg/m", price: "₱22.50/kg" },
        { size: "32mm", weight: "6.313 kg/m", price: "₱22.70/kg" },
        { size: "36mm", weight: "7.990 kg/m", price: "₱22.70/kg" },
    ],
};

// Page Hero
const PageHero = () => (
    <section className="products-page-hero">
        <div className="products-page-hero__overlay" />
        <div className="products-page-hero__content">
            <span className="products-page-hero__label">Our Products</span>
            <h1 className="products-page-hero__title">Grade 60 Rebars</h1>
            <p className="products-page-hero__text">
                High-strength deformed bars for commercial buildings, bridges, and heavy infrastructure
            </p>
        </div>
    </section>
);

// Product Detail
const ProductDetail = () => {
    const [activeTab, setActiveTab] = useState<'specs' | 'pricing'>('specs');

    return (
        <section className="product-detail" id="product-2">
            <div className="product-detail__container">
                <div className="product-detail__image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail__content">
                    <h2 className="product-detail__title">{product.name}</h2>
                    <p className="product-detail__desc">{product.longDescription}</p>
                    
                    <ul className="product-detail__features">
                        {product.features.map((feature, i) => (
                            <li key={i}>{feature}</li>
                        ))}
                    </ul>

                    <div className="product-detail__tabs">
                        <button 
                            className={`product-detail__tab ${activeTab === 'specs' ? 'product-detail__tab--active' : ''}`}
                            onClick={() => setActiveTab('specs')}
                        >
                            Specifications
                        </button>
                        <button 
                            className={`product-detail__tab ${activeTab === 'pricing' ? 'product-detail__tab--active' : ''}`}
                            onClick={() => setActiveTab('pricing')}
                        >
                            Pricing
                        </button>
                    </div>

                    <div className="product-detail__table-wrapper">
                        <table className="product-detail__table">
                            <thead>
                                <tr>
                                    <th>Size</th>
                                    <th>Unit Weight</th>
                                    {activeTab === 'pricing' && <th>Price</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {product.sizes.map((size, i) => (
                                    <tr key={i}>
                                        <td>{size.size}</td>
                                        <td>{size.weight}</td>
                                        {activeTab === 'pricing' && <td>{size.price}</td>}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <Link to="/contact" className="btn btn--primary">
                        Request Quote
                    </Link>
                </div>
            </div>
        </section>
    );
};

// Technical Specifications Section
const TechnicalSpecs = () => (
    <section className="product-tech-specs">
        <div className="product-tech-specs__container">
            <div className="product-tech-specs__header">
                <span className="section-label">PNS 49:2020</span>
                <h2>Technical Specifications</h2>
                <p>Manufactured and tested in accordance with the Philippine National Standards for reinforcing steel bars.</p>
            </div>

            <div className="product-tech-specs__grid">
                <div className="product-tech-specs__card">
                    <h3>Mechanical Properties (Grade 420W)</h3>
                    <table className="product-tech-specs__table">
                        <tbody>
                            <tr><td>Yield Strength (min)</td><td>420 MPa</td></tr>
                            <tr><td>Yield Strength (max)</td><td>540 MPa</td></tr>
                            <tr><td>Tensile Strength (min)</td><td>550 MPa</td></tr>
                            <tr><td>Ts/Ys Ratio (min)</td><td>1.25</td></tr>
                            <tr><td>Bending Angle</td><td>180°</td></tr>
                            <tr><td>Ductility Class</td><td>Class 2 – Weldable (W)</td></tr>
                        </tbody>
                    </table>
                </div>

                <div className="product-tech-specs__card">
                    <h3>Elongation (min, in 200mm)</h3>
                    <table className="product-tech-specs__table">
                        <thead>
                            <tr><th>Size Range</th><th>Elongation (%)</th></tr>
                        </thead>
                        <tbody>
                            <tr><td>10mm – 16mm</td><td>14%</td></tr>
                            <tr><td>20mm</td><td>14%</td></tr>
                            <tr><td>25mm</td><td>12%</td></tr>
                            <tr><td>28mm – 36mm</td><td>12%</td></tr>
                        </tbody>
                    </table>
                    <div className="product-tech-specs__card-section">
                        <h3>Bend Test (Pin Diameter)</h3>
                        <table className="product-tech-specs__table">
                            <thead>
                                <tr><th>Size Range</th><th>Pin Diameter</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>10mm – 16mm</td><td>4d</td></tr>
                                <tr><td>20mm – 25mm</td><td>4d</td></tr>
                                <tr><td>28mm – 36mm</td><td>6d</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="product-tech-specs__physical">
                <h3>Physical Specifications</h3>
                <div className="product-tech-specs__info-grid">
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Standard Sizes</span>
                        <span className="product-tech-specs__info-value">10, 12, 16, 20, 25, 28, 32, 36 mm</span>
                    </div>
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Standard Lengths</span>
                        <span className="product-tech-specs__info-value">6.0, 7.5, 9.0, 10.5, 12.0 m</span>
                    </div>
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Special Lengths (on order)</span>
                        <span className="product-tech-specs__info-value">13.5 m, 15.0 m</span>
                    </div>
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Length Tolerance</span>
                        <span className="product-tech-specs__info-value">0 to +60 mm</span>
                    </div>
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Mass Tolerance</span>
                        <span className="product-tech-specs__info-value">±6%</span>
                    </div>
                    <div className="product-tech-specs__info-item">
                        <span className="product-tech-specs__info-label">Grade Code</span>
                        <span className="product-tech-specs__info-value">4 (Grade 420)</span>
                    </div>
                </div>
                <div className="product-tech-specs__note">
                    <strong>Note:</strong> All rebars are hot-rolled and embossed with the company logo ("US"), bar size, grade code, ductility class, and manufacturing process code at specified intervals. Weldable bars bear the "W" marking. Grade 420W produced via Quenching &amp; Tempering will bear the "T" mark; those produced with micro alloys bear the "MA" mark.
                </div>
            </div>
        </div>
    </section>
);

// Applications Section
const Applications = () => (
    <section className="product-applications">
        <div className="product-applications__container">
            <div className="product-applications__header">
                <span className="section-label">Ideal For</span>
                <h2 className="product-applications__title">Common Applications</h2>
            </div>
            <div className="product-applications__grid">
                {product.applications.map((app, i) => (
                    <div key={i} className="product-applications__item">
                        <span className="product-applications__icon">✓</span>
                        <span>{app}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// CTA
const CTA = () => (
    <section className="products-cta">
        <div className="products-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6458.webp)' }} />
        <div className="products-cta__overlay" />
        <div className="products-cta__container">
            <h2 className="products-cta__title">Need a Custom Quote?</h2>
            <p className="products-cta__text">
                Contact our sales team for bulk orders, custom lengths, and special requirements.
            </p>
            <div className="products-cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Sales</Link>
                <Link to="/products/grade-40" className="btn btn--outline-light">View Grade 40 →</Link>
            </div>
        </div>
    </section>
);

const Grade60 = () => (
    <div className="page">
        <Header />
        <main>
            <PageHero />
            <ProductDetail />
            <TechnicalSpecs />
            <Applications />
            <CTA />
        </main>
        <Footer />
    </div>
);

export default Grade60;
