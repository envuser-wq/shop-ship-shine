import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Plane } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-accent p-2 rounded-lg">
              <Plane className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Shop & Send</h1>
              <p className="text-xs text-muted-foreground">Express Logistics</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-accent transition-colors duration-200"
            >
              Contact
            </button>
            <Button 
              variant="default"
              className="bg-gradient-accent hover:shadow-purple-glow transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Book Now
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-md rounded-b-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-accent transition-colors duration-200"
              >
                Contact
              </button>
              <Button 
                variant="default"
                className="bg-gradient-accent w-full"
                onClick={() => scrollToSection('contact')}
              >
                Book Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};