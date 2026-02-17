import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './BusinessPartners.css';

// Billet Suppliers Data
const billetSuppliers = [
    "ARCELORMITTAL TEMIRTAU",
    "CARGILL INTL TRADING PTE LTD",
    "DAO FORTUNE (SINGAPORE) PTE. LTD.",
    "DUFERCO ASIA PTE. LTD",
    "HANGZHOU COGENERATION (Hong Kong) CO LTD",
    "ITG RESOURCES (SINGAPORE) PTE. LTD.",
    "JONAN STEEL",
    "LA-TOUN STEEL & IRON WORKS",
    "MACSTEEL INTL FAR EAST LIMITED",
    "MARUBENI-ITOCHU STEEL PTE LTD",
    "METAL ONE CORPORATION",
    "NEW HERCULES-AGRO INDUSTRIAL CORP",
    "NLMK/NOVEX",
    "ONE SOLUTION TRADING CO DMCC",
    "POINTER INVESTMENT (HK) LTD",
    "POSCO DAEWOO CORPORATION",
    "SAMSUNG C&T CORP",
    "SHARPMAX INTERNATIONAL (HONGKONG) CO., LIMITED",
    "SHENGLI VIETNAM SPECIAL STEEL CO. LTD",
    "SMART TIMING STEEL LIMITED",
    "STEEL ALLIANCE INC",
    "TATA INTERNATIONAL",
    "TERMITAU TRADING DMCC",
    "VAS GROUP NGHI SON JOINT STOCK COMPANY",
    "WANGS CO INC",
    "XIAMEN C&D/ CHEONGFULI",
    "ZHEJIANG MATERIALS INDUSTRY INTL CO., LTD. (ZMI)",
];

// Local Suppliers Data
const localSuppliers = [
    "Megapower Ind'l Mill Supply",
    "SL Harbor Bulk Terminal Corp.",
    "Atlas Copco Phils Inc",
    "Newton Commercial",
    "Steel World",
    "Caloocan Gas",
    "Tricum Corp",
    "Bearing Center",
    "First Luminance Philtrade",
    "He-Max Ind'l Corp.",
    "JC Electrofields",
    "XCREY Power Engineering & Electrical Supply",
    "Standpri Testing Center",
    "Air-Rich Ind'l Systems Inc.",
    "Unimax Steel Resources",
    "Yale Hardware Corp.",
    "GBIC Enterprises",
    "Gotesco Marketing Inc.",
    "Liang Chi Industry Phils Inc.",
    "Ecoshift Corp",
    "Coban Kiat Hardware Inc",
    "Buffalo Steel Corp.",
    "Remal Enterprises",
    "Heng Cchong Enterprises Inc",
    "Linton Commercial",
    "Shell Philippines",
    "Petron Corporation",
    "MPower",
];

// Imported Parts Data
const importedParts = [
    "Ever Green Engineering",
    "GIVI Services SRLS",
    "DAIS Electronica SRL",
    "Penglai Cemented Carbide Company Limited (PCC)",
    "Danieli Automation SPA",
    "Taiwan Hoist & Crane Co Ltd",
    "SINOPAC | ROLLS (under Sino Pacific Paramount Limited)",
];

// Page Hero
const PageHero = () => (
    <section className="bp-hero">
        <div className="bp-hero__overlay" />
        <div className="bp-hero__content">
            <span className="bp-hero__label">Our Network</span>
            <h1 className="bp-hero__title">Business Partners</h1>
            <p className="bp-hero__text">
                Trusted partnerships with leading suppliers across the globe
            </p>
        </div>
    </section>
);

// Supplier List Section
const SupplierSection = ({ title, label, suppliers, variant }: {
    title: string;
    label: string;
    suppliers: string[];
    variant?: 'default' | 'accent' | 'dark';
}) => (
    <section className={`bp-section bp-section--${variant || 'default'}`}>
        <div className="bp-section__container">
            <div className="bp-section__header">
                <span className="section-label">{label}</span>
                <h2 className="bp-section__title">{title}</h2>
            </div>
            <div className="bp-section__grid">
                {suppliers.map((supplier, i) => (
                    <div key={i} className={`bp-card bp-card--${variant || 'default'}`}>
                        <span className="bp-card__number">{i + 1}</span>
                        <span className="bp-card__name">{supplier}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// CTA
const CTA = () => (
    <section className="bp-cta">
        <div className="bp-cta__bg" style={{ backgroundImage: 'url(/images/facility/Unisteel%20Final%20Photos/5E8A6462.webp)' }} />
        <div className="bp-cta__overlay" />
        <div className="bp-cta__container">
            <h2 className="bp-cta__title">Interested in Partnering With Us?</h2>
            <p className="bp-cta__text">
                Reach out to explore how we can work together to build a stronger future.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
        </div>
    </section>
);

// Main Component
const BusinessPartners = () => (
    <div className="page">
        <Header />
        <main>
            <PageHero />
            <SupplierSection
                label="International Sourcing"
                title="Billet Suppliers"
                suppliers={billetSuppliers}
                variant="default"
            />
            <SupplierSection
                label="Parts & Service"
                title="Local Suppliers"
                suppliers={localSuppliers}
                variant="accent"
            />
            <SupplierSection
                label="Global Equipment"
                title="Imported Parts"
                suppliers={importedParts}
                variant="dark"
            />
            <CTA />
        </main>
        <Footer />
    </div>
);

export default BusinessPartners;
