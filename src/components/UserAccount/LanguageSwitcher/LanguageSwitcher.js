import styled from "styled-components";
import { IconContext } from "react-icons";
import { menuItemStyles } from "../shared/menuItemStyles";
import { HiChevronDown } from "react-icons/hi";
import { useState } from "react";
import { UserAccountMenuItem } from "../UserAccountMenuItem/UserAccountMenuItem";

export const StyledLanguageSwitcher = styled.button`
  ${menuItemStyles}
  background: none;
  border: 0;
  color: #3b3b3b;
  padding-right: 12px;
`;
export const LanguageSwitcherList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledLanguageSwitcher onClick={toggle}>
        English(UK)
        <IconContext.Provider value={{ size: "18px" }}>
          <HiChevronDown />
        </IconContext.Provider>
      </StyledLanguageSwitcher>

      {isOpen && (
        <LanguageSwitcherList>
          <UserAccountMenuItem title="LanguageList" />
        </LanguageSwitcherList>
      )}
    </>
  );
};
