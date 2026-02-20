
import { Code, Hash, PenTool, ArrowRight, Check } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Web development",
      icon: <Code className="w-6 h-6" />,
      items: [
        { name: "Landing page", price: "From $119" },
        { name: "Custom websites", price: "Get a Quote" },
        { name: "Complex systems", price: "Get a Quote" },
      ],
      footer: null
    },
    {
      title: "Social media",
      icon: <Hash className="w-6 h-6" />,
      items: [
        { name: "Launch campaigns", price: "From $149" },
        { name: "Weekly posts", price: "From $45" },
        { name: "Account setup", price: "From $35" },
      ],
      footer: (
        <div className="space-y-3 mt-8 pt-6 border-t border-white/5">
          {["Content creation", "Engagement strategy", "Paid ad campaigns"].map((item, i) => (
            <div key={i} className="flex items-center text-sm text-white/60">
              <Check className="w-4 h-4 text-primary mr-2" />
              {item}
            </div>
          ))}
        </div>
      )
    },
    {
      title: "Design",
      icon: <PenTool className="w-6 h-6" />,
      items: [
        { name: "Logo design", price: "From $30" },
        { name: "Jersey design", price: "From $35" },
        { name: "Branding", price: "From $100" },
        { name: "Thumbnails", price: "From $20" },
        { name: "Photo-realistic", price: "From $50" },
        { name: "3D modelling", price: "From $75" },
        { name: "Web/UI", price: "From $70" },
        { name: "Social graphics", price: "From $40" },
      ],
      footer: (
        <div className="mt-8 pt-6 border-t border-white/5 text-sm text-white/50 leading-relaxed">
          Want something else designed? <span className="text-primary font-medium cursor-pointer hover:underline" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact us</span> and we'll make it happen.
        </div>
      )
    }
  ];

  return (
    <section id="services" className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {services.map((service, idx) => (
            <div key={idx} className="bg-card/50 backdrop-blur-sm border border-white/5 rounded-3xl p-8 hover:border-primary/20 transition-all duration-300 group flex flex-col h-full">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-8">{service.title}</h3>

              <div className="space-y-6 flex-grow">
                {service.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-center group/item">
                    <span className="text-white/70 font-medium group-hover/item:text-white transition-colors">{item.name}</span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-primary text-xs font-medium group-hover/item:border-primary/30 transition-colors whitespace-nowrap ml-4">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>

              {service.footer}

              <div
                className="mt-10 flex items-center text-primary text-sm font-medium cursor-pointer hover:text-white transition-colors group/link"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Inquire <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
