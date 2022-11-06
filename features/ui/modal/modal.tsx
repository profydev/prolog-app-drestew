import styled from "styled-components";
import Image from "next/image";
import mail from "../../../public/icons/mail.svg";

interface modal {
  toggleModal: () => void;
}

export default function Modal({ toggleModal }: modal) {
  const ModalOverlay = styled.div`
    background: #505050;
    opacity: 0.7;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const ModalContent = styled.div`
    height: 15rem;
    width: 25rem;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    text-align: center;
  `;
  const Header = styled.h2`
    font-size: large;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    gap: 2rem;
  `;
  const CancelButton = styled.button`
    border-radius: 5px;
    height: 2rem;
    cursor: pointer;
  `;
  const EmailButton = styled(CancelButton)`
    background: #6941c6;
    color: white;
  `;

  const openEmail = () => {
    window.open("mailto:prolog@profy.dev");
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <Image src={mail} alt="Email" />
        <Header>Contact Us Via Email</Header>
        <p>
          Any questions? Send us an email at prolog@profy.dev. We usually answer
          withing 24 hours.
        </p>
        <ButtonContainer>
          <CancelButton onClick={toggleModal}>Cancel</CancelButton>
          <EmailButton onClick={openEmail}>Open Email App</EmailButton>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
}
