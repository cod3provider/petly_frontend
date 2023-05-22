import styled from 'styled-components';
export const LogoContainer = styled.div`
  display: contents;
  height: 28px;

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    height: 28px;
  }
`;
