import { useState, useEffect } from 'react';
import './App.css'; // empty

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleAddToCart = (e) => {
    setCartCount(prev => prev + 1);
    const target = e.target;
    const originalText = target.textContent;
    
    // Animation effect
    target.textContent = 'Added!';
    target.style.backgroundColor = 'var(--clr-clay)';
    target.style.color = 'var(--clr-white)';
    
    setTimeout(() => {
      target.textContent = originalText;
      target.style.backgroundColor = 'transparent';
      target.style.color = 'var(--clr-charcoal)';
    }, 1000);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing to our inner circle!');
    e.target.reset();
  };

  const smoothScroll = (e, targetId) => {
    e.preventDefault();
    closeMenu();
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`} id="header">
        <div className="container header-container">
          <a href="#" onClick={(e) => smoothScroll(e, '#')} className="logo">SAMPLE STUDIO</a>
          <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-list">
              <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')} className="nav-link">Our Story</a></li>
              <li><a href="#shop" onClick={(e) => smoothScroll(e, '#shop')} className="nav-link">Shop</a></li>
              <li><a href="#workshops" onClick={(e) => smoothScroll(e, '#workshops')} className="nav-link">Workshops</a></li>
              <li><a href="#contact" onClick={(e) => smoothScroll(e, '#contact')} className="nav-link">Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="cart-btn" aria-label="Shopping Cart">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              <span className="cart-count">{cartCount}</span>
            </button>
            <button className={`menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1 className="hero-title">Timeless Craftsmanship in Every Contour</h1>
            <p className="hero-subtitle">Elevate your living space with our handcrafted ceramics or master the wheel in our professional studio workshops.</p>
            <div className="hero-buttons">
              <a href="#shop" onClick={(e) => smoothScroll(e, '#shop')} className="btn btn-primary">Explore Collection</a>
              <a href="#workshops" onClick={(e) => smoothScroll(e, '#workshops')} className="btn btn-secondary">Join a Workshop</a>
            </div>
          </div>
        </section>

        <section id="about" className="about section">
          <div className="container about-container">
            <div className="about-text">
              <h2 className="section-title">A Legacy of Clay</h2>
              <p>At SAMPLE STUDIO, we believe in the quiet dignity of handmade objects. Founded by master ceramicists, our studio is dedicated to preserving traditional pottery techniques while embracing modern, minimalist aesthetics.</p>
              <p>Every piece that leaves our kiln is a testament to quality, crafted meticulously with premium earthen clay and non-toxic, bespoke glazes. We don't just sell pottery; we share a philosophy of mindful living and artistic integrity.</p>
            </div>
            <div className="about-image-wrapper">
              <div className="image-placeholder" id="about-img-container"></div>
            </div>
          </div>
        </section>

        <section id="shop" className="shop section bg-light">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Curated Collection</h2>
              <p className="section-desc">Discover our range of meticulously crafted functional art.</p>
            </div>
            <div className="product-grid">
              <div className="product-card">
                <div className="product-img" id="prod-img-1"></div>
                <div className="product-info">
                  <h3 className="product-name">Obsidian Carafe</h3>
                  <p className="product-price">$85.00</p>
                  <button className="add-to-cart btn btn-outline" onClick={handleAddToCart}>Add to Cart</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img" id="prod-img-2"></div>
                <div className="product-info">
                  <h3 className="product-name">Terracotta Planter</h3>
                  <p className="product-price">$120.00</p>
                  <button className="add-to-cart btn btn-outline" onClick={handleAddToCart}>Add to Cart</button>
                </div>
              </div>
              <div className="product-card">
                <div className="product-img" id="prod-img-3"></div>
                <div className="product-info">
                  <h3 className="product-name">Alabaster Serving Bowl</h3>
                  <p className="product-price">$150.00</p>
                  <button className="add-to-cart btn btn-outline" onClick={handleAddToCart}>Add to Cart</button>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <a href="#shop" onClick={(e) => smoothScroll(e, '#shop')} className="btn btn-primary">View Full Catalog</a>
            </div>
          </div>
        </section>

        <section id="workshops" className="workshops section">
          <div className="container">
            <div className="section-header text-center">
              <h2 className="section-title">Studio Workshops</h2>
              <p className="section-desc">Learn the art of pottery under the guidance of our master artisans.</p>
            </div>
            <div className="workshop-grid">
              <div className="workshop-card">
                <div className="workshop-content">
                  <h3>Introduction to Wheel Throwing</h3>
                  <p className="duration">4 Weeks | Beginner Friendly</p>
                  <p className="desc">Master the fundamentals of centering and pulling clay on the potter's wheel. All materials and kiln firing included.</p>
                  <a href="#workshops" onClick={(e) => e.preventDefault()} className="btn btn-primary btn-block">Enroll Now - $250</a>
                </div>
              </div>
              <div className="workshop-card">
                <div className="workshop-content">
                  <h3>Advanced Glazing Techniques</h3>
                  <p className="duration">2 Weeks | Intermediate to Advanced</p>
                  <p className="desc">Explore the chemistry of glazes, layering, and specialized firing methods to create unique surface designs.</p>
                  <a href="#workshops" onClick={(e) => e.preventDefault()} className="btn btn-primary btn-block">Enroll Now - $180</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="newsletter section bg-dark text-white">
          <div className="container text-center">
            <h2 className="section-title text-white">Join Our Inner Circle</h2>
            <p>Subscribe to receive updates on new collections, exclusive kiln releases, and workshop schedules.</p>
            <form className="newsletter-form" id="newsletter-form" onSubmit={handleSubscribe}>
              <input type="email" placeholder="Enter your email address" required className="input-field" />
              <button type="submit" className="btn btn-primary text-white">Subscribe</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer bg-darker text-white">
        <div className="container footer-container">
          <div className="footer-brand">
            <h3>SAMPLE STUDIO</h3>
            <p>Crafting timeless ceramics for the modern dwelling.</p>
          </div>
          <div className="footer-links">
            <h4>Studio</h4>
            <ul>
              <li><a href="#about" onClick={(e) => smoothScroll(e, '#about')}>About</a></li>
              <li><a href="#workshops" onClick={(e) => smoothScroll(e, '#workshops')}>Workshops</a></li>
              <li><a href="#">Journal</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Visit Us</h4>
            <p>124 Artisan Ave,<br/>Kiln District, NY 10001</p>
            <p>hello@earthengrace.com</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; 2026 SAMPLE STUDIO Pottery. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
