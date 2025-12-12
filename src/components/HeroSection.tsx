import { Button } from '@/components/ui/button';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react';

import photoSrc from '/alvison-hunter.png';

const HeroSection = () => {
  const PHOTO_URL = photoSrc;
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_hsl(var(--background))_70%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-slide-up">
            <p className="font-mono text-primary text-sm md:text-base mb-4 tracking-wider">
              &lt;Hello World /&gt;
            </p>
            {/* 2. AVATAR IMAGE COMPONENT using standard <img> tag */}
            <div className="mx-auto w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl transition-transform duration-500 hover:scale-105 hover:border-sky-600">
              <img
                src={PHOTO_URL}
                alt="Alvison Hunter - Software Engineer"
                // Set sizes explicitly for consistent rendering
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            {/* END AVATAR IMAGE COMPONENT */}

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-foreground">I'm </span>
              <span className="text-gradient">Alvison Hunter</span>
            </h1>
            <p className="font-mono uppercase text-muted-foreground text-sm md:text-lg mb-8">
              JavaScript | TypeScript | Python | C# | Golang
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Full-Stack Software Engineer specializing in scalable
              web applications, modern frontend frameworks, and
              cloud-native backend solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Button variant="hero" size="lg" asChild>
                <a href="#portfolio">
                  View My Work
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="lg">
                <a
                  href="/cv/ahunter2026CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/AlvisonHunterArnuero"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/alvisonhunter/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:alvison@gmail.com"
                className="p-3 rounded-full bg-secondary hover:bg-primary/20 hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
