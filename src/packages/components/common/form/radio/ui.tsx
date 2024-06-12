import React from "react";
import styles from "./radio.module.css";
import { RadioOption } from "./interface";

const Radio = React.forwardRef<HTMLInputElement, RadioOption>(
  ({ value, checked, onChange, label, ...inputProps }, ref) => {
    return (
      <label className={styles["radio-label"]}>
        <input
          type="radio"
          ref={ref}
          value={value}
          checked={checked}
          onChange={onChange}
          {...inputProps}
        />
        <span className={styles["radio-button"]}></span>
        {label}
      </label>
    );
  }
);

export { Radio };
