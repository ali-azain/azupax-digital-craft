import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMobileNav = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3" onClick={() => handleMobileNav("home")}>
          <img src="/logo.png" alt="Azpax Logo" className="h-24 md:h-28 w-auto object-contain scale-125 transform origin-left" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => handleMobileNav("home")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Home
          </button>
          <button onClick={() => handleMobileNav("work")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Work
          </button>
          <button onClick={() => handleMobileNav("about")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            About
          </button>
          <button onClick={() => handleMobileNav("services")} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Services
          </button>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6" onClick={() => handleMobileNav("contact")}>
            Let's talk
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-6 animate-in slide-in-from-top-2">
          <button onClick={() => handleMobileNav("home")} className="text-lg font-medium text-white text-left">
            Home
          </button>
          <button onClick={() => handleMobileNav("work")} className="text-lg font-medium text-white text-left">
            Work
          </button>
          <button onClick={() => handleMobileNav("about")} className="text-lg font-medium text-white text-left">
            About
          </button>
          <button onClick={() => handleMobileNav("services")} className="text-lg font-medium text-white text-left">
            Services
          </button>
          <Button variant="default" className="bg-primary text-primary-foreground w-full font-medium" onClick={() => handleMobileNav("contact")}>
            Let's talk
          </Button>
        </div>
      )}
    </nav >
  );
};

export default Navbar;
