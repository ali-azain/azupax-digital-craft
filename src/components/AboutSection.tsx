import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We push boundaries to create unique, visually striking experiences.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters — from typography to interaction design.",
  },
  {
    icon: TrendingUp,
    title: "Results",
    description: "We focus on impact, performance, and measurable growth.",
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

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-16 items-center mb-20"
        >
          <motion.div variants={fadeUp} custom={0}>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">About Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              We Are <span className="gradient-text">Azupax</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Azupax is a modern digital agency that specializes in building premium websites, creating compelling brand identities, and managing impactful social media campaigns.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team is a fusion of designers, strategists, and creative thinkers who thrive on solving complex challenges with elegant solutions. We don't just design; we craft experiences that resonate with your audience and deliver measurable results.
            </p>
          </motion.div>

          {/* Visual element */}
          <motion.div variants={fadeUp} custom={1} className="relative">
            <div className="aspect-square rounded-2xl bg-secondary border border-border overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="absolute top-8 left-8 right-8 bottom-8 border border-primary/20 rounded-xl" />
              <div className="absolute top-16 left-16 right-16 bottom-16 border border-primary/10 rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-6xl font-bold gradient-text text-glow">A</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Core values */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              custom={i}
              className="group p-8 rounded-2xl bg-card border border-border hover:card-glow transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-muted-foreground text-center max-w-2xl mx-auto mt-16 leading-relaxed"
        >
          Whether you're a startup looking to make your mark or an established brand seeking to evolve, Azupax partners with you to elevate your digital presence.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
