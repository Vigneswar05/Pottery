import { ShoppingBag, Search, Camera, Share2, MessageCircle, ArrowRight, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

import { useState } from 'react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const categories = [
    {
      title: "Hand Building",
      desc: "Learn the foundational techniques of pinching, coiling, and slab building.",
      price: "$120 / session",
      image: "https://images.unsplash.com/photo-1565191999001-551c187427bb?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Wheel Throwing",
      desc: "Master the art of shaping clay on the potter's wheel for elegant functional pieces.",
      price: "$150 / session",
      image: "/pottery_wheel_class_1776245340948.png"
    },
    {
      title: "Glazing Art",
      desc: "Explore advanced glazing techniques to give your creations a professional finish.",
      price: "$180 / session",
      image: "/ceramic_glazing_art_1776245374160.png"
    }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav>
        <div className="container nav-content">
          <div className="logo"></div>
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <button className="mobile-close" onClick={() => setIsMenuOpen(false)}>
              <X size={24} />
            </button>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Workshops</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Collection</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Our Story</a>
            <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
          </div>
          <div className="nav-actions">
            <Search size={20} className="desktop-only" />
            <ShoppingBag size={20} />
            <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Art of Earth & Fire</h1>
          <p>
            Experience the meditative craft of pottery in our curated space. 
            From raw clay to timeless pieces, we guide you through every step 
            of the creative journey.
          </p>
          <div className="hero-btns">
            <button className="btn btn-primary">Book a Class</button>
            <button className="btn btn-outline">View Collection</button>
          </div>
        </motion.div>
        <motion.div 
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/pottery_hero_design_1776245315396.png" alt="Pottery Hero" />
        </motion.div>
      </section>

      {/* Classes Section */}
      <section className="container section">
        <div className="section-title">
          <h2>Our Workshops</h2>
          <p>Carefully crafted sessions for every skill level</p>
        </div>
        <div className="classes-grid">
          {categories.map((item, index) => (
            <motion.div 
              key={index} 
              className="class-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="class-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="class-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="price">{item.price}</span>
                  <ArrowRight size={18} color="#8B2323" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container section">
        <div className="section-title">
          <h2>Studio Gallery</h2>
          <p>A glimpse into our creative process and finished works</p>
        </div>
        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?auto=format&fit=crop&q=80&w=1200" alt="Studio Space" />
          </div>
          <div className="gallery-item tall">
            <img src="https://images.unsplash.com/photo-1561715276-a2d087060f1d?auto=format&fit=crop&q=80&w=800" alt="Pottery Display" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=800" alt="Kiln Process" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800" alt="Clay Preparation" />
          </div>
          <div className="gallery-item tall">
            <img src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?auto=format&fit=crop&q=80&w=800" alt="Finished Ware" />
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&q=80&w=800" alt="Artisan Hand" />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="container">
          <h2>Join Our Workshop</h2>
          <p>Get notified about upcoming classes and new collections arriving in our studio.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Your email address" />
            <button className="btn btn-white">Subscribe</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo" style={{ marginBottom: '1rem' }}>CLAY STUDIO HOUSE</div>
              <p style={{ maxWidth: '300px', color: '#555' }}>
                Cultivating creativity through the timeless art of ceramics. 
                Join our community of makers.
              </p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Workshops</a></li>
                <li><a href="#">Store</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Follow Us</h4>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <Camera size={20} />
                <Share2 size={20} />
                <MessageCircle size={20} />
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 CLAY STUDIO HOUSE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
