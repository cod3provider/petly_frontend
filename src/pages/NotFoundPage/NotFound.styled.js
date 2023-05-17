import styled from 'styled-components';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import { theme } from '../../utils/theme.jsx';
import { IoPawOutline } from "react-icons/io5";

export const Container = styled(ContainerStyled)`
  position: relative;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
`

export const Title = styled.h2`
  margin-bottom: 80px;
  font-size: ${theme.fontSizes.l};

  @media ${theme.breakpoints.tablet.media} {
    font-size: ${theme.fontSizes.x};
  }

  @media ${theme.breakpoints.desktop.media} {
    font-size: ${theme.fontSizes.x};
  }
`;

export const ImageNotFound = styled.img`
  margin-bottom: 60px;
  max-width: 820px;
`;

export const Button = styled.button`
  display: flex;
  gap: 12px;
  padding: 8px 28px;
  background: #54ADFF;
  border-radius: 40px;

`;

export const IconButton = styled(IoPawOutline)`
  // color: ${theme.baseColors.accentColor};
  color: #000;
  transform: rotate(45deg);
  width: 24px;
  height: 24px;
`

// export const BgImageStyled = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 100%;
//   height: 100vh;
//   background-image: url(${BG});
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   object-fit: contain;
// `;

// export const BgImageStyled = styled(BackgroundImage)`
//
// `