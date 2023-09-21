import React, { useState } from "react";
import Container from "../Containter/Container";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const TopNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const options = ["rahim", "karim", "selim"];
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-[#DA3C3C] p-3">
      <Container>
        <div className="text-white flex justify-between">
          <div>
            <p c>01738593694 | tamal@gmail.com</p>
          </div>
          <div className="relative inline-block">
            <div
              className=" flex items-center justify-center gap-2 cursor-pointer"
              onClick={toggleDropdown}
            >
              <p>All offers</p>
              {isDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {isDropdownOpen && (
              <ul className="absolute top-full left-0  bg-white border border-gray-300 rounded shadow-md">
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-16 py-2 text-black hover:bg-gray-100 hover:text-[#DA3C3C] cursor-pointer"
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopNav;
