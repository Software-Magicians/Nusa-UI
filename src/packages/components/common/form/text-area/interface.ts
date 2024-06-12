import React, { ChangeEvent } from "react";
export interface TextAreaOption
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  inputProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
