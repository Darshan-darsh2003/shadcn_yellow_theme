import { Button } from "@/components/ui/button";

interface OutlinedButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

interface ButtonGhostProps {
  text: string;
  className?: string;
}

interface ButtonIconProps {
  icon: React.ReactNode;
  onClick?: () => void;
}

export function ButtonOutline({
  text,
  className,
  onClick,
}: OutlinedButtonProps) {
  return (
    <Button variant="outline" className={className} onClick={onClick}>
      {text}
    </Button>
  );
}

export function ButtonGhost({ text, className }: ButtonGhostProps) {
  return (
    <Button variant="ghost" className={className}>
      {text}
    </Button>
  );
}

export function ButtonIconOutlined({ icon, onClick }: ButtonIconProps) {
  return (
    <Button variant="outline" size="icon" onClick={onClick}>
      {icon}
    </Button>
  );
}

export function ButtonIcon({ icon, onClick }: ButtonIconProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onClick}
      className="text-neutral-400"
    >
      {icon}
    </Button>
  );
}
