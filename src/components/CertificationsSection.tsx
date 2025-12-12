import {
  ExternalLink,
  ShieldCheck,
  Cloud,
  Database,
  Award,
  Terminal,
  Box,
  FileBadge,
} from 'lucide-react';
import { Button } from './ui/button';

const certifications = [
  {
    label: 'Survey Contributor - Adoption Report',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/v1696364197/agileAdoption_uozwtc.png',
    badgeDetails:
      'https://www.credly.com/badges/52abf1bb-c773-4232-9111-a217a915ec79/public_url ',
  },
  {
    label: 'Business Model Canvas Essentials',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/v1696364197/businessModelCanvas_fqlvta.png',
    badgeDetails:
      'https://www.credly.com/badges/38f4c6af-c56f-4381-af78-5937bf9c079b/public_url',
  },
  {
    label: 'Introduction to Cybersecurity by Cisco',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/v1696364197/cyberSecurityFundamentals_er44cc.png',
    badgeDetails:
      'https://www.credly.com/badges/954a4089-37ea-49c0-918b-9eca6b5c916b/public_url',
  },
  {
    label: 'Scrum Foundations Certified Expert - SFCE',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:eco/v1632155097/al-hunter-website/01_dywjdx.webp',
    badgeDetails:
      'https://api.badgr.io/public/assertions/dZAOT4ZUTTin4BFuOuve7w?identity__email=alvison%40gmail.com',
  },
  {
    label: 'Container Bootcamp - Fundamentals',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155097/al-hunter-website/02_dr6pv5.webp',
    badgeDetails:
      'https://api.badgr.io/public/assertions/Ki2G8c5tQcSpgC7l95oItg?identity__email=alvison%40gmail.com',
  },
  {
    label: 'Container Bootcamp - Core',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155097/al-hunter-website/03_ojcafr.webp',
    badgeDetails:
      'https://api.badgr.io/public/assertions/xV6qPD4nQ2W-X5EGh-DiPg?identity__email=alvison%40gmail.com',
  },
  {
    label: 'AWS Certified Cloud Practitioner',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155098/al-hunter-website/04_mhcxcd.webp',
    badgeDetails:
      'https://www.youracclaim.com/badges/f84162e8-bce5-42d6-925f-d98a4ff3512a',
  },
  {
    label: 'Scrum Foundation Professional Certificate',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155097/al-hunter-website/05_uiicyb.webp',
    badgeDetails:
      'https://www.youracclaim.com/badges/833754e8-4e94-42f9-ad21-d8129ae14e45',
  },
  {
    label: 'Python for Data Science',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155097/al-hunter-website/06_jdwc29.webp',
    badgeDetails:
      'https://www.youracclaim.com/badges/d44d27c1-6630-45fb-9425-0f5891d45de8',
  },
  {
    label: 'Trained in Scrum Essentials',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155096/al-hunter-website/07_swtkwt.webp',
    badgeDetails:
      'https://www.credential.net/b04b708d-b32b-424a-beb4-e43cc169266a',
  },
  {
    label: 'Docker Essentials: A Developer Introduction',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155096/al-hunter-website/08_yr65pr.webp',
    badgeDetails:
      'https://www.credly.com/badges/1be59885-98c2-4efa-921d-03310facbb4d/public_url',
  },
  {
    label: 'Data Science Tools',
    imageUrl:
      'https://res.cloudinary.com/alvison-hunter/image/upload/q_auto:low/v1632155096/al-hunter-website/09_ekrpdt.webp',
    badgeDetails:
      'https://www.credly.com/badges/6e27ef9d-d5ac-4768-bb48-524b512e11b1/public_url',
  },
];

const getCertIcon = (label: string) => {
  const text = label.toLowerCase();

  // Security Logic
  if (text.includes('security') || text.includes('cyber'))
    return <ShieldCheck className="w-10 h-10" />;

  // Cloud & Infrastructure Logic
  if (text.includes('cloud') || text.includes('aws'))
    return <Cloud className="w-10 h-10" />;

  // Containerization Logic
  if (text.includes('container') || text.includes('docker'))
    return <Box className="w-10 h-10" />;

  // Data Science & Python Logic
  if (
    text.includes('data') ||
    text.includes('python') ||
    text.includes('analytics')
  )
    return <Database className="w-10 h-10" />;

  // Coding Logic
  if (text.includes('developer') || text.includes('tools'))
    return <Terminal className="w-10 h-10" />;

  // Default / Management / Scrum (The "Award" icon)
  return <Award className="w-10 h-10" />;
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-mono text-primary text-sm mb-3 tracking-wider">
            // CERTIFICATIONS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Some of My Recent{' '}
            <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* ICON CONTAINER */}
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 ring-1 ring-primary/20 group-hover:ring-primary">
                  {getCertIcon(cert.label)}
                </div>

                {/* TEXT CONTENT */}
                <span className="text-center font-medium text-sm leading-snug group-hover:text-foreground transition-colors h-10 flex items-center justify-center">
                  {cert.label}
                </span>

                {/* LINK */}
                {cert.badgeDetails && (
                  <Button
                    asChild
                    variant="link"
                    size="sm"
                    className="text-muted-foreground hover:text-primary mt-2"
                  >
                    <a
                      href={cert.badgeDetails}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Verify Credential
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
