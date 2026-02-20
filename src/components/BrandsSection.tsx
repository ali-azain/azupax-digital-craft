import { motion, Variants } from "framer-motion";

const BrandsSection = () => {
    const brands = [
        { name: "GlassFlow", logo: "G" },
        { name: "SocialStream", logo: "S" },
        { name: "Earlybuild", logo: "E" },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section className="py-20 relative overflow-hidden bg-transparent">
            <div className="container mx-auto px-6">
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-sm font-medium text-white/40 uppercase tracking-widest mb-12"
                >
                    Brands we've worked with
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
                >
                    {brands.map((brand, index) => (
                        <motion.div
                            variants={itemVariants}
                            key={index}
                            className="group flex items-center justify-center"
                        >
                            {/* Placeholder for Logos - using styled text for now */}
                            <div className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105">
                                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-xl font-bold font-display text-white group-hover:border-primary/50 group-hover:text-primary transition-colors">
                                    {brand.logo}
                                </div>
                                <span className="text-xl font-display font-medium text-white/80 group-hover:text-white transition-colors">{brand.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default BrandsSection;
