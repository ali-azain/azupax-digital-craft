import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Azupax transformed our website into a modern, engaging platform. Their attention to detail is unmatched.",
    name: "Sophie R.",
    company: "Lunar Café",
  },
  {
    quote: "The branding they created perfectly captured our vision. Highly professional and creative.",
    name: "Mark T.",
    company: "Zenith Startup",
  },
  {
    quote: "Our social media engagement skyrocketed thanks to Azupax's strategic approach.",
    name: "Lena K.",
    company: "Apex Inc.",
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

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">Testimonials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Trusted by <span className="gradient-text">Innovative Brands</span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              custom={i}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <Quote className="text-primary/30 mb-4" size={32} />
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
