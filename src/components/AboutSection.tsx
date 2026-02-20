import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      {/* Background glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Intention</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            We build digital <br />
            with <span className="text-white/80">intention.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Our Story */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card className="bg-card border-white/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>
                </div>
                <CardTitle className="text-2xl font-display text-white">Our story</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 leading-relaxed mb-6">
                  Azpax began in 2024. Then, simple, but dedicated. Since then, we've grown into a diverse team of digital strategists, developers, and designers. We build with clarity, precision, and passion.
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  Now, we're helping brands across the globe realize their vision. We treat every project not just as a contract, but as a partnership.
                </p>
                <a href="#read-more" className="inline-flex items-center text-primary text-sm font-medium hover:underline">
                  Read full story <ArrowRight className="ml-1 w-4 h-4" />
                </a>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: What we do */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card border-white/5 hover:border-primary/20 transition-all duration-300 group overflow-hidden h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                </div>
                <CardTitle className="text-2xl font-display text-white">What we do</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/60 leading-relaxed mb-6">
                  Full-stack development, engagement, and design. Complex problems demand elegant solutions. We make solutions that drive results.
                </p>
                <p className="text-white/60 leading-relaxed mb-6">
                  From 0 to 1, we take the lead.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {['Web', 'Mobile', 'Design', 'Strategy', 'SEO'].map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-white/5 text-white/80 hover:bg-white/10 border-transparent">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
