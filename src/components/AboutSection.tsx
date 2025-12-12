import { Code2, Palette, Users, Heart } from "lucide-react";

const aboutCards = [
  {
    icon: Palette,
    title: "Web & Graphic Design, Branding, UX/UI & Tech Enthusiast",
    description:
      "Experienced Frontend Web Developer proficient in jQuery, React, and more. Skilled in crafting GraphQL and REST APIs using NodeJS, Express, and MongoDB, with expertise in headless CMS like NetlifyCMS and Contentful.",
  },
  {
    icon: Code2,
    title: "Web Development with JavaScript & Python Flask",
    description:
      "Experienced Python Developer specializing in Flask, Bottle, and FastAPI, with a strong focus on improving product delivery through continuous learning and testing. Proficient in Machine Learning libraries including NumPy, Pandas, Matplotlib, PyTorch, Scikit-learn, and TensorFlow. Currently expanding skills in Golang, Elixir, and Rust.",
  },
  {
    icon: Users,
    title: "Linguist, Musician, Proud Father of 2 Brave Warriors",
    description:
      "I excel at seamless collaboration across diverse hierarchies and domains, with strong leadership skills. Proficient in Agile/Scrum, I master platforms like Jira, Trello, Notion, ClickUp, Asana, and Shortcut. My experience as Head of Web Development and Quality Assurance equips me with personnel management expertise.",
  },
  {
    icon: Heart,
    title: "Founder & Managing Partner of CodeCrafters Labs",
    description:
      "I'm immensely proud to be the father of two extraordinary kids, Declan Jaleel and Liam André. Their unwavering bravery, exceptional brilliance, and lionhearted courage inspire me daily.",
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
            Get to Know <span className="text-gradient">Who I Am</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer dedicated to crafting exceptional digital experiences
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
