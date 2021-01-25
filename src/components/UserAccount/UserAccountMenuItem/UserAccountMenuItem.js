import styled from "styled-components";

const Item = styled.li``;

const ItemLink = styled.a`
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
    <Item role="menuitem">
      <ItemLink href={url || ""} onClick={onClick}>
        {title}
      </ItemLink>
    </Item>
  );
};
