export interface SelectBrowserOption {
  value: string;
}

export interface SelectOptionProps {
  options: SelectBrowserOption[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  datalistId: string;
  placeholder: string;
  error?: boolean;
  id?: string;
  onSelect: (value: string) => void;
}

export interface MultipleSelectOption {
  options: { value: string }[];
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  datalistId: string;
  placeholder: string;
  error?: boolean;
  id?: string;
  onSelect: (selectedValues: string[]) => void;
}

export interface SelectTimeProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  placeholder?: string;
  error?: boolean;
  id?: string;
  onSelect: (selectedTime: string) => void;
}
