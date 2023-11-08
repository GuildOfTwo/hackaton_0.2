import styled from 'styled-components';

export const Label = styled.label`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 500;
`;

export const BlackLabel = styled.label`
  color: black;
`;

export const FormList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;

export const FormSubText = styled.p`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 500;
  margin-bottom: 16px;
`;
