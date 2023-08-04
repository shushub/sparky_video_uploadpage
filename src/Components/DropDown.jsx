import React, { useState } from "react";

const DropDown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSave = () => {
  };

  const handleReset = () => {
    setSelectedOption(""); 
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const dropdownItems = [
    {
      label: "공개",
      value: "공개",
      name: "state",
    },
    {
      label: "비공개",
      value: "비공개",
      name: "state",
    },
  ];

  return (
    <div>
      <button
        type="submit"
        className={`dropdown-button ${selectedOption ? "radio-clicked" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <span>
            {selectedOption ? `공개 상태 : ${selectedOption} ` : "공개 상태 ∨"}
            <button type="button" className="reset-button" onClick={handleReset}>
              ✕
            </button>
          </span>
        ) : (
          "공개 상태 ∨"
        )}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-container">
          <div className="radio-container">
            {dropdownItems.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="radio-button"
                  value={item.value}
                  checked={selectedOption === item.value}
                  onChange={handleRadioChange}
                />
                {item.label}
              </label>
            ))}
          </div>
          <button
            type="button"
            className="save-button"
            onClick={handleSave}
          >
            저장
          </button>
        </div>
      )}
    </div>
  );
};

export default DropDown;
