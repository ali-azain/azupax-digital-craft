import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border px-6 py-16 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-display text-2xl font-bold tracking-tight">
              <span className="gradient-text">Azu</span>
              <span className="text-foreground">pax</span>
            </a>
            <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
              Where Digital Meets Precision
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="font-display font-semibold mb-4">Quick Links</p>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Portfolio", "Contact"].map((label) => (
                <button
                  key={label}
                  onClick={() => scrollTo(`#${label.toLowerCase()}`)}
                  className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-display font-semibold mb-4">Follow Us</p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "X" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-xs">
            © 2026 Azupax. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
