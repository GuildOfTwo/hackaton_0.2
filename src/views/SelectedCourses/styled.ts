import { Card } from 'antd';
import styled from 'styled-components';

export const SelectedContainer = styled.section`
  color: ${(props) => props.theme.textcolor};
  font-family: 'TildaSans';
  font-weight: 500;
  display: grid;
  grid-template-columns: repeat(3, 300px);
  gap: 20px;
  margin: 0 auto;
`;
export const CardContainer = styled(Card)`
  background-color: ${(props) => props.theme.backgroundColor1};
`;
