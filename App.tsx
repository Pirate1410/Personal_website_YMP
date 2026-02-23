
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Cpu, 
  Zap, 
  Palette, 
  Code,
  ChevronRight,
  Sparkles,
  Quote,
  Briefcase,
  Layers,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO, PERSONAL_STORY, EXPERIENCES, EDUCATION, PROJECTS, PRESENTATIONS, SKILLS } from './constants';
import profilePhoto from './photo.jpeg';

// Custom hook for scroll-reveal functionality
const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal, .stagger-reveal').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
};

const SectionTitle: React.FC<{ title: string; subtitle?: string; dark?: boolean }> = ({ title, subtitle, dark }) => (
  <div className="mb-4 relative reveal">
    <h2 className={`text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    {subtitle && <p className={`max-w-2xl text-lg font-light ${dark ? 'text-slate-300' : 'text-slate-500'}`}>{subtitle}</p>}
    <div className="h-1.5 w-24 bg-gradient-to-r from-rose-400 to-purple-400 mt-6 rounded-full shadow-[0_0_20px_rgba(251,113,133,0.4)]"></div>
  </div>
);

const PillarIcon: React.FC<{ name: string; size?: number; className?: string }> = ({ name, size = 24, className }) => {
  switch (name) {
    case 'code': return <Code size={size} className={className} />;
    case 'briefcase': return <Briefcase size={size} className={className} />;
    case 'sparkles': return <Sparkles size={size} className={className} />;
    case 'palette': return <Palette size={size} className={className} />;
    default: return <Zap size={size} className={className} />;
  }
};

const ProjectImage: React.FC<{ title: string }> = ({ title }) => {
  if (title === "Tiershift") {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-[#edece8] text-[#2b2b2b] group-hover:scale-105 transition-transform duration-1000">
        <h1 className="text-5xl md:text-6xl font-black tracking-tighter uppercase leading-none m-0">TIERSHIFT</h1>
        <div className="text-xs md:text-sm font-medium tracking-widest uppercase mt-4 opacity-90 text-center">Predicting Customer Journeys In Netflix</div>
        <div className="text-xs md:text-sm font-medium tracking-widest uppercase mt-1 opacity-90 text-center">Streaming</div>
      </div>
    );
  }
  if (title === "VibeCheckAI") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#2e2e85] gap-4 group-hover:scale-105 transition-transform duration-1000">
        <div className="w-16 h-16 bg-[#6b71f2] rounded-2xl flex items-center justify-center shadow-lg">
          <Sparkles className="text-white" size={32} />
        </div>
        <div className="text-white text-3xl font-extrabold tracking-tight whitespace-nowrap">VibeCheck AI</div>
      </div>
    );
  }
  if (title === "Phoenix Sky Harbor Airport Visualization") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-[#f8e9e9] group-hover:scale-105 transition-transform duration-1000">
        <div className="flex items-center gap-4 p-6 bg-white rounded-2xl shadow-lg">
          <div className="relative w-16 h-16 bg-[#833161] rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 border-4 border-white/30 rounded-2xl animate-pulse"></div>
            <span className="text-white text-4xl font-black italic relative z-10">P</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#2d2e49] text-2xl font-extrabold tracking-tight uppercase italic leading-none">PHX Parking</span>
            <span className="text-[#833161] text-[10px] font-semibold tracking-widest uppercase mt-1">Status Dashboard</span>
          </div>
        </div>
      </div>
    );
  }
  if (title === "Agentic AI Blog Expert") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-slate-900 relative overflow-hidden group-hover:scale-105 transition-transform duration-1000">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500 via-slate-900 to-slate-900"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-full border border-purple-500/30 flex items-center justify-center mb-4 bg-purple-500/10">
            <Code className="text-purple-400" size={32} />
          </div>
          <span className="text-white font-bold tracking-widest uppercase text-sm">Agentic Workflow</span>
        </div>
      </div>
    );
  }
  if (title === "Customer Service Automation Chatbot") {
    return (
      <div className="w-full h-full flex items-center justify-center bg-emerald-950 relative overflow-hidden group-hover:scale-105 transition-transform duration-1000">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500 via-emerald-950 to-emerald-950"></div>
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-20 h-20 rounded-2xl border border-emerald-500/30 flex items-center justify-center mb-4 bg-emerald-500/10 rotate-12">
            <MessageSquare className="text-emerald-400" size={32} />
          </div>
          <span className="text-white font-bold tracking-widest uppercase text-sm">Service Automation</span>
        </div>
      </div>
    );
  }
  
  return (
    <img 
      src={`https://picsum.photos/seed/${title}/900/600`} 
      alt={title} 
      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 ease-out" 
    />
  );
};

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkNav, setIsDarkNav] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsScrolled(window.scrollY > 50);

      const expSection = document.getElementById('experience');
      if (expSection) {
        const rect = expSection.getBoundingClientRect();
        // Nav is at top (0 to ~100px). If experience section top is < 100 and bottom > 100, we are over it.
        setIsDarkNav(rect.top <= 100 && rect.bottom >= 100);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen relative text-slate-800 selection:bg-rose-200/40">
      {/* Scroll Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-rose-400 via-purple-400 to-rose-400 z-[60] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Dynamic Background Blobs with Parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#fdfbf7]">
        <div 
          className="absolute top-0 -left-10 w-[600px] h-[600px] bg-rose-400/10 rounded-full mix-blend-multiply filter blur-[140px] animate-blob"
          style={{ transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)` }}
        ></div>
        <div 
          className="absolute top-1/4 -right-10 w-[500px] h-[500px] bg-purple-400/10 rounded-full mix-blend-multiply filter blur-[140px] animate-blob animation-delay-2000"
          style={{ transform: `translate(${mousePos.x * -0.01}px, ${mousePos.y * -0.01}px)` }}
        ></div>
        <div 
          className="absolute -bottom-20 left-1/4 w-[700px] h-[700px] bg-orange-300/10 rounded-full mix-blend-multiply filter blur-[140px] animate-blob animation-delay-4000"
          style={{ transform: `translate(${mousePos.x * 0.03}px, ${mousePos.y * -0.02}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ease-out ${isScrolled ? 'top-6 px-6' : 'top-0 px-0'}`}>
        <div className={`mx-auto transition-all duration-500 ease-out ${
          isScrolled 
            ? (isDarkNav 
                ? 'max-w-4xl bg-slate-900/50 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] border border-slate-700/50 h-16 px-8' 
                : 'max-w-4xl bg-white/30 backdrop-blur-2xl rounded-full shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] border border-white/50 h-16 px-8')
            : (isDarkNav
                ? 'max-w-7xl bg-slate-900/80 backdrop-blur-xl h-20 px-6 border-b border-slate-700/50'
                : 'max-w-7xl bg-white/80 backdrop-blur-xl h-20 px-6 border-b border-white/50')
        } grid grid-cols-3 items-center`}>
          <div className="text-2xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-500 cursor-pointer justify-self-start">
            YP<span className={`transition-colors duration-500 ${isDarkNav ? 'text-white' : 'text-slate-900'}`}>.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide justify-self-center whitespace-nowrap">
            {['About', 'Experience', 'Projects', 'Presentations', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className={`transition-all duration-300 hover:-translate-y-0.5 ${isDarkNav ? 'text-slate-300 hover:text-rose-400' : 'text-slate-600 hover:text-rose-500'}`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="justify-self-end"></div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass-card border-slate-200 mb-10 shadow-rose-400/10 shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-500"></span>
              </span>
              <span className="text-xs font-semibold text-rose-500 uppercase tracking-widest">BUILDING INTELLIGENT SYSTEMS</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-6 leading-none tracking-tighter">
              AI Strategist <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 animate-gradient">& Creative Techie.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-10 max-w-xl leading-relaxed font-light">
              Yashodhar Parmar merges high-level AI strategy with creative tech to solve enterprise-scale challenges.
            </p>
          </div>
          
          <div className="relative hidden lg:block reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="aspect-square relative flex items-center justify-center">
              {/* Glass Frame for Image */}
              <div className="relative z-10 w-[450px] h-[450px] p-6 glass-card rounded-[4rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border-slate-200">
                <div className="w-full h-full rounded-[3rem] overflow-hidden bg-slate-100 relative group">
                  <img 
                    src={profilePhoto} 
                    alt="Yashodhar Parmar" 
                    className="w-full h-full object-cover transition-all duration-1000 ease-out scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7]/80 via-transparent to-transparent opacity-60"></div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 glass-card px-6 py-3 rounded-full shadow-xl float border-slate-200 whitespace-nowrap z-20">
                 <span className="text-sm font-bold text-slate-700">GenAI Strategy & Ethical AI</span>
              </div>
              <div className="absolute top-0 right-0 glass-card p-6 rounded-3xl shadow-xl float border-slate-200">
                 <Cpu className="text-rose-500" size={40} />
              </div>
              <div className="absolute bottom-10 -left-10 glass-card p-6 rounded-3xl shadow-xl float animation-delay-2000 border-slate-200">
                 <Briefcase className="text-purple-500" size={40} />
              </div>
              <div className="absolute -bottom-6 right-1/4 glass-card p-4 rounded-3xl shadow-xl float animation-delay-4000 border-slate-200">
                 <Palette className="text-orange-400" size={32} />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-60">
          <span className="text-[10px] uppercase tracking-[0.4em] mb-4 font-bold text-slate-500">Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-rose-400 to-transparent"></div>
        </div>
      </header>

      {/* Huge Translucent Ticker */}
      <div 
        className="w-full overflow-hidden py-10 bg-[#fdfbf7] relative z-10 border-y border-slate-200/50 group/ticker"
      >
        <div 
          className="whitespace-nowrap font-display font-bold text-[22vw] text-slate-900 tracking-tighter opacity-[0.05] group-hover/ticker:opacity-95 transition-opacity duration-500 cursor-default relative z-10"
          style={{ transform: `translateX(calc(-90% - ${scrollProgress * 1.5}%))` }}
        >
          YASHODHAR • YASHODHAR • YASHODHAR • YASHODHAR • YASHODHAR • YASHODHAR • YASHODHAR • YASHODHAR •
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="min-h-screen py-8 relative flex flex-col justify-center scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle 
            title="The Intersection" 
            subtitle="Tech meets Business. Creativity meets Design." 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="glass-card p-6 rounded-[2rem] border-slate-200 reveal">
                {PERSONAL_STORY.narrative.slice(0, 2).map((paragraph, i) => (
                  <p key={i} className="text-base text-slate-600 leading-relaxed font-light mb-3 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
              
              <div className="relative group reveal" style={{ transitionDelay: '0.1s' }}>
                <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-400 via-purple-400 to-orange-300 rounded-[3rem] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative glass-card p-5 rounded-[1.5rem] bg-[#fdfbf7]/70 border-slate-200">
                  <div className="flex items-start space-x-8">
                    <Quote className="text-rose-400 flex-shrink-0 opacity-50" size={56} />
                    <p className="text-lg font-display font-medium text-slate-900 italic leading-snug">
                      "{PERSONAL_INFO.personalMission}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 stagger-reveal">
                {PERSONAL_STORY.pillars.map((pillar, idx) => (
                  <div key={idx} className="glass-card p-8 rounded-[3rem] hover:bg-slate-50 transition-all duration-500 group border-slate-200">
                    <div className="w-14 h-14 bg-rose-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-rose-400/20 transition-all shadow-inner">
                      <PillarIcon name={pillar.icon} className="text-rose-500" />
                    </div>
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{pillar.title}</h4>
                    <p className="text-slate-500 text-base font-light leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>

              <div className="glass-card p-12 rounded-[4rem] relative overflow-hidden group reveal border-slate-200">
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-400/10 rounded-full blur-[100px] group-hover:bg-purple-400/20 transition-all duration-1000"></div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-10 flex items-center">
                  <Layers className="text-purple-500 mr-4" size={28} />
                  Career DNA
                </h4>
                <div className="space-y-8">
                  {PERSONAL_STORY.quickFacts.map((fact, idx) => (
                    <div key={idx} className="group/item border-b border-slate-200 pb-6 last:border-0 last:pb-0 transition-all hover:translate-x-1">
                      <p className="text-xs font-bold uppercase tracking-widest text-rose-500/70 mb-2">
                        {fact.label}
                      </p>
                      <p className="text-xl text-slate-900 font-medium">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section 
        id="experience" 
        className="py-40 relative overflow-hidden bg-slate-950"
      >
        {/* Dark Blue Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-800/50 via-slate-900 to-slate-950"></div>
        
        {/* Subtle scroll-tracking light */}
        <div 
          className="absolute left-0 w-full h-[600px] bg-rose-400/5 filter blur-[120px] pointer-events-none transition-all duration-1000 ease-out"
          style={{ top: `${(scrollProgress * 2) - 50}%` }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle title="The Track Record" subtitle="Building AI futures for global enterprises." dark />
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative pl-10 border-l-2 border-slate-700/50 pb-8 last:pb-0 reveal">
                <div className="absolute left-[-1.5px] top-0 -translate-x-1/2 w-5 h-5 rounded-full bg-rose-400 ring-4 ring-slate-900 shadow-[0_0_10px_rgba(251,113,133,0.6)]"></div>
                <div className="glass-card p-6 rounded-[2.5rem] hover:bg-slate-800/50 transition-all duration-700 group border-slate-700/50 bg-slate-800/30">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-rose-400 transition-colors duration-500">{exp.role}</h3>
                      <p className="text-rose-400 font-medium text-lg mt-1 tracking-tight">{exp.company}</p>
                    </div>
                    <span className="mt-3 lg:mt-0 px-6 py-2 rounded-full glass-card border-slate-700/50 text-slate-300 text-xs font-bold tracking-widest shadow-sm bg-slate-800/50">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="grid grid-cols-1 gap-4">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start text-slate-300 text-base font-light leading-relaxed group/li">
                        <div className="mt-2 mr-4 w-1.5 h-1.5 rounded-full bg-rose-400 group-hover/li:scale-150 transition-all flex-shrink-0"></div>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle title="Featured" subtitle="Experimental artifacts in Creative AI and Automation." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 stagger-reveal">
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="group glass-card rounded-[4rem] overflow-hidden hover:scale-[1.03] transition-all duration-700 shadow-xl border-slate-200 flex flex-col">
                <div className="aspect-[16/10] bg-slate-100 overflow-hidden relative">
                  <ProjectImage title={proj.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf7] via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-10 flex flex-wrap gap-2">
                    {proj.tags.map(t => (
                      <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-rose-500 px-3 py-1.5 glass-card rounded-xl border-slate-200 backdrop-blur-md">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-12 flex-1 flex flex-col">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-rose-500 transition-colors duration-500">{proj.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-10 text-lg font-light flex-1">{proj.description}</p>
                  {proj.link ? (
                    <a href={proj.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-rose-500 text-sm font-bold group-hover:underline group/link">
                      {proj.title === "VibeCheckAI" ? "Show Demo" : "View Repository"} <ExternalLink size={16} className="ml-2 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <a href="#" className="inline-flex items-center text-rose-500 text-sm font-bold group-hover:underline group/link">
                      Explore Deep Dive <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Presentations Section */}
      <section id="presentations" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle title="Thought Leadership" subtitle="Speaking engagements on AI psychology and ethics." />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 stagger-reveal">
            {PRESENTATIONS.map((pres, idx) => (
              <div key={idx} className="group glass-card p-12 rounded-[4rem] hover:scale-[1.03] transition-all duration-700 shadow-xl border-slate-200 flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-400/5 rounded-full blur-[80px] group-hover:bg-rose-400/10 transition-all duration-1000"></div>
                <div className="w-16 h-16 bg-rose-400/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-rose-400/20 transition-all">
                  <MessageSquare className="text-rose-500" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-6 group-hover:text-rose-500 transition-colors duration-500 relative z-10">{pres.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg font-light flex-1 relative z-10 mb-8">{pres.description}</p>
                {pres.videoUrl && (
                  <div className="relative z-10">
                    <a href={pres.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-rose-400 text-white rounded-xl font-bold transition-all hover:bg-rose-500 shadow-md">
                      Watch Recording
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills / Arsenal */}
      <section id="skills" className="py-40 relative bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionTitle title="The Arsenal" subtitle="A multidisciplinary tech stack built for ROI." />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-reveal">
            {[
              { title: "AI & Machine Learning", items: SKILLS.ai, icon: <Sparkles size={20} /> },
              { title: "Data Analytics", items: SKILLS.dataAnalytics, icon: <Cpu size={20} /> },
              { title: "3D Rendering", items: SKILLS.rendering3D, icon: <Layers size={20} /> },
              { title: "AR/VR Development", items: SKILLS.arVr, icon: <Code size={20} /> },
              { title: "UI/UX Design", items: SKILLS.uiUx, icon: <Palette size={20} /> },
              { title: "Software & Tools", items: SKILLS.other, icon: <Briefcase size={20} /> }
            ].map((skillGroup, idx) => (
              <div key={idx} className="glass-card p-10 rounded-[3rem] hover:border-rose-400/40 transition-all duration-500 group border-slate-200">
                <div className="text-rose-500 mb-8 group-hover:scale-110 transition-transform">
                  {skillGroup.icon}
                </div>
                <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-[0.2em] text-xs opacity-60">{skillGroup.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(s => (
                    <span key={s} className="px-4 py-2 glass-card border-slate-200 rounded-xl text-slate-600 text-xs font-medium hover:bg-slate-50 transition-all hover:-translate-y-1">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-40 px-6">
        <div className="max-w-7xl mx-auto relative reveal">
          <div className="absolute -inset-10 bg-rose-400/10 rounded-[6rem] blur-[100px] pointer-events-none"></div>
          <div className="glass-card bg-slate-50/50 rounded-[5rem] p-16 md:p-28 border-slate-200 relative overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-6xl md:text-8xl font-display font-bold text-slate-900 mb-10 leading-none tracking-tight">Let's craft <br />the next <span className="text-rose-500">vision.</span></h2>
                <p className="text-slate-500 text-2xl mb-16 font-light max-w-lg leading-relaxed">Open to high-impact roles and strategic AI partnerships globally.               </div>               <div className="flex flex-col space-y-6 reveal"></p>
                
                <div className="space-y-10">
                  <div className="flex items-center space-x-8 group/link">
                    <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover/link:bg-rose-400 transition-all shadow-md border-slate-200">
                      <Mail className="text-slate-600 group-hover/link:text-white" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-rose-500 uppercase font-bold tracking-[0.3em] mb-1">Send a Message</span>
                      <span className="text-slate-900 text-2xl font-light">{PERSONAL_INFO.email}</span>
                    </div>
                  </div>
                  <a href="https://www.linkedin.com/in/yashodhar-parmar-b9b52125a" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-8 group/link">
                    <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center group-hover/link:bg-rose-400 transition-all shadow-md border-slate-200">
                      <Linkedin className="text-slate-600 group-hover/link:text-white" size={28} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs text-rose-500 uppercase font-bold tracking-[0.3em] mb-1">Connect Network</span>
                      <span className="text-slate-900 text-2xl font-light">LinkedIn Profile</span>
                    </div>
                            </a>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 relative border-t border-slate-200 bg-[#fdfbf7]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-4xl font-display font-bold text-slate-900 mb-10 tracking-tighter">YP<span className="text-rose-500">.</span></div>
          <p className="text-slate-500 text-center max-w-sm mb-16 text-lg font-light leading-relaxed">
            Architecting the future of human-machine interaction through strategy, code, and immersive design.
          </p>
          <div className="flex space-x-14 mb-16">
            <a href={PERSONAL_INFO.linkedin} target="_blank" className="text-slate-400 hover:text-rose-500 transition-all transform hover:scale-125 hover:-rotate-12">
              <Linkedin size={32} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-rose-500 transition-all transform hover:scale-125 hover:rotate-12">
              <Mail size={32} />
            </a>
          </div>
          <div className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.6em]">
            © {new Date().getFullYear()} Yashodhar Parmar
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
