import React from "react";
import * as Styled from "./styles";

const Media = ({ image, imageSize, color, title, description }) => {
    return (
        <Styled.Media>
            <Styled.MediaImage src={image} size={imageSize} color={color} />
            <Styled.MediaContent>
                <Styled.MediaTitle>{title}</Styled.MediaTitle>
                <Styled.MediaDescription>{description}</Styled.MediaDescription>
            </Styled.MediaContent>
        </Styled.Media>
    );
};

export default Media;
