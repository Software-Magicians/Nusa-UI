import React from "react";
import styles from "./input.module.css";
import { InputOption } from "./interface";

const Input = React.forwardRef<HTMLInputElement, InputOption>(
  ({ onChange, inputProps, error, id, ...props }, ref) => {
    return (
      <div>
        <div
          {...props}
          className={`${styles["input-container"]} ${
            error ? styles["error"] : ""
          }`}
        >
          <input
            className={`${styles["input-item"]} ${
              error ? styles["error"] : ""
            }`}
            type="text"
            ref={ref}
            onChange={onChange}
            id={id}
            {...inputProps}
          />
        </div>
        {error && (
          <label htmlFor={id} className={styles["error-label"]}>
            Error: Please correct the input
          </label>
        )}
      </div>
    );
  }
);

export { Input };
