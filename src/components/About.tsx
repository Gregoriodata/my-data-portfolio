import { Database, BarChart3, GitBranch, Zap } from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Engineering",
    description: "Pipelines ETL/ELT robustos e arquiteturas de dados escaláveis"
  },
  {
    icon: BarChart3,
    title: "Business Intelligence",
    description: "Dashboards interativos e análises que geram valor"
  },
  {
    icon: GitBranch,
    title: "DataOps",
    description: "Automação e versionamento de processos de dados"
  },
  {
    icon: Zap,
    title: "Otimização",
    description: "Performance e eficiência em consultas e processos"
  }
];

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase mb-4">
              Sobre Mim
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Apaixonado por{" "}
              <span className="text-gradient">dados</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Com experiência sólida em Business Intelligence e Engenharia de Dados, 
                atuo na construção de soluções que transformam dados brutos em insights 
                acionáveis para tomada de decisão.
              </p>
              <p>
                Minha expertise inclui desenvolvimento de pipelines de dados, 
                modelagem dimensional, criação de dashboards executivos e 
                implementação de arquiteturas de dados modernas.
              </p>
              <p>
                Busco constantemente aprender novas tecnologias e metodologias 
                para entregar soluções cada vez mais eficientes e escaláveis.
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-glow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
