import styled from "styled-components";

export const Item = styled.a`
  align-items: center;
  display: flex;
  font-size: 13px;
  justify-content: space-between;
  padding: 14px 18px;
  position: relative;
  width: 100%;
`;

export const UserAccountMenuItem = ({ title, url, onClick }) => {
  return (
    <Item href={url} onClick={onClick} role="menuitem">
      {title}
    </Item>
  );
};
