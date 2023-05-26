import styled from 'styled-components';
import { theme } from '../../../utils/theme.jsx';
// import { theme } from '../../../utils/theme';

export const Text = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-weight: 600;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  gap: 10px;
  //text-align: left;
  //margin-bottom: 12px;

  @media screen and (min-width: 768px) {
    //margin-bottom: 16px;
  }
`;

export const Image = styled.img`
  width: 240px;
  height: 240px;
  //margin: 0px auto 20px;
  border-radius: 20px;
  

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }
`;

export const Icon = styled.div`
  fill: none;
  stroke: rgb(84, 173, 255);
  width: 24px;
  height: 24px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  gap: 20px;
  
  padding: 15px 20px 40px;
  margin-bottom: 20px;
  background: rgb(255, 255, 255);
  box-shadow: rgba(136, 198, 253, 0.19) 3px 8px 14px;
  border-radius: 20px;
  width: 100%;


  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }

  @media ${theme.breakpoints.desktop.media} {
    gap: 30px;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  color: #54adff;
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  padding: 0;
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const Span = styled.span`
  font-size: 14px;
  line-height: 1.57;
  color: #000000;
  font-weight: 400;
  display: inline;
`;

export const BtnWrap = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;

  @media ${theme.breakpoints.tablet.media} {
    gap: 20px;
  }

  @media ${theme.breakpoints.desktop.media} {
    gap: 10px;
  }
`