import styled from "styled-components";
import { color, breakpoint } from "@styles/theme";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${color("gray", 50)};
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  @media (max-width: ${breakpoint("desktop")}) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    padding: 2rem;
    gap: 2rem;

    & > nav {
      display: flex;
      gap: 0;
      order: -2;
    }

    & > img {
      order: -1;
    }
  }
`;
const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  & > a {
    text-decoration: none;
    color: gray;
    font-weight: 500;
    margin: 0 1rem;
  }
`;

const Version = styled.p`
  color: ${color("gray", 400)};
  margin: 0;
`;

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <Version>17.05.04</Version>
        <Nav>
          <a href="#">Docs</a>
          <a href="#">API</a>
          <a href="#">Help</a>
          <a href="#">Community</a>
        </Nav>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-small.svg" alt="Prolog logo" />
      </FooterContent>
    </FooterContainer>
  );
}
