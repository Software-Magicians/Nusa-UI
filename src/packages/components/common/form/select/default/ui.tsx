import React from "react";
import styles from "./select.module.css";
import { SelectOptionProps } from "../interface";
import classNames from "../../../../../lib/classnames";

const Select = React.forwardRef<HTMLDivElement, SelectOptionProps>(
  (
    {
      options,
      inputProps,
      datalistId,
      error,
      id,
      placeholder,
      onSelect,
      ...props
    },
    ref
  ) => {
    const [searchValue, setSearchValue] = React.useState<string>("");
    const [dropdownVisible, setDropdownVisible] =
      React.useState<boolean>(false);
    const [, setInputClicked] = React.useState<boolean>(false);
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
      setInputClicked(true);
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

    const highlightText = (text: string) => {
      const startIndex = text.toLowerCase().indexOf(searchValue.toLowerCase());
      if (startIndex === -1) return text;
      const endIndex = startIndex + searchValue.length;
      const highlightedText =
        text.substring(0, startIndex) +
        `<strong>${text.substring(startIndex, endIndex)}</strong>` +
        text.substring(endIndex);
      return <span dangerouslySetInnerHTML={{ __html: highlightedText }} />;
    };

    const filteredOptions = options.filter((option) =>
      option.value.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (
      <div>
        <div ref={ref} {...props} className={styles["select"]}>
          <div
            className={classNames(
              styles["select-container"],
              error ? styles["error"] : ""
            )}
          >
            <input
              list={datalistId}
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
              className={
                !dropdownVisible
                  ? styles["select-svg"]
                  : styles["select-svg-rotate"]
              }
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
                  onClick={() => handleOptionSelect(option.value)}
                >
                  {highlightText(option.value)}
                </div>
              ))}
            </div>
          )}
          {error && (
            <label htmlFor={id} className={styles["error-label"]}>
              Error: Please correct the input
            </label>
          )}
        </div>
      </div>
    );
  }
);

export { Select };
