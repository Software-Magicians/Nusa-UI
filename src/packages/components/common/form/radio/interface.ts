import React from "react";

export interface RadioOption {
  value: string;
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  label: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}
