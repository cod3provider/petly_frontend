import styled from 'styled-components';

export const HeaderStyled = styled.header`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100%;
`;

export const DivStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const ModalStyled = styled.div`
  position: fixed;
  top: 52px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 60px);
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const CloseModal = styled.img`
  position: absolute;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
