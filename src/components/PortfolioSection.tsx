import { motion } from "framer-motion";

const projects = [
  {
    name: "Lunar Café",
    stat: "+35%",
    statLabel: "online reservations",
    description:
      "Redesigned the entire website with a modern, responsive interface. Created cohesive branding for digital menus and social media templates.",
  },
  {
    name: "Zenith Startup",
    stat: "Full Brand",
    statLabel: "identity delivered",
    description:
      "Developed logo, brand guidelines, and visual identity for a tech startup. Designed pitch deck and marketing materials for investors.",
  },
  {
    name: "Apex Campaign",
    stat: "+50%",
    statLabel: "social engagement",
    description:
      "Managed content strategy, visual assets, and paid campaigns. Optimized ad creative for maximum ROI in one quarter.",
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

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Our Work <span className="gradient-text">Speaks for Itself</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We design digital experiences that deliver results. Here are some recent projects that showcase our creative vision and strategic approach.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              custom={i}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:border-primary/30 hover:card-glow transition-all duration-500"
            >
              {/* Colored top bar */}
              <div className="h-1 bg-gradient-to-r from-primary to-primary/40" />
              <div className="p-8">
                <p className="text-xs text-primary font-medium tracking-widest uppercase mb-4">{p.name}</p>
                <div className="mb-4">
                  <span className="font-display text-4xl font-bold gradient-text">{p.stat}</span>
                  <p className="text-muted-foreground text-sm mt-1">{p.statLabel}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-muted-foreground mt-12 text-sm italic"
        >
          Every project we take on is treated as a signature statement — let us make your brand stand out next.
        </motion.p>
      </div>
    </section>
  );
};

export default PortfolioSection;
