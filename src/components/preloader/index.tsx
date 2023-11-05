<<<<<<< HEAD
import React, { FC } from "react";

import { Container, Loader } from "./styled";
=======
import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  width: 48px;
  height: 48px;
  border: 2px solid #5c0da7;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 0;
    background: #ff3d00;
    width: 3px;
    height: 24px;
    transform: translateX(-50%);
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
>>>>>>> develop

export const Preloader: FC = () => {
  return (
    <Container>
      <Loader />
    </Container>
  );
};
