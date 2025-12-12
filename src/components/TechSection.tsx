const techIcons = [
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Vue.js', color: '#4FC08D' },
  { name: 'Angular.js', color: '#DD0031' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'GraphQL', color: '#E10098' },
  { name: 'Mantine Library', color: '#E04E39' },
  { name: 'Tailwind CSS', color: '#11557C' },
  { name: 'Material UI', color: '#2684FF' },
  { name: 'Semantic UI', color: '#009688' },
  { name: 'Materialize', color: '#00ADD8' },
  { name: 'Lucide', color: '#00C1B5' },
  { name: 'Tabler', color: '#00AD9F' },
  { name: 'BootStrap', color: '#2D2D2D' },
  { name: 'Intercom Messenger', color: '#8BC34A' },
  { name: 'MixPanel Analytics', color: '#CC2927' },
  { name: 'Amplitude AI analytics', color: '#00C1B5' },
  { name: 'Sentry IO', color: '#555555' },
  { name: 'Datadog', color: '#7B68EE' },
  { name: 'Zendesk', color: '#F06A6A' },
  { name: 'GenesysCloud', color: '#4B275F' },
  { name: 'LivePerson', color: '#5D2EE8' },
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
            I have a strong technical background, starting with Visual
            Basic and Borland Delphi 6, and progressing to ASP.NET
            with C#, jQuery, JavaScript, AngularJS, VBA for O365,
            Google App Script, VueJS, React, and EmberJS. I've also
            ventured into Python with Flask and am currently studying
            Go.
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
