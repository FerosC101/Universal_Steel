import { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './PdfModal.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

interface PdfModalProps {
    onClose: () => void;
}

const PdfModal = ({ onClose }: PdfModalProps) => {
    const [numPages, setNumPages] = useState<number>(0);
    const [containerWidth, setContainerWidth] = useState<number>(800);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKey);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleKey);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    useEffect(() => {
        const updateWidth = () => {
            const w = Math.min(window.innerWidth - 32, 860);
            setContainerWidth(w);
        };
        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className="pdf-modal" onClick={onClose}>
            <div className="pdf-modal__content" onClick={(e) => e.stopPropagation()}>
                <div className="pdf-modal__header">
                    <span className="pdf-modal__title">USSCI Product Specifications</span>
                    <button className="pdf-modal__close" onClick={onClose}>✕</button>
                </div>
                <div className="pdf-modal__body">
                    <Document
                        file="/USSCI-Product-Specifications.pdf"
                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                        loading={
                            <div className="pdf-modal__loading">Loading…</div>
                        }
                    >
                        {Array.from({ length: numPages }, (_, i) => (
                            <Page
                                key={i + 1}
                                pageNumber={i + 1}
                                width={containerWidth}
                                renderTextLayer={false}
                                renderAnnotationLayer={false}
                            />
                        ))}
                    </Document>
                </div>
            </div>
        </div>
    );
};

export default PdfModal;
