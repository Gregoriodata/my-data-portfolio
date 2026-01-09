import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Contato
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Vamos{" "}
            <span className="text-gradient">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
            Estou sempre aberto a novas oportunidades, projetos interessantes 
            ou simplesmente para trocar uma ideia sobre dados.
          </p>
          
          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Brasil</span>
            </div>
            <a 
              href="mailto:seu@email.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-5 h-5 text-primary" />
              <span>seu@email.com</span>
            </a>
          </div>
          
          {/* CTA Button */}
          <a 
            href="mailto:seu@email.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-full hover:shadow-glow transition-all duration-300 hover:scale-105 mb-12"
          >
            <Mail className="w-5 h-5" />
            Enviar Email
          </a>
          
          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-full border border-border bg-card hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
