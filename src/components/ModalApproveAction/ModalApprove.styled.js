import styled from 'styled-components';
// import { theme } from '../../utils/theme';


export const ModalWrapper= styled.div`
  
    z-index: auto;
    display: ${({show}) => (show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width:100vw;
    background: rgba(0,0,0,0.5);
  
`;

export const ModalWindow= styled.div`
  
    background: #FFF;
  
`;



export const ModalTitle = styled.h1`

    display: block;
    text-align: left;
    margin: 20px 24px auto 20px;
    font-size: 20px;
    line-height: 1.35;
    color: #111111;
   
  
`;
export const WrapperStep = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
  
`;

export const ModalText = styled.p`
  
    font-size: 10px;
    line-height: 14px;
  
`;

export const ModalButton = styled.button`

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 10px 28px;
background: #54ADFF;
border-radius: 40px;
`;
