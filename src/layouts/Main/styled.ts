import styled from "styled-components";
import { Layout } from "antd";

const MainWrapper = styled(Layout)`
  padding: 24px 100px;
  background: white;
  flex: 1;
  height: 100%;
  max-width: 1920px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 80%;
  margin: 0 auto;
`;

export default MainWrapper;
