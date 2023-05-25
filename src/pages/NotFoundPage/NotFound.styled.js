import styled from 'styled-components';
import { ContainerStyled } from '../../components/common/Container/Container.styled.jsx';
import { theme } from '../../utils/theme.jsx';
import { IoPawOutline } from 'react-icons/io5';

export const Container = styled(ContainerStyled)`
  position: relative;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 80px;
`;

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
  align-items: center;
  padding: 10px 50px;
  font-size: 16px;
  color: ${theme.baseColors.buttonTextColor};
  background: #54adff;
  border-radius: 40px;
`;

export const IconButton = styled(IoPawOutline)`
  width: 24px;
  height: 24px;
  color: ${theme.baseColors.buttonTextColor};
  transform: rotate(45deg);
`;