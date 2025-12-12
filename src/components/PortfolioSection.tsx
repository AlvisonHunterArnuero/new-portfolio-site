import { Button } from '@/components/ui/button';
import {
  ShieldCheck,
  GraduationCap,
  ClipboardCheck,
  Scale,
  ExternalLink,
  Home,
  MessageCircle,
  Briefcase,
} from 'lucide-react';

const clients = [
  {
    title: 'MGT Insurance Onboarding',
    description:
      'Contributed to property and liability insurance onboarding software for business clients.',
    tags: [
      'Next',
      'TypeScript',
      'Amplitude',
      'Intercom Messenger',
      'Mantine Library',
      'Zod',
      'Auth0',
      'AgentSync',
      'Salesforce',
      'DocuSign',
      'ProducerSync API',
      'HubSpot',
    ],
    industry: 'insurance',
    color: 'from-orange-500/20 to-red-500/20',
    url: 'https://onboarding.mgtinsurance.app/',
  },
  {
    title: 'Udemy',
    description:
      'Delivered enhancements to the pricing page with improved filtering, sorting, & new enhanced shopping cart features.',
    tags: [
      'React',
      'Django',
      'Python',
      'Next.js',
      'TypeScript',
      'GraphQL',
      'Tailwind CSS',
      'Material UI',
      'Sentry IO',
    ],
    industry: 'education',
    color: 'from-yellow-500/20 to-orange-500/20',
    url: 'https://www.udemy.com/topic/pricing/',
  },
  {
    title: 'Amni Network',
    description:
      'Collaborated on GMP compliance software with quote generation and sales order management features.',
    tags: [
      'React',
      'Context API',
      'Internal API',
      'TypeScript',
      'Material UI',
      'Datadog',
    ],
    industry: 'compliance',
    color: 'from-blue-500/20 to-cyan-500/20',
    url: 'https://amni.ai/ezgmp-sales-management/',
  },
  {
    title: 'Catalis',
    description:
      'Helped develop modernization of legacy court and land records systems into modern web applications.',
    tags: [
      'NextJS',
      'TypeScript',
      'ASP.NET Web API',
      'Tailwind CSS',
      'Material UI',
      'Axios',
    ],
    industry: 'government',
    color: 'from-cyan-500/20 to-teal-500/20',
    url: 'https://catalisgov.com/courts-land-records/',
  },
  {
    title: 'TrueHold',
    description:
      'Implemented sale-leaseback software with home equity calculation and financial analysis tools.',
    tags: [
      'NextJS',
      'TypeScript',
      'Llama API',
      'Tailwind CSS',
      'Material UI',
      'Spring Boot',
      'Java',
      'PostgreSQL',
    ],
    industry: 'real-estate-finance',
    color: 'from-red-500/20 to-pink-500/20',
    url: 'https://www.truehold.com/home-equity-loan-calculator',
  },
  {
    title: 'Chatlingual',
    description:
      'Designed and built front-end integrations for customer service platforms with multi-language translation.',
    tags: [
      'React',
      'Redux',
      'TypeScript',
      'SalesForce Lightning',
      'Zendesk',
      'LivePerson',
      'GenesysCloud',
      'DeepL API',
    ],
    industry: 'communications',
    color: 'from-purple-500/20 to-pink-500/20',
    url: 'https://www.chatlingual.com/zendesk-translation/',
  },
];

// Helper function to dynamically choose an icon based on the assigned industry
const getClientIcon = (industry: string) => {
  switch (industry.toLowerCase()) {
    case 'insurance':
      return <ShieldCheck className="w-8 h-8" />; // Protection/Security
    case 'education':
      return <GraduationCap className="w-8 h-8" />; // Learning
    case 'compliance':
      return <ClipboardCheck className="w-8 h-8" />; // Regulation/Checks
    case 'government':
      return <Scale className="w-8 h-8" />; // Justice/Legal
    case 'real-estate-finance':
      return <Home className="w-8 h-8" />; // Home/Property
    case 'communications':
      return <MessageCircle className="w-8 h-8" />; // Support/Messaging
    default:
      return <Briefcase className="w-8 h-8" />; // General Business Fallback
  }
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Domain Expertise{' '}
            <span className="text-gradient">Across Industries</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delve into my newest projects that highlight my dedication
            to excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-500"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${client.color} opacity-50`}
              />
              <div className="relative p-6 h-full flex flex-col bg-card/80 backdrop-blur-sm">
                <div className="flex-1">
                  <div className="flex justify-center items-center w-full mb-4">
                    {/* ICON CONTAINER */}
                    <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ring-2 ring-primary/20">
                      {getClientIcon(client.industry)}
                    </div>
                  </div>
                  <h3 className="text-xl text-center font-bold mb-3 group-hover:text-primary transition-colors">
                    {client.title}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm mb-4 leading-relaxed">
                    {client.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {client.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs font-mono rounded bg-secondary text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="w-full group/btn"
                >
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Demo</span>
                    <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
