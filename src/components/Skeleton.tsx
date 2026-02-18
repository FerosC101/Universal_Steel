import './Skeleton.css';

// Base skeleton block
export const Skeleton = ({ 
    width, 
    height, 
    className = '',
    style = {}
}: { 
    width?: string; 
    height?: string; 
    className?: string;
    style?: React.CSSProperties;
}) => (
    <div 
        className={`skeleton ${className}`} 
        style={{ width, height, ...style }} 
    />
);

// Home page skeleton
export const HomePageSkeleton = () => (
    <div className="page-skeleton">
        {/* Hero */}
        <div className="skeleton-hero">
            <div className="skeleton skeleton--dark skeleton-hero__label" />
            <div className="skeleton skeleton--dark skeleton-hero__title" />
            <div className="skeleton skeleton--dark skeleton-hero__text" />
            <div className="skeleton skeleton--dark skeleton-hero__text" style={{ width: '300px' }} />
            <div className="skeleton-hero__milestones">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton skeleton--dark skeleton-hero__milestone" />
                ))}
            </div>
        </div>

        {/* Partners */}
        <div style={{ padding: '2rem', display: 'flex', justifyContent: 'center', gap: '3rem' }}>
            {[...Array(5)].map((_, i) => (
                <Skeleton key={i} width="120px" height="40px" />
            ))}
        </div>

        {/* About section */}
        <div className="skeleton-section">
            <div className="skeleton-two-col">
                <div className="skeleton skeleton-two-col__image" />
                <div className="skeleton-two-col__content">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="skeleton skeleton-two-col__line" />
                    ))}
                </div>
            </div>
        </div>

        {/* Parallax */}
        <div className="skeleton skeleton-parallax" />

        {/* Products */}
        <div className="skeleton-section--gray">
            <div className="skeleton-section__inner">
                <div className="skeleton-section__header">
                    <div className="skeleton skeleton-section__label" />
                    <div className="skeleton skeleton-section__title" />
                </div>
                <div className="skeleton-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="skeleton-card">
                            <div className="skeleton skeleton-card__image" />
                            <div className="skeleton-card__body">
                                <div className="skeleton skeleton-card__title" />
                                <div className="skeleton skeleton-card__text" />
                                <div className="skeleton skeleton-card__text--short skeleton" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

// About page skeleton
export const AboutPageSkeleton = () => (
    <div className="page-skeleton">
        {/* Hero */}
        <div className="skeleton-hero">
            <div className="skeleton skeleton--dark skeleton-hero__label" />
            <div className="skeleton skeleton--dark skeleton-hero__title" />
            <div className="skeleton skeleton--dark skeleton-hero__text" />
            <div className="skeleton-hero__milestones">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton skeleton--dark skeleton-hero__milestone" />
                ))}
            </div>
        </div>

        {/* Overview */}
        <div className="skeleton-section">
            <div className="skeleton-section__header">
                <div className="skeleton skeleton-section__label" />
                <div className="skeleton skeleton-section__title" />
            </div>
            <div className="skeleton-two-col">
                <div className="skeleton skeleton-two-col__image" />
                <div className="skeleton-two-col__content">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="skeleton skeleton-two-col__line" />
                    ))}
                </div>
            </div>
        </div>

        {/* Stats */}
        <div className="skeleton-stats">
            <div className="skeleton-stats__grid">
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="skeleton-stats__item">
                        <div className="skeleton skeleton--dark skeleton-stats__value" />
                        <div className="skeleton skeleton--dark skeleton-stats__label" />
                    </div>
                ))}
            </div>
        </div>

        {/* Facility */}
        <div className="skeleton-section--gray">
            <div className="skeleton-section__inner">
                <div className="skeleton-section__header">
                    <div className="skeleton skeleton-section__label" />
                    <div className="skeleton skeleton-section__title" />
                </div>
                <Skeleton width="100%" height="400px" className="" style={{ borderRadius: '8px' }} />
            </div>
        </div>
    </div>
);

// Products page skeleton
export const ProductsPageSkeleton = () => (
    <div className="page-skeleton">
        <div className="skeleton-hero">
            <div className="skeleton skeleton--dark skeleton-hero__label" />
            <div className="skeleton skeleton--dark skeleton-hero__title" />
            <div className="skeleton skeleton--dark skeleton-hero__text" />
        </div>

        <div className="skeleton-section">
            <div className="skeleton-section__header">
                <div className="skeleton skeleton-section__label" />
                <div className="skeleton skeleton-section__title" />
                <div className="skeleton skeleton-section__subtitle" />
            </div>
            <div className="skeleton-cards" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                {[...Array(2)].map((_, i) => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton skeleton-card__image" style={{ height: '250px' }} />
                        <div className="skeleton-card__body">
                            <div className="skeleton skeleton-card__title" />
                            <div className="skeleton skeleton-card__text" />
                            <div className="skeleton skeleton-card__text" />
                            <div className="skeleton skeleton-card__text--short skeleton" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Generic page skeleton (for Contact, Certifications, etc.)
export const GenericPageSkeleton = () => (
    <div className="page-skeleton">
        <div className="skeleton-hero">
            <div className="skeleton skeleton--dark skeleton-hero__label" />
            <div className="skeleton skeleton--dark skeleton-hero__title" />
            <div className="skeleton skeleton--dark skeleton-hero__text" />
        </div>

        <div className="skeleton-section">
            <div className="skeleton-section__header">
                <div className="skeleton skeleton-section__label" />
                <div className="skeleton skeleton-section__title" />
            </div>
            <div className="skeleton-cards">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="skeleton-card">
                        <div className="skeleton skeleton-card__image" />
                        <div className="skeleton-card__body">
                            <div className="skeleton skeleton-card__title" />
                            <div className="skeleton skeleton-card__text" />
                            <div className="skeleton skeleton-card__text--short skeleton" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

// Gallery skeleton
export const GalleryPageSkeleton = () => (
    <div className="page-skeleton">
        <div className="skeleton-hero">
            <div className="skeleton skeleton--dark skeleton-hero__label" />
            <div className="skeleton skeleton--dark skeleton-hero__title" />
            <div className="skeleton skeleton--dark skeleton-hero__text" />
        </div>

        <div className="skeleton-section">
            <div className="skeleton-section__header">
                <div className="skeleton skeleton-section__label" />
                <div className="skeleton skeleton-section__title" />
            </div>
            <div style={{ columns: 4, columnGap: '1rem' }}>
                {[...Array(12)].map((_, i) => (
                    <Skeleton 
                        key={i} 
                        width="100%" 
                        height={`${180 + (i % 3) * 60}px`} 
                        style={{ marginBottom: '1rem', borderRadius: '6px' }} 
                    />
                ))}
            </div>
        </div>
    </div>
);
