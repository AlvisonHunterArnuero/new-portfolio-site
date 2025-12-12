import { Button } from '@/components/ui/button';
import { Mail, Phone, Send } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // GET IN TOUCH
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Create Something{' '}
            <span className="text-gradient">Awesome?</span>
          </h2>
          <p className="text-muted-foreground mb-12 leading-relaxed">
            Partner with us! The first step is a conversation. Tell us
            about your goals using our quick project planner, or
            select a time to meet virtually. We'll listen, ask the
            right questions, and co-create a plan tailored to your
            unique needs.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                <Mail className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">
                Drop Us an E-mail
              </h3>
              <a
                href="mailto:alvison@gmail.com"
                className="text-primary hover:underline font-mono text-sm"
              >
                alvison@gmail.com
              </a>
            </div>

            <div className="p-6 rounded-xl card-gradient border border-border hover:border-primary/50 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-all duration-300">
                <Phone className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold mb-2">
                Old-Fashioned Phone Calls
              </h3>
              <a
                href="tel:+5058863.8751"
                className="text-primary hover:underline font-mono text-sm"
              >
                505.8863.8751
              </a>
            </div>
          </div>

          <Button variant="hero" size="lg" asChild>
            <a
              href="https://wa.me/50588638751"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
