import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './FacilityGallery.css';

// All facility images
const facilityImages = [
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6053.jpg', name: 'Facility View 1' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6094.jpg', name: 'Facility View 2' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6112.jpg', name: 'Facility View 3' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6136.jpg', name: 'Facility View 4' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6148.jpg', name: 'Facility View 5' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6150.jpg', name: 'Facility View 6' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6161.jpg', name: 'Facility View 7' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6172.jpg', name: 'Facility View 8' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6180.jpg', name: 'Facility View 9' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6205.jpg', name: 'Facility View 10' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6216.jpg', name: 'Facility View 11' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6238.jpg', name: 'Facility View 12' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6243.jpg', name: 'Facility View 13' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6269.jpg', name: 'Facility View 14' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6281.jpg', name: 'Facility View 15' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6291.jpg', name: 'Facility View 16' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6297.jpg', name: 'Facility View 17' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6325.jpg', name: 'Facility View 18' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6332.jpg', name: 'Facility View 19' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6351.jpg', name: 'Facility View 20' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6380.jpg', name: 'Facility View 21' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6396.jpg', name: 'Facility View 22' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6397.jpg', name: 'Facility View 23' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6409.jpg', name: 'Facility View 24' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6425.jpg', name: 'Facility View 25' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6436.jpg', name: 'Facility View 26' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6458.jpg', name: 'Facility View 27' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6462.jpg', name: 'Facility View 28' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6466.jpg', name: 'Facility View 29' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6477.jpg', name: 'Facility View 30' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6490.jpg', name: 'Facility View 31' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6491.jpg', name: 'Facility View 32' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6518.jpg', name: 'Facility View 33' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6549.jpg', name: 'Facility View 34' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6556.jpg', name: 'Facility View 35' },
    { src: '/images/facility/Unisteel%20Final%20Photos/5E8A6567.jpg', name: 'Facility View 36' },
];

// Page Hero
const PageHero = () => (
    <section className="facility-gallery-hero">
        <div className="facility-gallery-hero__overlay" />
        <div className="facility-gallery-hero__content">
            <span className="facility-gallery-hero__label">Our Facilities</span>
            <h1 className="facility-gallery-hero__title">Facility Gallery</h1>
            <p className="facility-gallery-hero__text">
                Take a closer look at our state-of-the-art manufacturing plant and equipment
            </p>
        </div>
    </section>
);

// Lightbox Modal
const Lightbox = ({ image, onClose, onPrev, onNext }: {
    image: typeof facilityImages[0];
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}) => (
    <div className="facility-lightbox" onClick={onClose}>
        <div className="facility-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <button className="facility-lightbox__close" onClick={onClose}>✕</button>
            <button className="facility-lightbox__nav facility-lightbox__nav--prev" onClick={onPrev}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <img src={image.src} alt={image.name} />
            <button className="facility-lightbox__nav facility-lightbox__nav--next" onClick={onNext}>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    </div>
);

// Gallery Grid
const GalleryGrid = () => {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrev = () => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev - 1 + facilityImages.length) % facilityImages.length : null
        );
    };

    const handleNext = () => {
        setSelectedIndex((prev) =>
            prev !== null ? (prev + 1) % facilityImages.length : null
        );
    };

    return (
        <>
            <section className="facility-gallery-grid">
                <div className="facility-gallery-grid__container">
                    <div className="facility-gallery-grid__header">
                        <span className="section-label">Photo Gallery</span>
                        <h2 className="facility-gallery-grid__title">Inside Our Manufacturing Plant</h2>
                        <p className="facility-gallery-grid__subtitle">
                            Browse through photos of our facility, equipment, and production lines
                        </p>
                    </div>
                    <div className="facility-gallery-grid__images">
                        {facilityImages.map((image, index) => (
                            <div
                                key={index}
                                className="facility-gallery-card"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img src={image.src} alt={image.name} loading="lazy" />
                                <div className="facility-gallery-card__overlay">
                                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {selectedIndex !== null && (
                <Lightbox
                    image={facilityImages[selectedIndex]}
                    onClose={() => setSelectedIndex(null)}
                    onPrev={handlePrev}
                    onNext={handleNext}
                />
            )}
        </>
    );
};

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

// CTA Section
const CTA = () => (
    <section className="facility-gallery-cta">
        <div className="facility-gallery-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6436.jpg)' }} />
        <div className="facility-gallery-cta__overlay" />
        <div className="facility-gallery-cta__container">
            <h2 className="facility-gallery-cta__title">Want to See Our Facility in Person?</h2>
            <p className="facility-gallery-cta__text">
                Schedule a visit or contact our team to learn more about our manufacturing capabilities.
            </p>
            <div className="facility-gallery-cta__actions">
                <Link to="/contact" className="btn btn--primary">Contact Us</Link>
                <Link to="/about" className="btn btn--outline">Back to About</Link>
            </div>
        </div>
    </section>
);

// Main Component
const FacilityGallery = () => (
    <div className="page">
        <Header />
        <main>
            <PageHero />
            <SpectrometerSection />
            <GalleryGrid />
            <CTA />
        </main>
        <Footer />
    </div>
);

export default FacilityGallery;
