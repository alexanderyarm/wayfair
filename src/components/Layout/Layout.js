import styled from "styled-components";
import { Header } from "../Header/Header";
import { Content } from "../Content/Content";

const StyledLayout = styled.div`
  display: grid;
  grid-template-areas:
    "nav header"
    "nav content";
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  min-height: 100vh;
`;

const StyledNavigation = styled.nav`
  grid-area: nav;
  border-right: 1px solid #ccc;
  height: 100%;
`;

const StyledHeader = styled.header`
  background: #fff;
  grid-area: header;
  position: sticky;
  top: 0;
`;

const StyledContent = styled.main`
  grid-area: content;
  height: 2000px;
`;

export const Layout = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <Header />
      </StyledHeader>

      <StyledNavigation>Navigation</StyledNavigation>

      <StyledContent>
        <Content />
      </StyledContent>
    </StyledLayout>
  );
};
