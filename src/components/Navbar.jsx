import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (!isHome) return; // If not on home, Link will handle navigation to /, then we might need to scroll but simple is fine for now

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${scrolled || !isHome ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="logo">
          <Link to="/">KANDHA GURU RESIDENCY</Link>
        </div>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>

          {/* Use hash links for home sections if on home, otherwise link to home#section */}
          {isHome ? (
            <>
              <a href="#rooms" onClick={(e) => { e.preventDefault(); scrollToSection('rooms'); }}>Rooms</a>
              <a href="#amenities" onClick={(e) => { e.preventDefault(); scrollToSection('amenities'); }}>Amenities</a>
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
            </>
          ) : (
            <>
              <Link to="/#rooms" onClick={() => setIsOpen(false)}>Rooms</Link>
              <Link to="/#amenities" onClick={() => setIsOpen(false)}>Amenities</Link>
              <Link to="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </>
          )}

          <button
  className="btn btn-accent book-btn"
  onClick={() =>
    window.open(
      "https://www.booking.com/Share-kFW243",
      "_blank"
    )
  }
>
  Book Now
</button>

        </div>

        <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X color="white" /> : <Menu color="white" />}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
