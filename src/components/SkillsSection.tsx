const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      'JavaScript',
      'TypeScript',
      'React',
      'Preact',
      'Vue.js',
      'Angular',
      'Next.js',
    ],
  },
  {
    title: 'Backend & API Development',
    skills: [
      'Node.js',
      'Express.js',
      'Python',
      'FastAPI',
      'Flask',
      'GraphQL',
      'REST APIs',
      'PostgreSQL',
      'MongoDB',
    ],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
  },
  {
    title: 'Content Management Systems',
    skills: [
      'Headless CMS',
      'Contentful',
      'Strapi',
      'Sanity',
      'WordPress',
      'Joomla',
      'Drupal',
      'Storyblok',
    ],
  },
  {
    title: 'CMS & Tools',
    skills: [
      'Contentful',
      'Strapi',
      'Sanity',
      'KeystoneJS',
      'NetlifyCMS',
      'Docker',
      'AWS',
      'CI/CD',
    ],
  },
  {
    title: 'Management',
    skills: [
      'Agile/Scrum',
      'Jira',
      'Trello',
      'Notion',
      'Linear',
      'Asana',
      'ClickUp',
      'Shortcut',
      'QA Testing',
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // SKILLS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Technical Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Full-Stack Software Engineer with 7+ years of experience
            building scalable, high-performance web applications with
            modern JavaScript, TypeScript and Python ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-all duration-300"
            >
              <h3 className="font-mono text-primary text-sm font-semibold mb-4">
                {`{${category.title}}`}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-secondary text-muted-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-6xl mx-auto">
          <div className="p-6 rounded-xl border-gradient bg-card">
            <p className="text-muted-foreground leading-relaxed text-center">
              <span className="text-foreground font-semibold">
                What sets me apart
              </span>{' '}
              is the combination of technical expertise, leadership,
              and creativity. I bring not only coding skills but also
              the ability to mentor, innovate, and scale solutions. I
              thrive at the intersection of technology, team
              leadership, and product strategy. Beyond tech, I am a{' '}
              <span className="text-primary">
                polyglot fluent in five languages
              </span>
              , a
              <a
                href="https://www.pexels.com/@alvisonhunter/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary ml-1"
              >
                photography enthusiast
              </a>
              , deeply engaged in
              <a
                href="https://www.behance.net/alvisonhunter"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary ml-1"
              >
                graphic design and photo restoration
              </a>
              , a musician-in-progress producing
              <a
                href=" https://soundcloud.com/alvison-hunter/sets/biolofibility-album-demo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary mx-1"
              >
                Chill-hop, Hip Hop & Lo-Fi
              </a>
              projects, and a dedicated father—all of which shape my
              creativity, discipline, and resilience in all life struggles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
