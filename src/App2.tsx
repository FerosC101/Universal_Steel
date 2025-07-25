
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/about" className="nav-link">About Us<ChevronDown className="icon-sm" /></Link>
                        <Link to="/products" className="nav-link">Products<ChevronDown className="icon-sm" /></Link>
                        <Link to="/contact" className="nav-link">Contact Us<ChevronDown className="icon-sm" /></Link>
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
                            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
                            <Link to="/about" className="nav-link" onClick={closeMenu}>About Us</Link>
                            <Link to="/products" className="nav-link" onClick={closeMenu}>Products</Link>
                            <Link to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</Link>
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
const productImage1 = `https://res.cloudinary.com/drrzinr9v/image/upload/productpageRebars_qspo30.jpg?ts=${Date.now()}`;
const productImage2 = `https://res.cloudinary.com/drrzinr9v/image/upload/productpageRebars1_pvivue.jpg?ts=${Date.now()}`;

const TopBanner = () => {
    const projects: ModalProps[] = [
        {
            id: 1,
            name: "Grade 40 Rebars",
            image: productImage1,
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            shortdescp: "",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
        {
            id: 1,
            name: "Grade 60 Rebars",
            image: productImage2,
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            shortdescp: "",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur fuga magni excepturi corporis nihil eveniet, tenetur perspiciatis neque facere fugit distinctio est ipsum voluptas eum ullam delectus explicabo eos quo, ab exercitationem quis ratione. Ipsam voluptas, est quibusdam rerum voluptatibus eos tempore vel perferendis ea optio magni eveniet nulla explicabo obcaecati esse dolores laudantium culpa id ipsa sapiente ratione placeat. Eum repellendus vitae dolore repudiandae, dolores culpa recusandae minima quod illo. Error inventore facere quo a porro nulla ipsum nesciunt eos! Expedita ipsum porro vel, quod ad iste distinctio numquam optio, ipsam quo enim exercitationem nulla aut libero quidem minima ipsa asperiores ea dicta rem accusamus saepe! Tempore officiis neque vero maiores! Possimus fugit, unde quas, ullam provident voluptates ratione eligendi excepturi blanditiis labore nihil aspernatur iure inventore reprehenderit ad facere nam libero quae est quaerat, dolor illum veritatis optio! Vel perferendis obcaecati rerum laudantium ducimus, porro repudiandae dicta eveniet nemo beatae ut expedita repellat quam id cumque! Illum minus dignissimos soluta deserunt assumenda odit voluptas labore et suscipit vitae? Hic nemo eum delectus, excepturi nisi, temporibus accusamus illo modi fugit illum tempora laborum! Ex, praesentium. Reprehenderit ex quaerat quisquam pariatur excepturi, incidunt, omnis quibusdam nulla corporis dolor nihil cumque."
        }
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ModalProps>(projects[0]);
    const openModal = useCallback((details: ModalProps) => {
        setSelectedProduct(details);
        setIsOpen(true);
    }, []);
    return (
        <div className="top-banner">
            <h1>Products</h1>
            <Modal product={selectedProduct} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Carousel items={projects} openModal={openModal}/>
            <div className='full-width-flex'>
                <button className='product-button'>VIEW FULL PRODUCT LIST <ArrowRight className='icon-sm' /></button>
            </div>
        </div>
    )
}

const BannerCard = ({ details, dragged, click }: { details: ModalProps, dragged: boolean, click: (item: ModalProps) => void }) => {
    const handleClick = () => {
        if (!dragged) {
            click(details);
        }
    }
    return (
        <div className='banner-card' onClick={handleClick}>
            <img src={details.image} alt="" />
            <h2>{details.name}</h2>
            <p>{details.shortdescp}</p>
        </div>
    )
}

const Partners = () => {
    const logos = [
        {
            name: "Partner1",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/partner1_dita9v.png"
        },
        {
            name: "Partner2",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/partner2_qqt38f.png"
        },
        {
            name: "Partner3",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/partner3_ygi4en.png"
        },
        {
            name: "Partner4",
            url: "https://res.cloudinary.com/drrzinr9v/image/upload/partner4_qiimgs.png"
        },
        
        
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
                    <div className="card-content">
                        <h2>Optical Emiission Spectrometer</h2>
                        <p>
                            In line with our commitment to development and continued pursuit of excellence, the acquisition of an Optical Emission Spectrometer was another step towards furthering our dedication to improve on our quality and develop efficiency in our production for the benefit of both the company and the end users. In the Optical Emission Spectroscopy, atoms in specimen materials are excited by energy that comes from a spark formed between specimen and electrode. The energy of the spark causes the electrons in the specimen to emit light which is converted into electromagnetic spectral pattern. By measuring the intensity of the peaks in the said spectrum, the analyser can produce qualitative and quantitative metal analysis of material composition with uncompromised accuracy. It is through this analysis that we determine the integrity of the raw materials for use in our production. This allows us to define the most effective way to use the raw materials, through effective segregation and management of raw materials allocation. With an effective system of raw materials management, it enhances production efficiency and further improves on the quality of reinforcing bars for public use.
                        </p>
                    </div>
                </div>
                <div className="card card-middle">
                    <div className="card-content">
                        
                    </div>
                </div>
                <div className="card card-right">
                    <div className="">
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

const FinishedProjects = () => {
    const projects: ModalProps[] = [
        {
            id: 1,
            name: "Project Name",
            shortdescp: "Product Description",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
        {
            id: 1,
            name: "Project Name",
            shortdescp: "Product Description",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
        {
            id: 1,
            name: "Project Name",
            shortdescp: "Product Description",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
        {
            id: 1,
            name: "Project Name",
            shortdescp: "Product Description",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
        {
            id: 1,
            name: "Project Name",
            shortdescp: "Product Description",
            image: "https://res.cloudinary.com/drrzinr9v/image/upload/v1753189317/productpageRebars_qspo30.jpg",
            price: "₱ 1,000.00",
            variety: ["#FF5733", "#33FF57", "#3357FF"],
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididun"
        },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ModalProps>(projects[0]);
    const openModal = useCallback((details: ModalProps) => {
        setSelectedProduct(details);
        setIsOpen(true);
    }, []);
    return (
        <div className="finished-products">
            <Modal product={selectedProduct} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <h1 style={{ marginBottom: '50px' }}>Finished Projects</h1>
            <Carousel items={projects} openModal={openModal} />
        </div>
    )
}

// interface CardProps { id: number, name: string, image: string }

const Carousel = ({ items, openModal }: { items: ModalProps[], openModal: (details: ModalProps) => void }) => {
    const carouselRef = useRef<HTMLDivElement>(null);
    let dragged: boolean = false;
    let dragging: boolean = false;
    let mouseX: number = 0;
    const mouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        // console.log("Mouse Down", e);
        dragged = false;
        dragging = true;
        mouseX = e.pageX - - (carouselRef.current?.offsetLeft ?? 0); // Store the initial mouse position
    }
    const mouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        // console.log("Mouse Up", e);
        dragging = false;
    }
    const bannerClick = (item: ModalProps) => {
        if (!dragged) {
            openModal(item)
        }
    }

    const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (dragging) {
            const x = e.pageX - carouselRef.current!.offsetLeft;
            const walk = (x - mouseX) * 1; // Calculate the distance moved
            dragged = true;
            carouselRef.current!.scrollLeft -= walk; // Scroll the carousel

        }

    }

    return (
        <div className='carousel' ref={carouselRef}
            onMouseDown={mouseDown}
            onMouseUp={mouseUp}
            onMouseMove={mouseMove}

        >
            {items.map(project => (
                <BannerCard details={project} dragged={dragged} click={bannerClick} />
            ))}
        </div>
    )
}

interface ModalProps {
    id: number;
    price: string;
    variety: string[];
    name: string;
    shortdescp: string;
    description: string;
    image: string;
}

const Modal = ({ product, isOpen, setIsOpen }: { product: ModalProps, isOpen: boolean, setIsOpen:(o:boolean) => void }) => {
    return (
        <div className="modal-cont" style={{ display: isOpen ? 'block' : 'none' }}>
            <div className='modal'>
                <svg className='close-button' onClick={() => { setIsOpen(false) }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5"></circle> <path d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
                {/* <img src=''  > */}
                <img src={product.image} alt="" />
                <p className='price'>{product.price}</p>
                <p className='small-text'>Variety</p>
                <div className='variety-cont'>
                    {product.variety.map((variety, index) => (
                        <div key={index} className='variety-item' style={{ backgroundColor: variety }} />
                    ))}
                </div>
                <p className='product-name'>{product.name}</p>
                <p className='small-text'>{product.description}</p>
            </div>
        </div>
    )
}


const App = () => {
    return (
        <div className="app-container gradient-bg">
            <TopBar />
            <Header />
            <main style={{ position: 'relative' }}>
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