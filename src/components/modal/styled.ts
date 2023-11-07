import styled from 'styled-components';

export const TelegramImg = styled.img`
  max-width: 20px;
  max-height: 20px;
`;

export const ModalOoverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  overflow: hidden;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
