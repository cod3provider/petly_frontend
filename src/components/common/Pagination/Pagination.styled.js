import { styled } from 'styled-components';

export const List = styled.ul`
  list-style: 'none';
  padding: 15px;
  margin-top: ${props => (props.mt ? props.mt : 0)}px;
  margin-bottom: ${props => (props.mb ? props.mb : 0)}px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  height: 52px;
  border-radius: 26px;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
`;

export const Item = styled.a`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  border: ${props => (props.selected ? 'none' : '1px solid #cce4fb')};
  background-color: ${props => (props.selected ? '#54ADFF' : 'white')};
  color: ${props => (props.selected ? '#FEF9F9' : '#CCE4FB')};

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`;

export const Dots = styled.div`
  width: 35px;
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #54adff;
`;

export const Arrow = styled.div`
  width: 35px;
  height: 35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #cce4fb;
  cursor: pointer;
  color: #54adff;

  &:hover,
  &:focus {
    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    color: #fef9f9;
  }
`;
