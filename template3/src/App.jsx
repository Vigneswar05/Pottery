import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
  };

  const smoothScroll = (e, id) => {
    e.preventDefault();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.querySelector(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const products = [
    { name: "Cobalt Ewer", price: "$120", img: "https://images.unsplash.com/photo-1612317730999-923f5b08e2f8?q=80&w=1500&auto=format&fit=crop" },
    { name: "Gilded Vessel", price: "$350", img: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?q=80&w=1500&auto=format&fit=crop" },
    { name: "Azure Planter", price: "$95", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1500&auto=format&fit=crop" }
  ];

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#" onClick={(e) => smoothScroll(e, '#')} className="logo">CLAY STUDIO HOUSE</a>
        <nav className={`nav-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
          <div className="nav-sidebar-links">
            <a href="#about" onClick={(e) => { setIsMenuOpen(false); smoothScroll(e, '#about'); }} className="nav-link">Our Studio</a>
            <a href="#collection" onClick={(e) => { setIsMenuOpen(false); smoothScroll(e, '#collection'); }} className="nav-link">The Collection</a>
            <a href="#workshops" onClick={(e) => { setIsMenuOpen(false); smoothScroll(e, '#workshops'); }} className="nav-link">Masterclasses</a>
          </div>
        </nav>
        <div className="nav-actions">
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(true)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
          <div className="cart-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">Elegance Shaped from Earth</h1>
              <p className="hero-subtitle">Discover the Midnight Collection—where deep indigo glazes meet striking gold accents in our latest artisanal ceramic drop.</p>
              <a href="#collection" onClick={(e) => smoothScroll(e, '#collection')} className="btn btn-primary">Shop the Collection</a>
            </div>
          </div>
        </section>

        <section id="collection" className="product-showcase section">
          <div className="container">
            <div className="section-head">
              <h2 className="text-gold">Noctem Series</h2>
              <p>Hand-thrown. Kiln-fired. Perfectly imperfect.</p>
            </div>
            <div className="grid">
              {products.map((p, i) => (
                <div className="card" key={i}>
                  <div className="card-img" style={{ backgroundImage: `url(${p.img})` }}></div>
                  <div className="card-content">
                    <h3 className="card-title">{p.name}</h3>
                    <p className="card-price">{p.price}</p>
                    <button className="btn btn-outline" style={{width: '100%'}} onClick={handleAddToCart}>Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="workshops" className="section">
          <div className="container">
            <div className="features-grid">
              <div className="feat-text">
                <h2 className="text-gold">Awaken Your Craft</h2>
                <p>Join our master artisans in the studio. Whether you are throwing your first bowl or mastering advanced reduction firing techniques, our exclusive workshops provide an immersive experience.</p>
                <div className="workshop-list">
                  <div className="ws">
                    <div className="ws-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{fontSize: '1.2rem'}}>Evening Wheel Throwing</h4>
                      <p style={{fontSize: '0.9rem', color: 'var(--clr-text-muted)'}}>8-Week Program • Starts Oct 4th</p>
                    </div>
                  </div>
                  <div className="ws">
                    <div className="ws-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                    </div>
                    <div>
                      <h4 style={{fontSize: '1.2rem'}}>Bespoke Glaze Chemistry</h4>
                      <p style={{fontSize: '0.9rem', color: 'var(--clr-text-muted)'}}>Weekend Intensive • Fully Booked</p>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary" style={{marginTop: '1rem'}}>View Full Schedule</button>
              </div>
              <div className="feat-img"></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-logo">CLAY STUDIO HOUSE</div>
          <div className="social">
            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">Journal</a>
          </div>
          <p style={{color: 'var(--clr-text-muted)', fontSize: '0.8rem'}}>&copy; 2026 CLAY STUDIO HOUSE Studio. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;
