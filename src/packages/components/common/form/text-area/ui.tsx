import React from "react";
import styles from "./text-area.module.css";
import { TextAreaOption } from "./interface";

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaOption>(
  ({ onChange, inputProps, ...props }, ref) => {
    const { ...validInputProps } = inputProps || {};

    return (
      <div className={styles["text-area-container"]}>
        <textarea
          {...props}
          className={styles["text-area-item"]}
          ref={ref}
          rows={4}
          onChange={onChange}
          {...validInputProps}
        />
      </div>
    );
  }
);

export { TextArea };
