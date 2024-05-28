export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "tertiary" | "";
}
