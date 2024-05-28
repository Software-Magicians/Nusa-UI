import React from "react";
import { classNames } from "../../../lib";
import styles from "./input.module.css";
import { IInputProps } from "./interface";

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  (
    { iconStart, iconEnd, variant = "primary", className = "", ...props },
    ref
  ) => {
    const inputClass = classNames(
      styles.input,
      className,
      {
        [styles["input-primary"]]: variant === "primary",
        [styles["input-outline"]]: variant === "outline",
      } as Record<string, boolean> // Tipe tambahan
    );

    return (
      <div className={styles["input-wrapper"]}>
        <div className={styles["input-container"]}>
          <input ref={ref} className={inputClass} {...props} />
          <label className={styles["label"]}>Your Placeholder</label>
        </div>
        {iconStart && <span className={styles["icon-start"]}>{iconStart}</span>}
        {iconEnd && <span className={styles["icon-end"]}>{iconEnd}</span>}
      </div>
    );
  }
);
