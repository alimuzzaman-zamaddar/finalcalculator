import { useState } from "react";


const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    { label: 'Select Subject', value: '' },
    { label: 'English', value: 'English' },
    { label: 'Math', value: 'Math' },
    { label: 'Science', value: 'Science' },
    { label: 'Language', value: 'Language' },
  ];

  const handleSelectOption = (value) => {
    setSelectedOption(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="md:w-1/4 relative">
      <div
        className="py-3 px-[18px] bg-[#FDF0EA] mb-6 border-[1px] border-[#E9EDF3] rounded-lg w-full cursor-pointer"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {selectedOption || 'Select Subject'}
      </div>
      {isDropdownOpen && (
        <div className="absolute top-full left-0 bg-white shadow-md border-[1px] border-[#E9EDF3] rounded-lg w-full mt-1">
          {options.map((option) => (
            <div
              key={option.value}
              className="py-2 px-4 cursor-pointer hover:bg-gray-200"
              onClick={() => handleSelectOption(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
