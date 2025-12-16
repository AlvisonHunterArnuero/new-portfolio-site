import React from 'react';
import {
  ExternalLink,
  Zap,
  Code,
  User,
  Hash,
  Feather,
  LayoutGrid,
  Camera,
} from 'lucide-react';

const Author: React.FC = () => {
  // Common Tailwind classes for styling
  const linkClass =
    'text-sky-400 hover:text-sky-300 transition-colors duration-200 font-semibold';
  const boldClass = 'font-extrabold text-white';
  const sectionTitleClass =
    'text-xl font-bold text-teal-400 mt-4 mb-2 border-b border-teal-400/30 pb-1 flex items-center gap-2';
  const listItemClass = 'flex items-center gap-2 mb-1';

  return (
    <div className="p-6 bg-gray-800 rounded-xl shadow-2xl text-gray-200 max-w-2xl mx-auto my-8">
      {/* --- Section 1: Core Introduction --- */}
      <h1>About The Author</h1>
      <p className="mb-4 leading-relaxed">
        <strong className={boldClass}>
          <a
            href="https://alvisonhunter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Alvison Hunter Arnuero
          </a>
        </strong>{' '}
        is a{' '}
        <strong className={boldClass}>
          Full-Stack Software Engineer
        </strong>{' '}
        with strong specialization in{' '}
        <strong className={boldClass}>frontend engineering</strong>{' '}
        and{' '}
        <strong className={boldClass}>
          modern JavaScript ecosystems
        </strong>
        . He builds fast, scalable, and SEO-optimized web applications
        using{' '}
        <strong className={boldClass}>
          React, Next.js, Vue, Node.js
        </strong>
        , and cloud-native architectures.
      </p>

      {/* --- Section 2: Focus and Mission --- */}
      <p className="mb-4 leading-relaxed">
        With a deep focus on{' '}
        <strong className={boldClass}>clean UI design</strong>,{' '}
        <strong className={boldClass}>performance</strong>, and{' '}
        <strong className={boldClass}>maintainable code</strong>,{' '}
        <strong className={boldClass}>
          <a
            href="https://alvisonhunter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Alvison
          </a>
        </strong>{' '}
        helps businesses and creators turn ideas into reliable digital
        products.
      </p>

      {/* --- Section 3: Call to Action --- */}
      <div className="p-4 bg-teal-900/50 rounded-lg border border-teal-500/50 my-6">
        <p className="font-bold text-lg text-teal-300 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Ready to talk business? Let's connect!:
        </p>
        <p className="mt-2 pl-1">
          👉 Explore{' '}
            custom React, NextJS, Remix, Angular, Gatsby & Vue web development,
            frontend architecture,
            headless CMS and full-stack solutions
          at{' '}
          <strong className={boldClass}>
            <a
              href="https://www.codecrafterslabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClass} flex items-center gap-1 inline-flex`}
            >
              https://www.codecrafterslabs.com
              <ExternalLink className="w-4 h-4" />
            </a>
          </strong>
        </p>
      </div>

      {/* --- Section 4: Social Links --- */}
      <h3 className={sectionTitleClass}>
        <User className="w-5 h-5" />
        Find Alvison Hunter Online:
      </h3>

      <ul className="list-none p-0 space-y-2">
        <li className={listItemClass}>
          <Feather className="w-4 h-4 text-gray-400" />
          <strong className="text-white min-w-[70px]">Medium:</strong>
          <a
            href="https://medium.com/@alvisonhunter"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://medium.com/@alvisonhunter
          </a>
        </li>
        <li className={listItemClass}>
          <Code className="w-4 h-4 text-gray-400" />
          <strong className="text-white min-w-[70px]">Dev.to:</strong>
          <a
            href="https://dev.to/alvisonhunter"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://dev.to/alvisonhunter
          </a>
        </li>
        <li className={listItemClass}>
          <Hash className="w-4 h-4 text-gray-400" />
          <strong className="text-white min-w-[70px]">
            Hashnode:
          </strong>
          <a
            href="https://hashnode.com/@alvisonhunter"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://hashnode.com/@alvisonhunter
          </a>
        </li>
        <li className={listItemClass}>
          <LayoutGrid className="w-4 h-4 text-gray-400" />
          <strong className="text-white min-w-[70px]">
            Behance:
          </strong>
          <a
            href="https://www.behance.net/alvisonhunter"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://www.behance.net/alvisonhunter
          </a>
        </li>
        <li className={listItemClass}>
          <Camera className="w-4 h-4 text-gray-400" />
          <strong className="text-white min-w-[70px]">Pexels:</strong>
          <a
            href="https://www.pexels.com/@alvisonhunter/"
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            https://www.pexels.com/@alvisonhunter/
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Author;
