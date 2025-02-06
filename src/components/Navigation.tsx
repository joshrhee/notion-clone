
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-semibold">
            Brand
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-6 animate-fade-in">
            <NavLinks mobile onClick={() => setIsMenuOpen(false)} />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = ({ mobile = false, onClick }: { mobile?: boolean; onClick?: () => void }) => {
  const links = ["Features", "About", "Contact"];
  const baseClasses = "transition-colors duration-200";
  const mobileClasses = "block py-2 hover:text-accent";
  const desktopClasses = "hover:text-accent";

  return (
    <div className={mobile ? "flex flex-col space-y-2" : "flex space-x-8"}>
      {links.map((link) => (
        <a
          key={link}
          href={`#${link.toLowerCase()}`}
          className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
          onClick={onClick}
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
