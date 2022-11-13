import styled from "styled-components";
import { Routes } from "@config/routes";
import { useState } from "react";
import Modal from "../features/ui/modal/modal";
import Image from "next/image";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 5.2rem 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Nav = styled.nav`
  display: flex;
  margin-right: 0.5rem;
  padding-left: 3.4rem;

  & > a {
    text-decoration: none;
    color: gray;
    font-weight: 500;
    margin: 1rem;
  }
`;

const DashboardButton = styled.button`
  background-color: #7f56d9;
  border: solid 1px #7f56d9;
  color: white;
  width: 10.2rem;
  height: 2.5rem;
  border-radius: 5px;

  & > a {
    text-decoration: none;
    color: white;
    font-weight: 500;
  }
`;
const ContactButton = styled.button`
  position: absolute;
  bottom: 2.5rem;
  right: 2.5rem;
  padding: 1rem;
  background: #7f56d9;
  border-radius: 50%;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export async function getStaticProps() {
  const resp = await fetch("https://prolog-api.profy.dev/content-page");
  const hero = await resp.json();

  return {
    props: {
      hero,
    },
  };
}

const IssuesPage = ({ hero }) => {
  const [toggle, setToggle] = useState(false);

  const title = hero[0].sections[0].title;
  const subtitle = hero[0].sections[0].subtitle;
  const image = hero[0].sections[0].image;

  const toggleModal = () => {
    setToggle(() => !toggle);
  };

  return (
    <div>
      <Header>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/logo-large.svg" alt="Prolog logo" />
        <Nav>
          <a href={Routes.home}>Home</a>
          <a href={Routes.products}>Products</a>
          <a href={Routes.documentation}>Documentation</a>
          <a href={Routes.pricing}>Pricing</a>
        </Nav>
        <DashboardButton type="button">
          <a href={Routes.projects}>Open Dashboard</a>
        </DashboardButton>
      </Header>
      <Hero>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </Hero>
      <Image src={image.src} alt="Laptop" width={1200} height={400} />
      <ContactButton onClick={toggleModal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {toggle && <Modal toggleModal={toggleModal} />}
    </div>
  );
};

export default IssuesPage;
