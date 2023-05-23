import styled from 'styled-components';
// import { theme } from '../../utils/theme';

export const CloseModalBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  padding: 0;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  text-align: center;
`;
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(43, 43, 43, 0.6);
  backdrop-filter: blur(10px);
`;

export const Wrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  min-height: 280px;
  max-width: 287px;
  width: 100%;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  // @keyframes openModal {
  //   0% {
  //       height: 0vh;
  //   }
  //   60% {
  //       height: 0vh;
  //   }
  //   100% {
  //       height: 100vh;
  //   }
  // }
  // animation-name: openModal;
  // animation-duration: 400ms;
  // animation-timing-function: linear;

  @media (min-width: 767px) {
    min-height: 354px;
    max-width: 608px;
  }
`;
