import React from "react";
import logoImage from "../../assets/images/logo.png";
import * as Styled from "./styles";

const TopBar = () => {
    return (
        <Styled.TopBar>
            <Styled.Logo src={logoImage} alt="Blip Logo" />
        </Styled.TopBar>
    );
};

export default TopBar;
