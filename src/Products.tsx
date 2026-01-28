import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import './Products.css';

// Product Data
const products = [
    {
        id: 1,
        name: "Grade 40 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg",
        description: "Standard strength deformed bars manufactured to international standards. Ideal for residential and light commercial construction projects.",
        features: [
            "Meets PNS 49:2020 standards",
            "BPS Certified quality",
            "Available in 10mm to 36mm",
            "Standard and custom lengths",
        ],
        sizes: [
            { size: "10mm", weight: "0.617 kg/m", price: "₱22.00/kg" },
            { size: "12mm", weight: "0.888 kg/m", price: "₱22.00/kg" },
            { size: "16mm", weight: "1.578 kg/m", price: "₱21.80/kg" },
            { size: "20mm", weight: "2.466 kg/m", price: "₱21.80/kg" },
            { size: "25mm", weight: "3.853 kg/m", price: "₱21.80/kg" },
            { size: "28mm", weight: "4.834 kg/m", price: "₱21.80/kg" },
            { size: "32mm", weight: "6.313 kg/m", price: "₱22.00/kg" },
            { size: "36mm", weight: "7.990 kg/m", price: "₱22.00/kg" },
        ],
    },
    {
        id: 2,
        name: "Grade 60 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg",
        description: "High-strength deformed bars engineered for demanding applications. Perfect for commercial buildings, bridges, and heavy infrastructure.",
        features: [
            "High tensile strength (420 MPa)",
            "BPS Certified quality",
            "Available in 10mm to 36mm",
            "Optimal for seismic zones",
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
    },
];

// Page Hero
const PageHero = () => (
    <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
            <span className="page-hero__label">Our Products</span>
            <h1 className="page-hero__title">
                Premium Quality Steel Bars
            </h1>
            <p className="page-hero__text">
                We manufacture high-grade deformed bars that meet international standards, 
                tailored to the demanding requirements of modern construction.
            </p>
        </div>
    </section>
);

// Product Detail Component
const ProductDetail = ({ product }: { product: typeof products[0] }) => {
    const [activeTab, setActiveTab] = useState<'specs' | 'pricing'>('specs');

    return (
        <section className="product-detail" id={`product-${product.id}`}>
            <div className="product-detail__container">
                <div className="product-detail__image">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="product-detail__content">
                    <h2 className="product-detail__title">{product.name}</h2>
                    <p className="product-detail__desc">{product.description}</p>
                    
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

// Quality Section
const QualitySection = () => (
    <section className="products-quality">
        <div className="products-quality__container">
            <div className="products-quality__content">
                <span className="section-label">Quality Assurance</span>
                <h2 className="products-quality__title">
                    Certified to the Highest Standards
                </h2>
                <p className="products-quality__text">
                    Every product from USSCI undergoes rigorous testing in our 
                    DPWH-accredited laboratory to ensure compliance with Philippine 
                    and international standards.
                </p>
                <div className="products-quality__badges">
                    <div className="products-quality__badge">
                        <span className="products-quality__badge-icon">✓</span>
                        <div>
                            <strong>BPS Certified</strong>
                            <p>Philippine Standard Quality Mark</p>
                        </div>
                    </div>
                    <div className="products-quality__badge">
                        <span className="products-quality__badge-icon">✓</span>
                        <div>
                            <strong>ISO 9001:2015</strong>
                            <p>TÜV Certified QMS</p>
                        </div>
                    </div>
                    <div className="products-quality__badge">
                        <span className="products-quality__badge-icon">✓</span>
                        <div>
                            <strong>DPWH Accredited</strong>
                            <p>Government Projects Certified</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// Optical Emission Spectrometer Section
const SpectrometerSection = () => (
    <section className="spectrometer">
        <div className="spectrometer__container">
            <div className="spectrometer__header">
                <span className="section-label">Technology</span>
                <h2 className="spectrometer__title">
                    Optical Emission <span>Spectrometer</span>
                </h2>
                <p className="spectrometer__subtitle">
                    Advanced technology for uncompromised material analysis and quality assurance
                </p>
            </div>
            
            <div className="spectrometer__grid">
                <div className="spectrometer__image">
                    <img 
                        src="https://res.cloudinary.com/drrzinr9v/image/upload/v1755264913/viber_image_2025-08-15_14-35-30-423_douzo9.jpg" 
                        alt="Optical Emission Spectrometer"
                    />
                </div>
                <div className="spectrometer__content">
                    <div className="spectrometer__features">
                        <div className="spectrometer__feature">
                            <div className="spectrometer__feature-dot" />
                            <div>
                                <h4>Spark Excitation Analysis</h4>
                                <p>Energy from electrode sparks excites specimen atoms, producing precise electromagnetic spectral patterns</p>
                            </div>
                        </div>
                        <div className="spectrometer__feature">
                            <div className="spectrometer__feature-dot" />
                            <div>
                                <h4>Quantitative Analysis</h4>
                                <p>Measures spectral peak intensity for accurate qualitative and quantitative metal composition analysis</p>
                            </div>
                        </div>
                        <div className="spectrometer__feature">
                            <div className="spectrometer__feature-dot" />
                            <div>
                                <h4>Quality Enhancement</h4>
                                <p>Enables effective raw material management and production efficiency optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="spectrometer__quote">
                <p>
                    In line with our commitment to development and continued pursuit of excellence, our Optical Emission Spectrometer
                    represents another step towards furthering our dedication to quality improvement and production efficiency.
                </p>
            </div>
        </div>
    </section>
);

// Partners Section
const Partners = () => {
    const partners = [
        { name: "Bendotti", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362856/partner1_dita9v.png" },
        { name: "CMC", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362870/partner2_qqt38f.png" },
        { name: "Steel Work", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362876/partner3_ygi4en.png" },
        { name: "Atlas Steel", url: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753362882/partner4_qiimgs.png" },
    ];

    return (
        <section className="partners">
            <div className="partners__container">
                <h2 className="partners__title">Our Partners</h2>
                <div className="partners__grid">
                    {partners.map((partner, i) => (
                        <div key={i} className="partners__item">
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
    <section className="products-cta">
        <div className="products-cta__container">
            <h2 className="products-cta__title">Need a Custom Quote?</h2>
            <p className="products-cta__text">
                Contact our sales team for bulk orders, custom lengths, and special requirements.
            </p>
            <div className="products-cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Sales</Link>
                <Link to="/pricing" className="btn btn--outline">View Full Pricing</Link>
            </div>
        </div>
    </section>
);

// Main Products Component
const Products = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                {products.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
                <Partners />
                <SpectrometerSection />
                <QualitySection />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Products;
