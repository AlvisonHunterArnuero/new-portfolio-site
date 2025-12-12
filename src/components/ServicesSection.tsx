import { Layers, PenTool, Code } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "UX/UI Design",
    description:
      "I excel in designing user interfaces that prioritize user-friendliness and quick learning. Whether you need a sleek, feature-rich look or a user-centered web app interface, I have the expertise to help you achieve your goals effectively.",
  },
  {
    icon: PenTool,
    title: "Graphic Design",
    description:
      "In the digital age, compelling visuals and a well-designed website are essential for effective branding. With my expertise, I can create tailored branding materials that define your unique identity and enhance your online presence.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Transform your website or app with a flawless design and advanced technology. Share your needs, and I'll deliver a competitive quote and top-notch service, prioritizing your satisfaction.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We Turn Your Ideas Into <span className="text-gradient">Reality</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer a range of solutions to support our client's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center glow-primary">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
