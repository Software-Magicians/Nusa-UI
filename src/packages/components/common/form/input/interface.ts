import React from "react";
export interface InputOption {
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  error?: boolean;
  id?: string;
  value?: string;
  placeholder?: string;
  label?: string;
}
