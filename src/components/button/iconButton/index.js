import React, { useEffect, useState } from "react";

import blocksIcon from "../../../assets/images/organize-blocks.png";
import listIcon from "../../../assets/images/organize-list.png";
import plusIcon from "../../../assets/images/add.png";

import * as Styled from "./styles";

const IconButton = ({ icon, size, onClick = () => {} }) => {
    const [iconSrc, setIconSrc] = useState("");

    useEffect(() => {
        switch (icon) {
            case "organize-blocks":
                setIconSrc(blocksIcon);
                break;
            case "organize-list":
                setIconSrc(listIcon);
                break;
            case "plus-icon":
                setIconSrc(plusIcon);
                break;
            default:
                break;
        }
    }, [icon]);

    return (
        <Styled.Container onClick={onClick}>
            <Styled.Icon src={iconSrc} alt="Icon" active={false} />
        </Styled.Container>
    );
};

export default IconButton;
