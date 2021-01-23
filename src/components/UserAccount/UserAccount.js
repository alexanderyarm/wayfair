import styled from "styled-components";
import { IconContext } from "react-icons";
import { HiChevronDown } from "react-icons/hi";
import { BiUserCircle } from "react-icons/bi";
import { UserAccountMenu } from "./UserAccountMenu/UserAccountMenu";
import { useState } from "react";

const UserAccountContainer = styled.div`
  position: relative;
`;

const StyledUserAccount = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserIcon = styled.span`
  margin-left: 12px;
`;

const Username = styled.span`
  font-size: 13px;
  margin-right: 3px;
  user-select: none;
`;

const UserAccountMenuContainer = styled.div`
  position: absolute;
  top: 22px;
  right: 0;
  padding-top: 12px;
`;

export const UserAccount = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <UserAccountContainer>
      <StyledUserAccount data-testid="user-account" onClick={toggle}>
        <Username data-testid="user-account-name">Username</Username>
        <HiChevronDown />
        <UserIcon>
          <IconContext.Provider value={{ color: "#6d3d73", size: "24px" }}>
            <BiUserCircle />
          </IconContext.Provider>
        </UserIcon>
      </StyledUserAccount>
      {isOpen && (
        <UserAccountMenuContainer>
          <UserAccountMenu />
        </UserAccountMenuContainer>
      )}
    </UserAccountContainer>
  );
};
