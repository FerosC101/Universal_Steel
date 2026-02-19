import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Pricing.css';

// Page Hero
const PageHero = () => (
    <section className="page-hero">
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
            <span className="page-hero__label">Product Pricing</span>
            <h1 className="page-hero__title">Reference Rebar Pricing</h1>
            <p className="page-hero__text">
                Transparent pricing for our premium quality reinforcing steel bars
            </p>
        </div>
    </section>
);

// Pricing Table
const PricingTable = () => {
    const [activeTab, setActiveTab] = useState<'grade40' | 'grade60'>('grade40');

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

    const currentData = activeTab === 'grade40' ? grade40Data : grade60Data;

    return (
        <section className="pricing-table-section">
            <div className="pricing-table-section__container">
                {/* Tabs */}
                <div className="pricing-tabs">
                    <button
                        className={`pricing-tab ${activeTab === 'grade40' ? 'pricing-tab--active' : ''}`}
                        onClick={() => setActiveTab('grade40')}
                    >
                        <span className="pricing-tab__title">Grade 40</span>
                        <span className="pricing-tab__price">₱21.80 – ₱22.00/kg</span>
                    </button>
                    <button
                        className={`pricing-tab ${activeTab === 'grade60' ? 'pricing-tab--active' : ''}`}
                        onClick={() => setActiveTab('grade60')}
                    >
                        <span className="pricing-tab__title">Grade 60</span>
                        <span className="pricing-tab__price">₱22.50 – ₱22.70/kg</span>
                    </button>
                </div>

                {/* Table */}
                <div className="pricing-table-wrapper">
                    <table className="pricing-table">
                        <thead>
                            <tr>
                                <th>Size</th>
                                <th>Price/kg</th>
                                <th>Weight (kg/m)</th>
                                <th>6.0M</th>
                                <th>7.5M</th>
                                <th>9.0M</th>
                                <th>10.5M</th>
                                <th>12.0M</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((row, i) => (
                                <tr key={i}>
                                    <td className="pricing-table__size">{row.size}</td>
                                    <td className="pricing-table__price">₱{row.price.toFixed(2)}</td>
                                    <td>{row.weight}</td>
                                    <td>₱{row['6.0M'].toFixed(2)}</td>
                                    <td>₱{row['7.5M'].toFixed(2)}</td>
                                    <td>₱{row['9.0M'].toFixed(2)}</td>
                                    <td>₱{row['10.5M'].toFixed(2)}</td>
                                    <td>₱{row['12.0M'].toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="pricing-note">
                    * Table above are reference base prices only.
                </p>
            </div>
        </section>
    );
};

// CTA
const CTA = () => (
    <section className="pricing-cta">
        <div className="pricing-cta__container">
            <h2 className="pricing-cta__title">Need a Custom Quote?</h2>
            <p className="pricing-cta__text">
                Contact our sales team for bulk orders and special requirements.
            </p>
            <div className="pricing-cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Sales</Link>
                <Link to="/products" className="btn btn--outline">View Products</Link>
            </div>
        </div>
    </section>
);

// Main Component
const Pricing = () => {
    return (
        <div className="page">
            <Header />
            <main>
                <PageHero />
                <PricingTable />
                <CTA />
            </main>
            <Footer />
        </div>
    );
};

export default Pricing;
