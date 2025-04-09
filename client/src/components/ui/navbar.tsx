import { useState, useEffect } from 'react';
import Logo from './logo';
import MobileMenu from './mobile-menu';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background/90 to-background/90 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'border-b border-white/10' : ''}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link text-white hover:text-secondary transition-colors font-body">Home</a>
            <a href="#lineup" className="nav-link text-white hover:text-secondary transition-colors font-body">Lineup</a>
            <a href="#artists" className="nav-link text-white hover:text-secondary transition-colors font-body">Artists</a>
            <a href="#tickets" className="nav-link text-white hover:text-secondary transition-colors font-body">Tickets</a>
            <a href="#info" className="nav-link text-white hover:text-secondary transition-colors font-body">Info</a>
            <a href="#about" className="nav-link text-white hover:text-secondary transition-colors font-body">About</a>
          </nav>
          
          {/* Ticket CTA */}
          <a href="#tickets" className="hidden md:block px-6 py-2 bg-secondary hover:bg-pink-600 text-white font-heading text-sm rounded-full transition-all transform hover:scale-105">
            GET TICKETS
          </a>
          
          {/* Mobile Navigation Trigger */}
          <button 
            onClick={toggleMobileMenu} 
            className="md:hidden text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Navbar;
