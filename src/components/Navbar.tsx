import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Download } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills-Set' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#certifications', label: 'Certifications' },
  { href: '/blog', label: 'Blog' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <h1>
            {' '}
            <a
              href="#"
              className="font-mono text-lg font-bold text-gradient"
            >
              AH<span className="text-primary">.</span>
            </a>
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="heroOutline" size="sm">
              <a
                href="/cv/ahunter2026CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </Button>
            <Button variant="hero" size="sm" asChild>
              <a href="#contact">Contact</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-3 mt-4 px-4">
                <Button
                  variant="heroOutline"
                  size="sm"
                  className="flex-1"
                >
                  <Download className="w-4 h-4" />
                  CV
                </Button>
                <Button
                  variant="hero"
                  size="sm"
                  className="flex-1"
                  asChild
                >
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    Contact
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
