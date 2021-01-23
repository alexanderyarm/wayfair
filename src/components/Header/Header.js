import styled from "styled-components";
import { UserAccount } from "../UserAccount/UserAccount";

const StyledHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 0 24px;
`;

const Logo = styled.div`
  align-items: center;
  display: flex;
`;

const LogoImage = styled.img`
  width: 120px;
`;

const LogoText = styled.span`
  color: #6e6e6f;
  font-size: 16px;
  margin-left: 2px;
  text-transform: uppercase;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <LogoImage
          src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Wayfair_logo_with_tagline.png"
          alt="Logo"
        />
        <LogoText>Partner Home</LogoText>
      </Logo>
      <UserAccount />
    </StyledHeader>
  );
};
