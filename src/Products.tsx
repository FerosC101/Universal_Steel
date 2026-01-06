import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './Products.css';

const ArrowRight = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const X = ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

interface SizePrice {
    size: string;
    price: string;
    weight: string;
    lengths: {
        '6.0M': string;
        '7.5M': string;
        '9.0M': string;
        '10.5M': string;
        '12.0M': string;
    };
}

interface Product {
    id: number;
    name: string;
    image: string;
    priceRange: string;
    description: string;
    sizes: SizePrice[];
}

const products: Product[] = [
    {
        id: 1,
        name: "Grade 40 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753545927/Grade_40_1_epdri0.jpg",
        priceRange: "₱21.80 - ₱22.00/KG",
        description: "Premium Grade 40 reinforcing steel bars manufactured to international standards. Perfect for residential and light commercial construction projects requiring reliable structural reinforcement.",
        sizes: [
            { size: "10mm", price: "₱22.00", weight: "0.617", lengths: { '6.0M': '81.44', '7.5M': '101.81', '9.0M': '122.17', '10.5M': '142.53', '12.0M': '162.89' }},
            { size: "12mm", price: "₱22.00", weight: "0.888", lengths: { '6.0M': '117.22', '7.5M': '146.52', '9.0M': '175.82', '10.5M': '205.13', '12.0M': '234.43' }},
            { size: "16mm", price: "₱21.80", weight: "1.578", lengths: { '6.0M': '206.40', '7.5M': '258.00', '9.0M': '309.60', '10.5M': '361.20', '12.0M': '412.80' }},
            { size: "20mm", price: "₱21.80", weight: "2.466", lengths: { '6.0M': '322.55', '7.5M': '403.19', '9.0M': '483.83', '10.5M': '564.47', '12.0M': '645.11' }},
            { size: "25mm", price: "₱21.80", weight: "3.853", lengths: { '6.0M': '503.97', '7.5M': '629.97', '9.0M': '755.96', '10.5M': '881.95', '12.0M': '1007.94' }},
            { size: "28mm", price: "₱21.80", weight: "4.834", lengths: { '6.0M': '632.29', '7.5M': '790.36', '9.0M': '948.43', '10.5M': '1106.50', '12.0M': '1264.57' }},
            { size: "32mm", price: "₱22.00", weight: "6.313", lengths: { '6.0M': '833.32', '7.5M': '1041.65', '9.0M': '1249.97', '10.5M': '1458.30', '12.0M': '1666.63' }},
            { size: "36mm", price: "₱22.00", weight: "7.99", lengths: { '6.0M': '1054.68', '7.5M': '1318.35', '9.0M': '1582.02', '10.5M': '1845.69', '12.0M': '2109.36' }}
        ]
    },
    {
        id: 2,
        name: "Grade 60 Rebars",
        image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753799328/Grade_60_7_l46gsy.jpg",
        priceRange: "₱22.50 - ₱22.70/KG",
        description: "High-strength Grade 60 reinforcing steel bars engineered for demanding construction applications. Ideal for commercial buildings, bridges, and heavy-duty infrastructure projects.",
        sizes: [
            { size: "10mm", price: "₱22.70", weight: "0.617", lengths: { '6.0M': '84.04', '7.5M': '105.04', '9.0M': '126.05', '10.5M': '147.06', '12.0M': '168.07' }},
            { size: "12mm", price: "₱22.70", weight: "0.888", lengths: { '6.0M': '120.95', '7.5M': '151.18', '9.0M': '181.42', '10.5M': '211.65', '12.0M': '241.89' }},
            { size: "16mm", price: "₱22.50", weight: "1.578", lengths: { '6.0M': '213.03', '7.5M': '266.29', '9.0M': '319.55', '10.5M': '372.80', '12.0M': '426.06' }},
            { size: "20mm", price: "₱22.50", weight: "2.466", lengths: { '6.0M': '332.91', '7.5M': '416.14', '9.0M': '499.37', '10.5M': '582.59', '12.0M': '665.82' }},
            { size: "25mm", price: "₱22.50", weight: "3.853", lengths: { '6.0M': '520.16', '7.5M': '650.19', '9.0M': '780.23', '10.5M': '910.27', '12.0M': '1040.31' }},
            { size: "28mm", price: "₱22.50", weight: "4.834", lengths: { '6.0M': '652.59', '7.5M': '815.74', '9.0M': '978.89', '10.5M': '1142.03', '12.0M': '1305.18' }},
            { size: "32mm", price: "₱22.70", weight: "6.313", lengths: { '6.0M': '859.83', '7.5M': '1074.79', '9.0M': '1289.75', '10.5M': '1504.70', '12.0M': '1719.66' }},
            { size: "36mm", price: "₱22.70", weight: "7.99", lengths: { '6.0M': '1088.24', '7.5M': '1360.30', '9.0M': '1632.36', '10.5M': '1904.42', '12.0M': '2176.48' }}
        ]
    }
];

const Products = () => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    return (
        <div className="products-page">
            <Header />
            
            {/* Hero Section */}
            <section className="products-hero">
                <div className="hero-overlay-products">
                    <h1>Our Products</h1>
                    <p>Providing Superior Quality Rebars for Every Construction Need</p>
                </div>
            </section>

            {/* Products Grid */}
            <section className="section-simple">
                <div className="container-simple">
                    <div className="products-grid-main">
                        {products.map((product) => (
                            <div key={product.id} className="product-card-main">
                                <div className="product-image-wrapper">
                                    <img src={product.image} alt={product.name} />
                                </div>
                                <div className="product-details">
                                    <h2>{product.name}</h2>
                                    <p className="price-tag">{product.priceRange}</p>
                                    <p className="product-description">{product.description}</p>
                                    <button 
                                        className="btn-view-details"
                                        onClick={() => setSelectedProduct(product)}
                                    >
                                        View Pricing Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="full-list-cta">
                        <button
                            className="btn-full-list"
                            onClick={() => window.open("https://drive.google.com/file/d/1KmRxQPS3W630KvdKM4bNdMeA4FNBqlFS/view?usp=drive_link", "_blank")}
                        >
                            View Full Product List <ArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Quality Testing Section */}
            <section className="section-simple quality-testing">
                <div className="container-simple">
                    <h2>Optical Emission Spectrometer</h2>
                    <p className="section-subtitle">Advanced technology for uncompromised material analysis and quality assurance</p>
                    
                    <div className="testing-content">
                        <div className="testing-image">
                            <img 
                                src="https://res.cloudinary.com/drrzinr9v/image/upload/v1755264913/viber_image_2025-08-15_14-35-30-423_douzo9.jpg" 
                                alt="Optical Emission Spectrometer"
                            />
                        </div>
                        <div className="testing-info">
                            <div className="feature-item">
                                <h4>Spark Excitation Analysis</h4>
                                <p>Energy from electrode sparks excites specimen atoms, producing precise electromagnetic spectral patterns</p>
                            </div>
                            <div className="feature-item">
                                <h4>Quantitative Analysis</h4>
                                <p>Measures spectral peak intensity for accurate qualitative and quantitative metal composition analysis</p>
                            </div>
                            <div className="feature-item">
                                <h4>Quality Enhancement</h4>
                                <p>Enables effective raw material management and production efficiency optimization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners Section */}
            <section className="section-simple partners-section">
                <div className="container-simple">
                    <h2>Our Partners</h2>
                    <div className="partners-grid">
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362856/partner1_dita9v.png" alt="Bendotti" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362870/partner2_qqt38f.png" alt="CMC" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362876/partner3_ygi4en.png" alt="Steel Work" />
                        </div>
                        <div className="partner-logo">
                            <img src="https://res.cloudinary.com/drrzinr9v/image/upload/v1753362882/partner4_qiimgs.png" alt="Atlas Steel" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Modal */}
            {selectedProduct && (
                <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setSelectedProduct(null)}>
                            <X className="icon" />
                        </button>
                        
                        <div className="modal-header">
                            <img src={selectedProduct.image} alt={selectedProduct.name} />
                            <div>
                                <h2>{selectedProduct.name}</h2>
                                <p className="modal-price">{selectedProduct.priceRange}</p>
                            </div>
                        </div>

                        <div className="pricing-table-wrapper">
                            <h3>Pricing Information</h3>
                            <div className="table-scroll">
                                <table className="pricing-table">
                                    <thead>
                                        <tr>
                                            <th>Size</th>
                                            <th>Price/KG</th>
                                            <th>Weight KG/M</th>
                                            <th>6.0M</th>
                                            <th>7.5M</th>
                                            <th>9.0M</th>
                                            <th>10.5M</th>
                                            <th>12.0M</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedProduct.sizes.map((size, index) => (
                                            <tr key={index}>
                                                <td>{size.size}</td>
                                                <td>{size.price}</td>
                                                <td>{size.weight}</td>
                                                <td>{size.lengths['6.0M']}</td>
                                                <td>{size.lengths['7.5M']}</td>
                                                <td>{size.lengths['9.0M']}</td>
                                                <td>{size.lengths['10.5M']}</td>
                                                <td>{size.lengths['12.0M']}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default Products;
