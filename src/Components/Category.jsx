import React, { useState } from "react";

const Category = () => {
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
      label: "게임 동영상",
      value: "게임 동영상",
      name: "video",
    },
    {
      label: "일반 동영상",
      value: "일반 동영상",
      name: "video",
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
            {selectedOption ? `공개 상태 : ${selectedOption} ` : "카테고리 ∨"}
            <button type="button" className="reset-button" onClick={handleReset}>
              ✕
            </button>
          </span>
        ) : (
          "카테고리 ∨"
        )}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-container">
          <div className="radio-container">
            {dropdownItems.map((item, index) => (
              <label key={index}>
                <input
                  type="radio"
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
          > 저장
          </button>
        </div>
      )}
    </div>
  );
};

export default Category;
