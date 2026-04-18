import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    closeMenu();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const products = [
    { name: "The Zenith Vase", price: "$210", img: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=1500&auto=format&fit=crop" },
    { name: "Basalt Serving Platter", price: "$145", img: "https://images.unsplash.com/photo-1590483863776-96b4dbed3b76?q=80&w=1500&auto=format&fit=crop" },
    { name: "Alabaster Carafe", price: "$180", img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1500&auto=format&fit=crop" }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#" onClick={(e) => smoothScroll(e, '#')} className="logo">CLAY STUDIO HOUSE</a>
        <div className="nav-actions">
          <div className="cart-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
            {cartCount > 0 && <span>{cartCount}</span>}
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            <span>MENU</span>
            <span className="menu-line"></span>
          </button>
        </div>
      </header>

      <div className={`overlay-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="overlay-links">
          <a href="#philosophy" onClick={(e) => smoothScroll(e, '#philosophy')}>Philosophy</a>
          <a href="#collection" onClick={(e) => smoothScroll(e, '#collection')}>Collection</a>
          <a href="#workshops" onClick={(e) => smoothScroll(e, '#workshops')}>Studio Workshops</a>
          <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a>
          <button className="btn mt-4" onClick={closeMenu}>Close</button>
        </div>
      </div>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h1 className="h-title">Hand-Formed <br/> Perfections</h1>
            <p className="copy">Elevating spaces through high-design ceramics and intimate studio mastery.</p>
            <div className="hero-cta">
              <a href="#collection" onClick={(e) => smoothScroll(e, '#collection')} className="btn btn-fill">Explore Gallery</a>
            </div>
          </div>
          <div className="hero-img"></div>
        </section>

        <section id="philosophy" className="philosophy section">
          <div className="container">
            <div className="philosophy-grid">
              <div className="phil-text">
                <span className="overline">Our Process</span>
                <h2 className="s-title">A Symphony of Earth and Fire</h2>
                <p className="copy">CLAY STUDIO HOUSE was established on the principle of extreme minimalism paired with uncompromising quality. We source the finest earthen deposits and refine them into singular artifacts of daily use.</p>
                <br/>
                <p className="copy">Our works are not produced; they are discovered through the rhythm of the wheel and the alchemy of the kiln.</p>
              </div>
              <div className="phil-image"></div>
            </div>
          </div>
        </section>

        <section id="collection" className="collection section">
          <div className="container">
            <div className="text-center mb-2">
              <span className="overline">The Gallery</span>
              <h2 className="s-title">Featured Pieces</h2>
            </div>
            <div className="prod-grid mt-4">
              {products.map((p, i) => (
                <div className="prod-card" key={i}>
                  <div className="prod-img" style={{ backgroundImage: `url(${p.img})` }}></div>
                  <h4>{p.name}</h4>
                  <div className="price">{p.price}</div>
                  <button className="btn" onClick={handleAddToCart}>Purchase</button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workshops" className="workshops section">
          <div className="container">
            <div className="text-center">
              <span className="overline">Learn the Craft</span>
              <h2 className="s-title">Masterclasses</h2>
            </div>
            <div className="workshop-list">
              <div className="workshop-item">
                <div className="ws-info">
                  <h3>Porcelain Centering</h3>
                  <p>A rigorous 4-week residency focusing exclusively on the challenging medium of fine porcelain.</p>
                </div>
                <div className="ws-action">
                  <span className="ws-date">May 15 - Jun 12</span>
                  <button className="btn btn-fill">Request Admission</button>
                </div>
              </div>
              <div className="workshop-item">
                <div className="ws-info">
                  <h3>Reduction Firing</h3>
                  <p>Advanced kiln techniques and glaze chemistry for experimental surface finishes.</p>
                </div>
                <div className="ws-action">
                  <span className="ws-date">July 10 - July 24</span>
                  <button className="btn btn-fill">Request Admission</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <h2>CLAY STUDIO HOUSE</h2>
              <p>124 Artisan Ave, Studio 4A<br/>New York, NY 10001</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h5>Gallery</h5>
                <ul>
                  <li><a href="#">Vases</a></li>
                  <li><a href="#">Tableware</a></li>
                  <li><a href="#">Sculptural</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h5>Studio</h5>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Classes</a></li>
                  <li><a href="#">Editorial</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <p>&copy; 2026 CLAY STUDIO HOUSE Studio.</p>
            <p>Designed for Excellence.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
