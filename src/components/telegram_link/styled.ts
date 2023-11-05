import styled from "styled-components";

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
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LinkWrapper = styled.div `
 padding: 10px 10px;
 position: sticky;
 top: 100%;
 left: 100%;
 width: 165px;
 border-radius:10px;
 border: solid 3px;
`