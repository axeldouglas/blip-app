import React, { useEffect, useState } from "react";
import moment from "moment";
import starIcon from "../../assets/images/star.png";
import favoriteIcon from "../../assets/images/favorite.png";
import * as Styled from "./styles";

const CardView = ({
    data = {},
    active = false,
    onClickFavorite = () => {},
    onClickItem = () => {},
}) => {
    const [shortName, setShortName] = useState("");
    const [name, setName] = useState("");
    const [created, setCreated] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        !!data.shortName && setShortName(data.shortName);
        !!data.name && setName(data.name);
        !!data.image && setImage(data.image);

        const date = moment(data.created);
        date.isValid() && setCreated(date.format("DD/MM/YYYY"));
    }, [data]);

    return (
        <Styled.Container>
            <Styled.IconContainer>
                <Styled.Icon
                    src={active ? starIcon : favoriteIcon}
                    alt="Favorite"
                    onClick={() => onClickFavorite(shortName)}
                />
            </Styled.IconContainer>

            <Styled.ItemContainer onClick={() => onClickItem(shortName)}>
                <Styled.Image src={image} />
                <Styled.Text fontWeight="bold">{name}</Styled.Text>

                <Styled.Info>
                    <Styled.Text fontSize="10px">{created}</Styled.Text>
                </Styled.Info>
            </Styled.ItemContainer>
        </Styled.Container>
    );
};

export default CardView;
