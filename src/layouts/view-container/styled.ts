import styled from 'styled-components';

export const ContentWrapper = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  max-height: 100%;
  box-sizing: border-box;
  padding: 0 20px;
  overflow: hidden;
  margin: 0 auto;
  overflow-y: scroll;
  width: 100%;
  &::-webkit-scrollbar {
    background: rgba(0, 66, 105, 0.06);
    border-radius: 4px;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ced8de;
    border-radius: 10px;
  }
`;
