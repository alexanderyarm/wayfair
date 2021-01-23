import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import data from "./data";
import { UserAccountMenuItem } from "../UserAccountMenuItem/UserAccountMenuItem";
import { useCallback } from "react";
import { LanguageSwitcher } from "../LanguageSwitcher/LanguageSwitcher";

const StyledUserAccountMenu = styled.div`
  background: #fff;
  box-shadow: 0 1px 4px 0 #aaa;
  border-radius: 3px;
  min-width: 180px;
  max-height: 300px;
`;

const MENU_ITEMS = data.map((item) => ({ ...item, id: uuidv4() }));

export const UserAccountMenu = () => {
  const handleLogoutClick = useCallback(() => {
    alert("Logout clicked");
  }, []);

  return (
    <StyledUserAccountMenu role="menu">
      {MENU_ITEMS.map(({ title, url, id }, index) => (
        <UserAccountMenuItem title={title} url={url} key={id} />
      ))}
      <LanguageSwitcher />
      <UserAccountMenuItem title="Logout" onClick={handleLogoutClick} />
    </StyledUserAccountMenu>
  );
};
