import { useState, useEffect, ReactNode } from 'react';

/**
 * Hook that tracks page loading state.
 * Shows skeleton for a brief moment while content loads.
 */
export const usePageLoading = (delay = 600) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for DOM content + a small buffer for images to start loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoading;
};

/**
 * Wrapper component that shows a skeleton while loading.
 */
export const PageWithSkeleton = ({ 
    skeleton, 
    children,
    delay = 600,
}: { 
    skeleton: ReactNode; 
    children: ReactNode;
    delay?: number;
}) => {
    const isLoading = usePageLoading(delay);

    if (isLoading) {
        return <>{skeleton}</>;
    }

    return <div className="page-content">{children}</div>;
};
