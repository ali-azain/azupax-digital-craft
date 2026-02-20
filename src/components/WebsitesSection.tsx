
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

import { projects } from "@/data/projects";

const ProjectsSection = () => {

    return (
        <section id="work" className="py-24 bg-background border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Work</p>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
                            Projects we've crafted
                        </h2>
                    </div>
                    <Button variant="outline" className="text-white border-white/10 hover:bg-white/5 hover:text-white">
                        View all projects <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx} className="group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-primary/30 transition-all duration-300">
                            {/* Project Image Placeholder */}
                            <div className="h-64 w-full overflow-hidden relative group">
                                {project.image.startsWith("bg-") ? (
                                    <div className={`w-full h-full ${project.image} group-hover:scale-105 transition-transform duration-500`} />
                                ) : (
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}

                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        <Button size="icon" className="rounded-full bg-white text-black hover:bg-white/90">
                                            <ExternalLink className="w-4 h-4" />
                                        </Button>
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2 block">{project.category}</span>
                                <h3 className="text-2xl font-display font-bold text-white mb-2">
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-white/60 text-sm">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner from image */}
                <div className="mt-20 relative rounded-3xl overflow-hidden bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-500 text-xs font-bold border border-yellow-500/30">
                            NEW
                        </div>
                        <h3 className="text-3xl font-display font-bold text-white">BrainDust</h3>
                        <p className="text-white/70 max-w-md">
                            Check out our latest case study on how we rebranded BrainDust to increase their conversion by 150%.
                        </p>
                    </div>
                    <div className="flex-shrink-0 text-right">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">$39<span className="text-lg text-white/50 font-normal">/mo</span></div>
                        <Button className="bg-white text-black hover:bg-white/90">
                            View Case Study
                        </Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ProjectsSection;
