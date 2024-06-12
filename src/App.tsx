import React from "react";
import "./App.css";
import {
  MultipleSelect,
  Select,
  SelectTime,
} from "./packages/components/common/form/select";
import { Input } from "./packages/components/common/form/input";
import { TextArea } from "./packages/components/common/form/text-area";
import { Radio } from "./packages/components/common/form/radio";
import { Checkbox } from "./packages/components/common/form/checkbox";

function App() {
  const [selectValue, setSelectedValue] = React.useState("");
  const handleSelect = (selectedValues: any) => {
    console.log("Selected values:", selectedValues);
  };

  const [checkedItems, setCheckedItems] = React.useState<{
    [key: string]: boolean;
  }>({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const handleCheckboxChange = (name: string) => {
    setCheckedItems({
      ...checkedItems,
      [name]: !checkedItems[name],
    });
  };
  const [selectedOption, setSelectedOption] = React.useState("option1");

  const handleOptionChange = (e: any) => {
    setSelectedOption(e.target.value);
  };
  const inputMultipleProps = {
    id: "custom-input",
    name: "custom-select",
    className: "additional-class",
    "aria-label": "Custom Select",
  };

  const handleTimeSelect = (selectedTime: string) => {
    console.log("Selected time:", selectedTime);
  };

  const handleInputChange = (selectedTime: any) => {
    console.log("Selected time:", selectedTime);
  };

  const inputTimeProps = {
    id: "custom-time-input",
    name: "custom-time-select",
    className: "additional-class",
    "aria-label": "Custom Time Select",
  };

  return (
    <div>
      <div>
        <div className="base-input">
          <input className="input" placeholder="hello bro" required />
          <label className="label-input">Hello</label>
        </div>
      </div>
      <div className="my-5">
        <Select
          options={browserOptions}
          datalistId="options"
          onSelect={(value) => setSelectedValue(value)}
          placeholder="Select items"
          error={true}
        />
        <br />
        <Input
          onChange={handleInputChange}
          inputProps={{
            id: "custom-text-input",
            name: "custom-text-input",
            placeholder: "Enter your text here...",
          }}
          label="Hello"
          error={false}
          id={"a2"}
        />
        <br />
        <TextArea
          onChange={handleInputChange}
          inputProps={{
            id: "custom-text-input",
            name: "custom-text-input",
            className: "additional-class",
            placeholder: "Enter your text here...",
          }}
          placeholder={"hello"}
        />
        <br />
        <MultipleSelect
          options={browserOptions}
          inputProps={inputMultipleProps}
          datalistId="example-datalist"
          placeholder="Multiple Select items"
          onSelect={handleSelect}
        />
        <br />
        <SelectTime
          inputProps={inputTimeProps}
          placeholder="Select time"
          onSelect={handleTimeSelect}
        />
        <div>
          <Radio
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleOptionChange}
            label="Option 1"
          />
          <Radio
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
            label="Option 2"
          />
          <Radio
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
            label="Option 3"
          />
          <p>Selected option: {selectedOption}</p>
        </div>
        <div>
          <Checkbox
            checked={checkedItems.checkbox1}
            onChange={() => handleCheckboxChange("checkbox1")}
            label="Checkbox 1"
          />
          <Checkbox
            checked={checkedItems.checkbox2}
            onChange={() => handleCheckboxChange("checkbox2")}
            label="Checkbox 2"
          />
          <Checkbox
            checked={checkedItems.checkbox3}
            onChange={() => handleCheckboxChange("checkbox3")}
            label="Checkbox 3"
          />
          <p>Checked items: {JSON.stringify(checkedItems)}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

const browserOptions = [
  { value: "Internet Explorer" },
  { value: "Firefox" },
  { value: "Chrome" },
  { value: "Opera" },
  { value: "Safari" },
  { value: "Safara" },
  { value: "International" },
];
