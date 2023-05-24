import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Backdrop, Wrapper, CloseModalBtn } from './ModalBack.styled';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';

const modalRoot = document.querySelector('#modal-root');

const ModalBack = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDowm = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDowm);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDowm);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <Wrapper>
        <CloseModalBtn onClick={onClose} type="button">
          <GrClose size={24} />
        </CloseModalBtn>
        {children}
      </Wrapper>
    </Backdrop>,
    modalRoot
  );
};

ModalBack.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default ModalBack;
