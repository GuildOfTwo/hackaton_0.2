import styled from 'styled-components';

export const TelegramImg = styled.img`
  max-width: 20px;
  max-height: 20px;
`;

export const LinkContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`;

export const LinkTitle = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LinkWrapper = styled.div`
  padding: 10px 10px;
  position: absolute;
  height: 40px;
  right: 50px;
  bottom: 50px;
  width: 130px;
  border-radius: 10px;
  border: solid 1px;
  transition: transform 0.2s ease-in;
  &:hover {
    transform: scale(1.1);
  }
`;
