import styled from 'styled-components';
import { theme } from '../../utils/theme';

export const Container = styled.div`
  margin: 24px auto;
  /* width: 300px; */
  @media (${theme.breakpoints.mobile.media}) {
    width: ${theme.breakpoints.mobile.width};
  }
  @media ${theme.breakpoints.tablet.media} {
    width: 460px;
    width: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return '460px';

          default:
            return '704px';
        }
      }
    }};
  }

  @media ${theme.breakpoints.desktop.media} {
    width: 460px;
    width: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return '460px';

          default:
            return '822px';
        }
      }
    }};
  }
`;

export const Wrapper = styled.div`
  min-height: 496px;
  background-color: white;
  color: black;

  margin: 0 auto;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;

  @media (${theme.breakpoints.mobile.media}) {
    width: 280px;
    padding: 20px 8px;
    /* width: ${theme.breakpoints.mobile.width}; */
  }
  @media ${theme.breakpoints.tablet.media} {
    padding: 20px 32px;
    width: 460px;
    width: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return '460px';

          default:
            return '704px';
        }
      }
    }};
  }

  @media ${theme.breakpoints.desktop.media} {
    padding: 20px 32px;
    width: 460px;
    width: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return '460px';

          default:
            return '822px';
        }
      }
    }};
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  line-height: 1.35;

  margin-bottom: 24px;

  color: #111111;

  @media (${theme.breakpoints.mobile.media}) {
    text-align: left;
    font-size: 20px;
    margin-left: 12px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    font-size: 28px;
    text-align: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return 'left';

          default:
            return 'center';
        }
      }
    }};
  }
`;

export const StepList = styled.ul`
  display: flex;

  @media (${theme.breakpoints.mobile.media}) {
    margin: -6px;
    margin-bottom: 24px;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin: -11px;
    justify-content: ${({ type, step }) => {
      if (step === 'third') {
        switch (type) {
          case 'your pet':
            return 'start';

          default:
            return 'center';
        }
      }
    }};
    margin-bottom: 40px;
  }
`;
export const StepLi = styled.li`
  min-width: 80px;
  padding-bottom: 20px;

  position: relative;

  color: #888888;

  font-weight: 500;

  align-items: center;

  @media (${theme.breakpoints.mobile.media}) {
    margin: 6px;
    font-size: 10px;
    line-height: 1.4;
  }
  @media ${theme.breakpoints.tablet.media}, ${theme.breakpoints.desktop.media} {
    margin: 11px;
    font-size: 16px;
    line-height: 1.66;
  }
`;

export const StepLiFirst = styled.span`
  align-items: center;

  color: ${props => {
    switch (props.step) {
      case 'first':
        return '#54ADFF';
      case 'second':
        return '#00C3AD';
      case 'third':
        return '#00C3AD';

      default:
        return '#54ADFF';
    }
  }};

  &::after {
    position: absolute;
    bottom: 0;
    content: ' ';
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      switch (props.step) {
        case 'first':
          return '#54ADFF';
        case 'second':
          return '#00C3AD';
        case 'third':
          return '#00C3AD';

        default:
          return '#54ADFF';
      }
    }};
  }
`;

export const StepLiSecond = styled.span`
  color: ${props => {
    switch (props.step) {
      case 'first':
        return '#888888';
      case 'second':
        return '#54ADFF';
      case 'third':
        return '#00C3AD';

      default:
        return '#888888';
    }
  }};

  &::after {
    position: absolute;
    bottom: 0;
    content: ' ';
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      switch (props.step) {
        case 'first':
          return '#CCE4FB';
        case 'second':
          return '#54ADFF';
        case 'third':
          return '#00C3AD';

        default:
          return '#CCE4FB';
      }
    }};
  }
`;

export const StepLiThird = styled.span`
  color: ${props => {
    switch (props.step) {
      case 'first':
        return '#888888';
      case 'second':
        return '#888888';
      case 'third':
        return '#54ADFF';

      default:
        return '#888888';
    }
  }};

  &::after {
    position: absolute;
    bottom: 0;
    content: ' ';
    display: block;
    width: 100%;
    height: 8px;
    border-radius: 8px;
    background-color: ${props => {
      switch (props.step) {
        case 'first':
          return '#CCE4FB';
        case 'second':
          return '#CCE4FB';
        case 'third':
          return '#54ADFF';

        default:
          return '#CCE4FB';
      }
    }};
  }
`;
