import Button from "../ui/Button";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="bg-slate-50 text-slate-900 py-16 md:py-24 border-b border-slate-200"
      aria-label="Introduction"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 text-center md:text-left space-y-6">
          
          {/* Status / Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs sm:text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            Available for Software Engineering Roles
          </div>

          {/* Headline */}
          <div className="space-y-2">
            <p className="text-slate-600 font-medium text-base sm:text-lg">
              Hello 👋 I'm
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900">
              Ravishan Rathnayake
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-600">
              Electronics Engineer & Python Developer
            </h2>
          </div>

          {/* Value Proposition Description */}
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
           I build responsive React applications, develop Python automation tools, and create IoT solutions that bridge hardware and software.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-2">
            <Button href="#projects" variant="primary">
              View Projects
            </Button>
            <Button href="/resume.pdf" variant="secondary" external>
              Download Resume
            </Button>
          </div>

        </div>

        {/* Right Column: Visual Element / Avatar Placeholder */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-slate-900 text-slate-100 flex flex-col justify-center items-center p-6 shadow-xl border border-slate-800">
            {/* Visual background accent */}
            <div  className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 to-slate-700 opacity-20 blur-sm -z-10" />
            
            {/* Minimalist Code Block / Technical Placeholder */}
            <div className="w-full space-y-2 font-mono text-xs sm:text-sm text-cyan-400">
              <p className="text-slate-500">// Technical Stack</p>
              <p><span className="text-slate-100">const</span> engineer = &#123;</p>
              <p className="pl-4">name: <span className="text-cyan-300">'Ravishan'</span>,</p>
              <p className="pl-4">core: [<span className="text-cyan-300">'React'</span>, <span className="text-cyan-300">'Python'</span>],</p>
              <p className="pl-4">stack: [<span className="text-cyan-300">'React', 'Python', 'IoT</span>]</p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}