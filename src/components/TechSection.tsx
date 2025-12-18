const techIcons = [
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'Nextjs', color: '#47A248' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
];

const TechSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // TECH STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technologies I've{' '}
            <span className="text-gradient">Worked With</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I combine deep technical expertise with modern frameworks
            to deliver robust, scalable applications. This diverse
            experience allows me to select the optimal,
            high-performance technology—whether modern or legacy—to
            build solutions that are secure, fast, and aligned with
            your business objectives.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techIcons.map((tech, index) => (
            <div
              key={index}
              className="group relative px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              <span className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSection;
