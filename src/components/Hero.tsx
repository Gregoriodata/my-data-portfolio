import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center data-grid overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      <div className="container relative z-10 text-center px-6">
        <div className="animate-fade-in">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Business Intelligence & Data Engineering
          </p>
          
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="text-foreground">Olá, eu sou</span>
            <br />
            <span className="text-gradient">Seu Nome</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Transformando dados em insights estratégicos. Especialista em criar soluções de dados escaláveis e dashboards que impulsionam decisões de negócio.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:seu@email.com"
              className="p-3 rounded-full border border-border bg-secondary/50 hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300 group"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          {/* CTA Button */}
          <a 
            href="#projetos"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            Ver Projetos
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
