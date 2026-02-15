import { motion } from "framer-motion";
import { Globe, Palette, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    headline: "Custom Websites That Perform",
    description:
      "We design responsive, user-friendly websites that not only look stunning but also drive engagement and conversions.",
    features: ["Business websites", "Landing pages", "E-commerce platforms", "UX/UI design"],
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    headline: "Build a Brand That Resonates",
    description:
      "We develop cohesive brand identities that communicate your vision and values with clarity and sophistication.",
    features: ["Logo design & identity", "Brand guidelines", "Social media graphics", "Marketing materials"],
  },
  {
    icon: Megaphone,
    title: "Social Media Management",
    headline: "Engage Your Audience, Grow Your Reach",
    description:
      "Comprehensive social media management that combines strategy, content creation, and analytics to grow your brand.",
    features: ["Content planning", "Creative post design", "Community engagement", "Analytics & reporting"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-6"
        >
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              custom={i}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:card-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">{s.title}</p>
              <h3 className="font-display text-2xl font-bold mb-4">{s.headline}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{s.description}</p>
              <ul className="space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
