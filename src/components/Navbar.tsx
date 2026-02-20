
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Azpax Logo" className="h-14 w-auto object-contain" />
          <span className="text-2xl font-display font-bold text-white tracking-tighter">Azpax</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Home
          </a>
          <a href="#work" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Work
          </a>
          <a href="#about" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
            Services
          </a>
          <Button variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-6" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Let's talk
          </Button>
        </div>

        {/* Mobile Menu Button - Placeholder for now */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav >
  );
};

export default Navbar;
