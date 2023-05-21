import styled from 'styled-components';

export const NewsCardContainer = styled.ul`
  display: grid;
  //grid-template-columns: repeat(3, 1fr);
  grid-template-columns: 1fr;
  gap: 20px;

  @media (max-width: 767px) {
  width: 280px;
    margin: 0 auto;
}
  
  @media (min-width: 768px) and (max-width: 1279px) {
    //grid-template-columns: repeat(2, 1fr);
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const NewsItem = styled.div`
  padding: 10px;
`;

export const NewsTitle = styled.h2`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.01em;
  color: #111111;
`