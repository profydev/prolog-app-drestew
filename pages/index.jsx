import styled from "styled-components";
import { Routes } from "@config/routes";
import { useState } from "react";
import Modal from "../features/ui/modal/modal";

const Header = styled.header`
  width: 100%;
  height: 80px;
  padding: 0 2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;

  & > a {
    text-decoration: none;
    color: gray;
    font-weight: 500;
  }
`;

const DashboardButton = styled.button`
  background-color: #7f56d9;
  color: white;
  width: 10rem;
  height: 2.5rem;
  border-radius: 10px;

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
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border: none;
  cursor: pointer;

  &:hover {
    background: #6941c6;
  }
`;

const IssuesPage = () => {
  const [toggle, setToggle] = useState(false);

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
      <ContactButton onClick={toggleModal}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/icons/message.svg" alt="Contact" />
      </ContactButton>
      {toggle && <Modal />}
    </div>
  );
};

export default IssuesPage;
