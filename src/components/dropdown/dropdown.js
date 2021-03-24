import React, { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import * as S from "./styled";

const DropdownComponent = ({
  options,
  selectedOption,
  optionChangeHandler,
}) => {
  const dropdownRef = useRef(null);
  useOutsideClick(dropdownRef, () => setIsOpen(false));
  const [isOpen, setIsOpen] = useState(false);
  const toggleHandler = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    optionChangeHandler(value);
    setIsOpen(false);
  };

  return (
    <>
      <S.DropdownHeader onClick={toggleHandler}>
        {selectedOption}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownListContainer ref={dropdownRef}>
          <S.DropdownList>
            {options.map((option, index) => (
              <S.DropdownItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </S.DropdownItem>
            ))}
          </S.DropdownList>
        </S.DropdownListContainer>
      )}
    </>
  );
};

export default DropdownComponent;
