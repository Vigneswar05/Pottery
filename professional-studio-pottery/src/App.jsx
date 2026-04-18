import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Assets
import heroImg from './assets/hero.png';
import gallery1 from './assets/gallery1.png';
import gallery2 from './assets/gallery2.png';
import aboutImg from './assets/about.png';

const App = () => {
  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="logo">Clay Studio House</div>
        <nav>
          <ul className="nav-links">
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title">
              ART <br /> OF <br /> CLAY
            </h1>
            <p className="hero-subtitle">
              Exploring the intersection of primitive form and modern minimalism. 
              Handcrafted in Clay studio house with soul and precision.
            </p>
            <div className="hero-scroll-indicator">
              <span>SCROLL DOWN</span>
            </div>
          </motion.div>
          <div className="hero-image-container">
            <motion.img 
              src={heroImg} 
              alt="Hero Pottery" 
              className="hero-image"
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="portfolio" className="gallery-section">
          <span className="section-label">Selected Works / 01</span>
          <div className="gallery-grid">
            <motion.div 
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src={gallery1} alt="Pottery process" />
              <div className="gallery-item-info">
                <h3 className="gallery-item-title">The Sculptor's Hand</h3>
              </div>
            </motion.div>
            <motion.div 
              className="gallery-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img src={gallery2} alt="Finished bowls" />
              <div className="gallery-item-info">
                <h3 className="gallery-item-title">Monolith Collection</h3>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="about-image">
            <motion.img 
              src={aboutImg} 
              alt="Clay Studio House Artist"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="about-content">
            <h2 className="about-title">OUR VISION</h2>
            <p className="about-text">
              Clay Studio House was founded on the belief that objects in our home should tell a story. 
              Our pieces are born from the earth, shaped by the rhythm of the wheel, and fired 
              with the unpredictable beauty of the kiln.
            </p>
            <motion.button 
              className="btn-discover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ marginTop: '2rem', borderBottom: '1px solid black', paddingBottom: '5px' }}
            >
              READ MORE
            </motion.button>
          </div>
        </section>

        {/* Contact/Footer Section */}
        <footer id="contact" className="footer">
          <h2 className="footer-logo">CLAY STUDIO HOUSE</h2>
          <div className="footer-links">
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Email</a>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2026 CLAY STUDIO HOUSE. ALL RIGHTS RESERVED.</p>
            <p style={{ marginTop: '10px' }}>ESTABLISHED IN 2024 / BASED IN THE CITY</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
