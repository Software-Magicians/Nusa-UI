export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}
