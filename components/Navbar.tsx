import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string, section?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string, section?: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(page, section);
  };

  const navLinks = [
    { name: "La Méthode", action: () => handleNavClick('method') },
    { name: "Devenir Formateur", action: () => handleNavClick('become-trainer') },
    { name: "La Meute (Portage)", action: () => handleNavClick('meute') },
    { name: "À propos", action: () => handleNavClick('about') },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
          <span className="text-xl tracking-tight text-petrol">
            MAJUBAH <span className="font-bold">ACADEMY</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={link.action}
              className="text-sm font-medium text-petrol/70 hover:text-petrol transition-colors focus:outline-none"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button onClick={() => handleNavClick('apply')} className="bg-accent text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-accent/90 hover:shadow-glow transition-all duration-300 transform hover:-translate-y-0.5">
            POSTULER À L'ACADÉMIE
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-petrol focus:outline-none"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 shadow-lg animate-fade-in">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={link.action}
              className="text-left text-base font-medium text-petrol/80 py-2"
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => handleNavClick('apply')} className="bg-accent text-white w-full py-3 rounded-lg text-sm font-bold mt-4">
            POSTULER À L'ACADÉMIE
          </button>
        </div>
      )}
    </nav>
  );
};