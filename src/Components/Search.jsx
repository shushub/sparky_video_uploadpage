import React, { useState } from 'react';

const DropdownComponent = ({ dropdownItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleButtonClick = () => {
    const filteredItems = dropdownItems.filter(item => item.label.includes(searchQuery));
    setFilteredItems(filteredItems);
    setSelectedOptions(Array(filteredItems.length).fill(false));
  };

  const handleInputChange = (index, value) => {
    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[index] = value;
    setSelectedOptions(newSelectedOptions);
  };

  return (
    <>
      <button
        type="submit"
        className="dropdown-button"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          제목 검색 ∨
      </button>
      {isDropdownOpen && (
        <>
          <div className='inputWrap'>
            <div className="textframe">
              <input
                type="text"
                placeholder="찾는 단어를 입력해 주세요"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              </div>
            <button
                type="submit"
                className='search-button'
                onClick={handleButtonClick}
              > 찾기
              </button>
        
          </div>
          {filteredItems.map((item, index) => (
            <label key={index}>

                  <input
                    type="text"
                    placeholder="찾는 단어를 입력해 주세요"
                    value={item.value}
                    checked={selectedOptions[index] || false}
                    maxLength="50"
                    onChange={() => handleInputChange(index, !selectedOptions[index])}
                  />
                  {item.label}
              </label>
          ))}
        </>
      )}
    </>
  );
};

export default DropdownComponent;

