
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden">
      {/* Background Gradient Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 max-w-4xl relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 backdrop-blur-sm mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          Available for new projects
        </motion.div>

        <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-white leading-[1.1]">
          Elevating brands on a <br />
          <span className="text-primary italic">global scale.</span>
        </h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed"
        >
          Strategic social media, high-conversion web development, and world-class design—tailored for ambitious businesses worldwide.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8 h-12 text-lg w-full sm:w-auto transition-transform hover:scale-105" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
            View our Work
          </Button>
          <Button variant="outline" size="lg" className="border-white/10 text-white hover:bg-white/5 hover:text-white font-medium px-8 h-12 text-lg w-full sm:w-auto bg-transparent transition-transform hover:scale-105" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Get in touch
          </Button>
        </motion.div>
      </motion.div>

      {/* Aesthetic decorative element */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "6rem", opacity: 0.5 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
