import { Layers, PenTool, Code } from 'lucide-react';

const services = [
  {
    icon: Layers,
    title: 'UX/UI Design',
    description:
      'I design intuitive, user-centered interfaces that are easy to learn, visually engaging, and built for usability. From clean marketing websites to complex web applications, I focus on clarity, accessibility, and seamless user experiences that drive engagement.',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description:
      'Strong visuals are essential to building trust and recognition online. I create thoughtful graphic design and branding assets that communicate your message clearly, strengthen your identity, and support a cohesive digital presence across platforms.',
  },
  {
    icon: Code,
    title: 'Web Development',
    description:
      'I build fast, scalable, and secure websites and web applications using modern frontend technologies. Whether you’re launching a new product or improving an existing one, I translate your ideas into reliable, high-performance digital solutions aligned with your business goals.',
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
            Turning Ideas Into High-Impact
            <span className="text-gradient pl-3">
              Digital Solutions
            </span>
          </h2>
          <p className="text-muted-foreground max-w-4xl mx-auto">
            I help businesses and creators design, build, and scale
            modern digital products tailored to real user needs.
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
