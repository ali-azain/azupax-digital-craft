
const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-transparent border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="space-y-8">
            <div>
              <p className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">Our Ethics</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Real team, <br />
                High standards.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                We don't offshore. We don't cut corners. We treat your project like it's our own business. The art of shaping content, precision in code, and aesthetic functional design.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>100% In-house team</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>No hidden meetings</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span>We deliver what we promise</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Code snippet visual */}
            <div className="bg-[#111] rounded-xl border border-white/10 p-6 md:p-8 font-mono text-sm relative overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>

              <div className="space-y-2 text-white/40 mt-4">
                <p><span className="text-purple-400">import</span> hard_work <span className="text-purple-400">from</span> <span className="text-green-400">'./values'</span>;</p>
                <p>&nbsp;</p>
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">success</span> = <span className="text-yellow-400">async</span> () <span className="text-purple-400">{"=>"}</span> &#123;</p>
                <p className="pl-4"><span className="text-purple-400">if</span> (shortcuts) <span className="text-purple-400">throw</span> <span className="text-red-400">new</span> Error(<span className="text-green-400">'No shortcuts allowed'</span>);</p>
                <p className="pl-4"><span className="text-purple-400">await</span> buildWithPrecision();</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">'Excellence'</span>;</p>
                <p>&#125;;</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
