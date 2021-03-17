import React, { useState } from "react";
import * as S from "./styled";

const DropdownComponent = ({
  options,
  selectedOption,
  optionChangeHandler,
}) => {
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
        <S.DropdownListContainer>
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
