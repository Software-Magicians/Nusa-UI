import React from "react";
import styles from "./checkbox.module.css";
import { CheckboxOption } from "./interface";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxOption>(
  ({ checked, onChange, label }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    };

    return (
      <label className={styles.checkbox}>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          ref={ref}
          className={styles.input}
        />
        <span className={styles.checkmark}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        </span>
        {label}
      </label>
    );
  }
);

export { Checkbox };
