import { useState } from 'react';
import {
  ModalWrapper,
  ModalWindow,
  ModalTitle,
  ModalText,
  ModalButton,
} from './ModalApprove.styled';

function ModalApprove() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalButton onClick={handleShow}>Launch modal</ModalButton>

      <ModalWrapper show={show}>
        <ModalWindow>
          <ModalTitle>Modal Title</ModalTitle>

          <ModalText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            reprehenderit ullam tempora repudiandae, totam iste incidunt, a quia
            veritatis, recusandae deserunt mollitia impedit laborum quisquam
            repellat earum sunt autem eveniet.
          </ModalText>
          <ModalButton onClick={handleClose}>Close</ModalButton>
          <ModalButton onClick={handleClose}>Save Changes</ModalButton>
        </ModalWindow>
      </ModalWrapper>
    </>
  );
}

export default ModalApprove;
