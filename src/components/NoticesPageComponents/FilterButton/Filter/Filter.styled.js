import styled from 'styled-components';

export const FilterBox = styled.div`
  background-color: white;
  padding: 8px;
  position: absolute;
  border-radius: 20px;
  width: 152px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 999;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  top: 50px;
`;

export const FilterTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #54adff;
  margin-bottom: 8px;
`;

export const FilterItem = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #54adff;
  padding: 7px;
  background-color: #cce4fb;
  border-radius: 20px;
  width: 136px;
`;

export const FilterItemTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #54adff;
  margin-left: 14px;
`;

export const CheckBox = styled.input`
  -webkit-appearance: none;
  appearance: 'none';
  width: '16px';
  height: '16px';
  border: '2px solid #54ADFF';
  border-radius: '4px';
  margin-right: '10px';
  margin-left: '40px';
  cursor: 'pointer';
  outline: none;

  &:checked {
    background-color: #54adff;
  }
`;
