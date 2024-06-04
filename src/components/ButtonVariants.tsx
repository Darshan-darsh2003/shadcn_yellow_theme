import { Button } from "@/components/ui/button";

interface OutlinedButtonProps {
  text: string;
  className?: string;
}

interface ButtonGhostProps {
  text: string;
  className?: string;
}

export function ButtonOutline({ text, className }: OutlinedButtonProps) {
  return (
    <Button variant="outline" className={className}>
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
