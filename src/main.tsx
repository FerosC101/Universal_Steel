import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Home from './Home';
import Products from './Products';
import Contact from './Contact';
import About from './About';
import Certifications from './pages/Certifications';
import Pricing from './pages/Pricing';
import Projects from './pages/Projects';
import FacilityGallery from './pages/FacilityGallery';
import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/facility-gallery" element={<FacilityGallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
