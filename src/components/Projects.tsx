import { ExternalLink, Github, Database, BarChart3, Workflow } from "lucide-react";

const projects = [
  {
    title: "Pipeline de Dados E-commerce",
    description: "Pipeline ETL completo para processamento de dados de vendas com Apache Airflow, dbt e Snowflake.",
    tags: ["Python", "Airflow", "dbt", "Snowflake"],
    icon: Workflow,
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Dashboard Executivo de Vendas",
    description: "Dashboard interativo em Power BI com métricas de performance, análise de tendências e previsões.",
    tags: ["Power BI", "DAX", "SQL"],
    icon: BarChart3,
    github: null,
    demo: "https://example.com",
  },
  {
    title: "Data Warehouse Moderno",
    description: "Implementação de Data Warehouse usando arquitetura Medallion com Databricks e Delta Lake.",
    tags: ["Databricks", "Spark", "Delta Lake", "Azure"],
    icon: Database,
    github: "https://github.com",
    demo: null,
  },
  {
    title: "Análise de Churn",
    description: "Modelo de predição de churn com pipeline de ML e dashboard de monitoramento em tempo real.",
    tags: ["Python", "Scikit-learn", "Streamlit"],
    icon: BarChart3,
    github: "https://github.com",
    demo: "https://example.com",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-24 relative">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Portfólio
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Projetos{" "}
            <span className="text-gradient">Destacados</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <project.icon className="w-7 h-7 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl font-semibold mb-3">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {project.description}
              </p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="px-3 py-1 rounded-full bg-secondary text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex gap-3">
                {project.github && (
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                )}
                {project.demo && (
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
