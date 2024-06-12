import React from "react";
import styles from "./select-time.module.css";
import { SelectTimeProps } from "../interface";

const SelectTime = React.forwardRef<HTMLDivElement, SelectTimeProps>(
  ({ inputProps, placeholder, onSelect, ...props }, ref) => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [dropdownVisible, setDropdownVisible] =
      React.useState<boolean>(false);
    const listContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (ref && typeof ref !== "function" && listContainerRef.current) {
        listContainerRef.current.style.width = `${ref.current?.offsetWidth}px`;
      }
    }, [dropdownVisible, ref]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      const searchTerm = e.target.value;
      setSearchValue(searchTerm);
      setDropdownVisible(true);
    };

    const handleInputClick = () => {
      setDropdownVisible(true);
    };

    const clearSearch = () => {
      setSearchValue("");
      setDropdownVisible(false);
    };

    const handleOptionSelect = (value: string) => {
      setSearchValue(value);
      setDropdownVisible(false);
      onSelect(value);
    };

    const generateTimeOptions = () => {
      const times = [];
      const start = 0;
      const end = 24 * 60;
      const step = 30;

      for (let i = start; i < end; i += step) {
        const hours = Math.floor(i / 60);
        const minutes = i % 60;
        const timeString = `${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}`;
        times.push(timeString);
      }

      return times;
    };

    const filteredOptions = generateTimeOptions().filter((option) =>
      option.includes(searchValue)
    );

    return (
      <div ref={ref} {...props} className={styles["select-time"]}>
        <div className={styles["select-container"]}>
          <input
            value={searchValue}
            onClick={handleInputClick}
            onChange={handleSearch}
            placeholder={placeholder}
            {...inputProps}
            className={styles["select-input"]}
          />
          {searchValue && (
            <svg
              onClick={clearSearch}
              className={styles["select-svg"]}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9l-3-3a1 1 0 00-1.414 1.414L8.586 10l-3 3a1 1 0 101.414 1.414L10 11.414l3 3a1 1 0 001.414-1.414l-3-3 3-3A1 1 0 1013 6l-3 3z"
                clipRule="evenodd"
              />
            </svg>
          )}
          <svg
            onClick={() => setDropdownVisible(!dropdownVisible)}
            className={(styles["select-svg"], styles["select-svg-rotate"])}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {dropdownVisible && (
          <div
            className={styles["select-list-container"]}
            ref={listContainerRef}
          >
            {filteredOptions.map((option, index) => (
              <div
                key={index}
                className={styles["select-list-item"]}
                onClick={() => handleOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export { SelectTime };
