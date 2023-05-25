import styled from 'styled-components';
// import { theme } from '../../../utils/theme.jsx';

export const NewsCardContainer = styled.ul`
  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 20px;

  @media (max-width: 767px) {
    width: 280px;
    margin: 25px auto 0;
  }
  
  @media (min-width: 768px) and (max-width: 1279px) {
    //grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 1fr 1fr;
    margin-top: 40px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 60px;
  }
`;

export const NewsItem = styled.li`
  background: #fff;
  border-radius: 20px;
  box-shadow: 3px 8px 14px rgba(136,198,253,.19);
  //display: flex;
  //flex-direction: column;
  height: 100%;
`;

export const TextWrap = styled.div`
  padding: 12px;
`

export const Image = styled.img`
  background: linear-gradient(0deg,rgba(0,0,0,.2),rgba(0,0,0,.2));
  border-radius: 20px;
  height: 252px;
  margin-bottom: 16px;
  width: 100%;
  object-fit: cover;
`

export const NewsTitle = styled.h2`
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
  text-align: left;
`;

export const NewsText = styled.div`
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.375;
  color: #111111;
  text-align: left;
`;

export const FlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  font-family: 'Manrope';
  
  color: #54ADFF;
  background: transparent;
  transition: all 250ms linear;
  
  &:hover {
    text-decoration: underline;
    color: #000;
  }
`