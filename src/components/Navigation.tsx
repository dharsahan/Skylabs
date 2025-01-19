import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollPosition > 50 ? 'bg-black/50 backdrop-blur-lg' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Star className="w-6 h-6" />
            <span className="text-xl font-bold">Steler</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/technology">Technology</NavLink>
            <NavLink to="/impact">Impact</NavLink>
            <NavLink to="/team">Team</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          {/* Mobile Navigation Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ${
        isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      } overflow-hidden bg-black/50 backdrop-blur-lg`}>
        <div className="px-4 py-2 space-y-2">
          <MobileNavLink to="/">Home</MobileNavLink>
          <MobileNavLink to="/technology">Technology</MobileNavLink>
          <MobileNavLink to="/impact">Impact</MobileNavLink>
          <MobileNavLink to="/team">Team</MobileNavLink>
          <MobileNavLink to="/contact">Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`hover:text-purple-400 transition-colors duration-200 ${
        isActive ? 'text-purple-400' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children }: { to: string; children: React.ReactNode }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`block py-2 hover:text-purple-400 transition-colors duration-200 ${
        isActive ? 'text-purple-400' : 'text-white'
      }`}
    >
      {children}
    </Link>
  );
}