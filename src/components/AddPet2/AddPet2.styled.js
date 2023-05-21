import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fef9f9;
  width: 320px;
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 280px;
  padding: 20px 8px;
  background-color: white;
  color: black;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
`;

export const Title = styled.h2`
  text-align: left;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  margin-left: 12px;
  margin-bottom: 24px;

  color: #111111;
`;

export const StepList = styled.ul`
  display: flex;
  margin: -6px;
  margin-bottom: 24px;
`;
export const StepLi = styled.li`
  margin: 6px;
  min-width: 80px;
  padding-bottom: 20px;

  position: relative;

  color: #888888;

  font-weight: 500;
  font-size: 10px;
  line-height: 14px;
  align-items: center;
`;

export const StepLiFirst = styled.span`
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
