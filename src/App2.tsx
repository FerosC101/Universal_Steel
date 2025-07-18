
import React, { useState, useEffect } from 'react';
import './App2.css';

type IconProps = {
    className?: string;
    onclick?: () => void;
};

// Custom Icon Components
const ChevronDown = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const Menu = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

const X = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// const Play = ({ className, onclick }: IconProps) => (
//     <svg className={className} fill="currentColor" viewBox="0 0 24 24" onClick={onclick}>
//         <path d="M8 5v14l11-7z" />
//     </svg>
// );

const ArrowRight = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const Phone = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const Mail = ({ className }: IconProps) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const closeMenu = () => setIsMenuOpen(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                closeMenu();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header-container">
                <div className="header-content">
                    {/* Logo */}
                    <div className="logo-container">
                        <div className="logo-icon">U</div>
                        <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="nav-desktop">
                        <a href="#">Home</a>
                        <button>
                            About Us <ChevronDown className="icon-sm" />
                        </button>
                        <button>
                            Products <ChevronDown className="icon-sm" />
                        </button>
                        <button>
                            Contact Us <ChevronDown className="icon-sm" />
                        </button>
                    </nav>

                    {/* Mobile menu button */}
                    <button className="menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
                        {isMenuOpen ? <X className="icon" /> : <Menu className="icon" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="mobile-menu">
                        <div className="mobile-menu-content">
                            <a href="#" onClick={closeMenu}>Home</a>
                            <a href="#" onClick={closeMenu}>About Us</a>
                            <a href="#" onClick={closeMenu}>Products</a>
                            <a href="#" onClick={closeMenu}>Contact Us</a>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-grid">
                    {/* Company Info */}
                    <div>
                        <div className="footer-company">
                            <div className="logo-icon">U</div>
                            <span className="logo-text">UNIVERSAL STEEL SMELTING CO INC</span>
                        </div>
                        <p className="footer-address">26 Quirino Highway Balon Bato, Quezon City</p>
                        <div className="social-links">
                            <a href="#" className="social-link facebook">f</a>
                            <a href="#" className="social-link linkedin">in</a>
                            <a href="#" className="social-link email">@</a>
                        </div>
                    </div>

                    {/* About */}
                    <div className="footer-section">
                        <h3>ABOUT</h3>
                        <ul>
                            <li><a href="#">Company History</a></li>
                            <li><a href="#">Vision, Mission, & Values</a></li>
                            <li><a href="#">Factory Modernization</a></li>
                            <li><a href="#">Certifications</a></li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="footer-section">
                        <h3>PRODUCTS</h3>
                        <ul>
                            <li><a href="#">Process</a></li>
                            <li><a href="#">Quality Assurance</a></li>
                            <li><a href="#">Partners</a></li>
                            <li><a href="#">Accreditation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h3>CONTACT</h3>
                        <div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8363-2051</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8363-7081 to 82</span>
                            </div>
                            <div className="contact-item">
                                <Phone className="icon-sm" />
                                <span>(02) 8361-1247</span>
                            </div>
                            <div className="contact-item">
                                <Mail className="icon-sm" />
                                <span>office@universalsteelph.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright @2025 | All rights reserved</p>
                </div>
            </div>
        </footer>
    );
};

const TopBanner = () => {
    const products = [
        { id: 1, name: "Grade 40 Rebars", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" },
        { id: 2, name: "Grade 60 Rebars", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" },
        { id: 3, name: "Wire Rods", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" },
        { id: 4, name: "Billets", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" },
        { id: 5, name: "Billets", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" },
        { id: 6, name: "Billets", image: "https://www.navvis.com/hubfs/navvis-factory-tour-header.jpg" }
    ];
    return (
        <div className="top-banner">
            <h1>Products</h1>
            <div className="banner-card-cont">
                {products.map(product => (
                    <BannerCard key={product.id} name={product.name} image={product.image} />
                ))}
            </div>
            <div className='full-width-flex'>
                <button className='product-button'>VIEW FULL PRODUCT LIST <ArrowRight className='icon-sm' /></button>
            </div>
        </div>
    )
}

const BannerCard = ({ name, image }: { name: string, image: string }) => {
    return (
        <div className='banner-card'>
            <img src={image} alt="" />
            <h2>{name}</h2>
        </div>
    )
}

const Partners = () => {
    const logos = [
        {
            name: "Meta",
            url: "https://img.favpng.com/9/18/23/grayscale-news-brand-service-png-favpng-DQqNdXrqAq2U3255MbfPRFZt1.jpg"
        },
        {
            name: "Mini",
            url: "https://png.pngtree.com/template/20201027/ourmid/pngtree-abstract-gray-logo-design-template-image_429149.jpg"
        },
        {
            name: "Wikimedia",
            url: "https://cdn.logojoy.com/wp-content/uploads/2018/08/23162119/wordpress-logo-1024x553.png"
        }
    ];

    return (
        <div className="partners-cont">
            <h2>Our Partners</h2>
            {logos.map((logo, index) => (
                <PartnersCard key={index} name={logo.name} url={logo.url} />
            ))}
        </div>
    )
}

const PartnersCard = ({ name, url }: { name: string, url: string }) => {
    return (
        <div className='partners-card'>
            <img src={url} alt={name} />
        </div>
    )
}

const MainBody = () => {
    return (
        <div className="main-body">
            <div className="card-row">
                <div className="card card-left">
                    <p>lorem50Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi inventore voluptatibus modi totam deleniti reprehenderit eveniet exercitationem reiciendis repudiandae, voluptatem recusandae aliquam porro pariatur temporibus error illo quo ex veniam laborum magni. Reprehenderit, ducimus veniam! Maxime, repudiandae. Quia consectetur natus nisi odio perspiciatis. Fugit temporibus aliquam ipsum ab reprehenderit? Eos quo ipsum quia fuga? Laborum voluptatibus aspernatur fugit sequi voluptatem, amet voluptas ab illum dolor in officiis quae vero quam hic animi at aperiam ex, consectetur harum, provident et! Odio consequatur est, quidem sunt soluta dicta, eveniet rerum inventore obcaecati veniam facere perferendis illo. Maiores praesentium vero ut necessitatibus facere laboriosam, officia esse dicta excepturi doloremque quis nesciunt consequuntur exercitationem quam laudantium quos totam incidunt omnis voluptate iste molestias reiciendis! Quod nulla obcaecati, sit dolorum ex voluptates quidem doloremque? Debitis placeat atque sint quo, saepe ducimus veritatis facilis qui inventore reprehenderit voluptatibus dolor nesciunt tempora nihil odio autem libero? Est incidunt voluptatem earum facere sapiente, tempora odio possimus maiores soluta numquam vitae magni rerum velit non deleniti adipisci! Voluptates alias distinctio esse aperiam neque. Ipsum, iusto? Numquam ab laborum minus quidem repudiandae quam suscipit dolorum mollitia! Illo incidunt ipsa eius necessitatibus, sint laudantium impedit tenetur quasi praesentium placeat cupiditate exercitationem?</p>
                </div>
                <div className="card card-middle">Middle</div>
                <div className="card card-right">Right</div>
            </div>
        </div>
    )
}

const FinishedProjects = () => {
    return (
        <div className="finished-products">
            <h1>Finished Projects</h1>
        </div>
    )
}

const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main>
                <TopBanner />
                <Partners />
                <MainBody />
                <FinishedProjects />
            </main>
            <Footer />
        </div>
    );
};

const TopBar = () => {
    return (
        <div className="topbar">
        </div>
    );
};
export default App;