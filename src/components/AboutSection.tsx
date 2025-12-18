import {
  Code2,
  Palette,
  Users,
  Heart,
  Baby,
  Layers,
} from 'lucide-react';

const aboutCards = [
  {
    icon: Palette,
    title: 'Design & Development',
    description:
      'Focused on building intuitive, accessible interfaces using RWD, design systems, & component‑driven architecture to bridge design and engineering seamlessly.',
  },
  {
    icon: Code2,
    title: 'Core Development',
    description:
      'Specialized in modern frontend frameworks like React, Next.js, Vue, and TypeScript, with supporting backend experience in Python, Node.js, and API‑driven systems.',
  },
  {
    icon: Layers,
    title: 'Architecture, Performance & Scalability',
    description:
      'Expert in architecting maintainable, high‑performance frontends with a strong emphasis on accessibility, clean code, and long‑term UI sustainability.',
  },
  {
    icon: Users,
    title: 'Leadership & Mentorship',
    description:
      'Former Head of Web Development experienced in leading Agile teams, mentoring developers, and collaborating cross‑functionally to deliver high‑quality software solutions.',
  },
  {
    icon: Heart,
    title: 'Founder, CodeCrafters Labs',
    description:
      'Founder of a mentorship platform that guides aspiring developers through structured programs in modern frontend technologies and industry best practices.',
  },
  {
    icon: Baby,
    title: 'Beyond Code',
    description:
      'Inspired daily by my two sons, whose curiosity and creativity reinforce the discipline and problem‑solving mindset I apply to every project.',
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // ABOUT ME
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who I Am &
            <span className="text-gradient pl-1">What I Build</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            A Senior Frontend Engineer dedicated to crafting scalable,
            high‑performance web applications through innovative
            technology and user‑centric design.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aboutCards.map((card, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <card.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
