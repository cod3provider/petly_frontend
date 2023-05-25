import { Button, ModalText, ModalTitle } from "./ModalCongrats.style";

// eslint-disable-next-line react/prop-types
function ModalCongrats({ onClose }) {
  return (
    <>
      <div>
        <ModalTitle>Congrats!</ModalTitle>
        <ModalText>Your registration is successful</ModalText>
        <Button onClick={onClose}>Go to profile &nbsp;</Button>
      </div>
    </>
  );
}

export default ModalCongrats;