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
    title: 'Web & Graphic Design, Branding, UX/UI & Tech Enthusiast',
    description:
      'Senior Frontend Engineer focused on crafting intuitive, accessible, and high-performance user interfaces. Experienced in responsive design, design systems, and component-driven architectures that seamlessly connect design and engineering.',
  },
  {
    icon: Code2,
    title: 'Web Development with JavaScript & Python',
    description:
      'Frontend-focused Web Developer specializing in modern JavaScript and TypeScript frameworks such as React, Next.js, Vue, and Angular. Brings supporting backend experience with Python, Flask, FastAPI, Node.js, and API-driven systems.',
  },
  {
    icon: Layers,
    title: 'Frontend Architecture, Performance & Scalability',
    description:
      'Expert in building scalable frontend architectures with a strong emphasis on performance, maintainability, accessibility, and clean code. Passionate about long-term UI sustainability, optimized user flows, and real business impact.',
  },
  {
    icon: Users,
    title: 'Engineering Leadership, Mentorship & Collaboration',
    description:
      'Former Head of Web Development with experience leading teams in Agile environments. Skilled in mentoring developers, enforcing frontend standards, and collaborating cross-functionally to deliver high-quality software solutions.',
  },
  {
    icon: Heart,
    title: 'Founder & Managing Partner of CodeCrafters Labs',
    description:
      'Founder of CodeCrafters Labs, mentoring aspiring developers through structured programs focused on modern frontend technologies, best practices, and real-world readiness for professional software careers.',
  },
  {
    icon: Baby,
    title: 'Proud Father of Two, Lifelong Learner',
    description:
      'Proud father of two incredible sons whose curiosity, resilience, and creativity inspire my discipline, leadership, and problem-solving mindset—values I bring into every project and professional relationship.',
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
            A passionate Frontend Engineer dedicated to crafting
            exceptional scalable, high-performance, digital
            experiences through innovative web technologies and
            user-centric design.
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
