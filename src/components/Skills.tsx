const skills = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 95 },
  { name: "Power BI", level: 85 },
  { name: "Apache Airflow", level: 80 },
  { name: "Spark", level: 75 },
  { name: "AWS/Azure", level: 70 },
  { name: "dbt", level: 80 },
  { name: "PostgreSQL", level: 85 },
];

const technologies = [
  "Python", "SQL", "Power BI", "Tableau", "Apache Airflow", 
  "Apache Spark", "Databricks", "AWS", "Azure", "GCP",
  "dbt", "PostgreSQL", "MySQL", "MongoDB", "Snowflake",
  "Redshift", "BigQuery", "Kafka", "Docker", "Git"
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase mb-4">
            Habilidades
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Stack{" "}
            <span className="text-gradient">Técnica</span>
          </h2>
        </div>
        
        {/* Skills Bars */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technology Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium hover:border-primary hover:text-primary transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
