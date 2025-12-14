import { Link } from 'react-router-dom';

type FloatingAnchorProps = {
  anchorCaption?: string;
  anchorLink?: string;
  anchorIcon?: React.ReactNode;
};

const FloatingAnchor = ({
  anchorCaption,
  anchorLink,
  anchorIcon,
}: FloatingAnchorProps) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link
        to={anchorLink || '/'}
        className="
            bg-blue-500 dark:bg-sky-600
            text-white font-semibold
            py-3 px-3 rounded-full
            shadow-xl hover:bg-blue-600
            dark:hover:bg-sky-700
            transition-colors duration-200
            flex items-center justify-center
            w-14 h-14
            md:w-auto md:px-6 md:space-x-2
          "
      >
        {/* Lucide Icon: Always visible */}
        {anchorIcon}

        {/* Text: Hidden on mobile, visible on medium and up */}
        <span className="hidden md:inline">{anchorCaption}</span>
      </Link>
    </div>
  );
};

export default FloatingAnchor;
