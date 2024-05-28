import React from "react";
import { classNames } from "../../../lib";
import styles from "./button.module.css";
import { IButtonProps } from "./types";

export const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      iconStart,
      iconEnd,
      children,
      variant = "primary",
      className = "",
      ...props
    },
    ref
  ) => {
    const rippleRef = React.useRef<HTMLSpanElement>(null);

    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (rippleRef.current) {
        const button = rippleRef.current.parentElement as HTMLElement;
        const size = Math.max(button.offsetWidth, button.offsetHeight);
        const pos = button.getBoundingClientRect();
        const rootFontSize = parseFloat(
          getComputedStyle(document.documentElement).fontSize
        );
        const x = (event.clientX - pos.left - size / 2) / rootFontSize;
        const y = (event.clientY - pos.top - size / 2) / rootFontSize;

        const ripple = document.createElement("span");
        ripple.style.width = ripple.style.height = `${size / rootFontSize}rem`;
        ripple.style.left = `${x}rem`;
        ripple.style.top = `${y}rem`;
        ripple.classList.add(styles.ripple);
        button.appendChild(ripple);

        setTimeout(() => {
          button.removeChild(ripple);
        }, 500);
      }
    };

    const buttonClass = classNames(styles.button, className, {
      [styles["button-primary"]]: variant === "primary",
      [styles["button-outline"]]: variant === "secondary",
      [styles["button-gost"]]: variant === "tertiary",
    });

    return (
      <button
        ref={ref}
        className={buttonClass}
        {...props}
        onClick={handleClick}
      >
        {iconStart && <span className={styles["icon-start"]}>{iconStart}</span>}
        <span className={styles["button-placeholder"]}>{children}</span>
        {iconEnd && <span className={styles["icon-end"]}>{iconEnd}</span>}
        <span ref={rippleRef}></span>
      </button>
    );
  }
);
