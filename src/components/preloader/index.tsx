import React, { FC } from "react";

import { Container, Loader } from "./styled";



export const Preloader: FC = () => {

    return (
        <Container>
            <Loader />
        </Container>
    );

}