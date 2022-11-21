import styled from "styled-components";
import { color } from "@styles/theme";

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 2rem;
  width: 100%;
  background-color: ${color("gray", 50)};
`;

const FooterContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 2rem;
`;
const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  & > a {
    text-decoration: none;
    color: gray;
    font-weight: 500;
    margin: 1rem;
  }
`;

const Version = styled.p`
  color: ${color("gray", 400)};
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
