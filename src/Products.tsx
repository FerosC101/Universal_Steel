import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import { PageWithSkeleton } from './hooks/usePageLoading';
import { ProductsPageSkeleton } from './components/Skeleton';
import './Products.css';

// Product Data
const products = [
    {
        id: 1,
        name: "Grade 40 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753545927/Grade_40_1_epdri0.jpg",
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
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/f_auto,q_auto,w_600/v1753799328/Grade_60_7_l46gsy.jpg",
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
    <section className="products-page-hero">
        <div className="products-page-hero__overlay" />
        <div className="products-page-hero__content">
            <span className="products-page-hero__label">Our Products</span>
            <h1 className="products-page-hero__title">
                Premium Quality Steel Bars
            </h1>
            <p className="products-page-hero__text">
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
                    <img src={product.image} alt={product.name} loading="lazy" />
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

// CTA Section
const CTA = () => (
    <section className="products-cta">
        <div className="products-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6458.webp)' }}></div>
        <div className="products-cta__overlay"></div>
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
        <PageWithSkeleton skeleton={<ProductsPageSkeleton />}>
            <div className="page">
                <Header />
                <main>
                    <PageHero />
                <div className="announcement-banner">
                    <div className="announcement-banner__container">
                        <span className="announcement-banner__badge">Coming Soon</span>
                        <div className="announcement-banner__body">
                            <h3 className="announcement-banner__title">Grade 75 & Grade 80 Rebars</h3>
                            <p className="announcement-banner__text">
                                Higher-strength reinforcing bars for seismic zones and high-rise construction.
                            </p>
                        </div>
                        <Link to="/contact" className="announcement-banner__link">Get Notified →</Link>
                    </div>
                </div>
                {products.map((product) => (
                    <ProductDetail key={product.id} product={product} />
                ))}
                <QualitySection />
                <CTA />
                </main>
                <Footer />
            </div>
        </PageWithSkeleton>
    );
};

export default Products;
