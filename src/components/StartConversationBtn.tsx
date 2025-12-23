import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface StartConversationBtnProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const StartConversationBtn = ({
  onClick,
  className,
  children,
}: StartConversationBtnProps) => {
  return (
    <Button
      onClick={onClick}
      className={cn('flex items-center gap-2', className)}
      aria-label="Start a conversation"
    >
      <MessageCircle className="h-4 w-4" />
      {children || 'Start Conversation'}
    </Button>
  );
};

export { StartConversationBtn };
