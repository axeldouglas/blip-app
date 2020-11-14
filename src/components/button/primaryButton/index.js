import React from "react";

import * as Styled from "./styles";

const PrimaryButton = ({ children, onClick = () => {} }) => {
    return (
        <Styled.Container onClick={onClick}>
            <Styled.Text>{children}</Styled.Text>
        </Styled.Container>
    );
};

export default PrimaryButton;
