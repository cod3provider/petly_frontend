import styled from 'styled-components';

export const WorkList = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  //width: 120px;
  //height: 160px;
  border: 1px solid #54ADFF;
  border-radius: 10px;
  gap: 5px;

  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 8px;
  background: #ffffff;
  z-index: 1;
  //opacity: 1;
`;

export const WorkSpan = styled.span`
  font-size: 12px;
`;

export const WorkText = styled.p`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;