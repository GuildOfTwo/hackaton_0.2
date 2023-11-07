import styled from 'styled-components';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

const AppWrapper = styled(Layout)`
  max-width: 1920px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100%;
  width: 100%;
`;

const ContentWrapper = styled(Content)`
  flex-grow: 1;
  background-color: ${(props) => props.theme.backgroundColor1};
`;

export { AppWrapper, ContentWrapper };
