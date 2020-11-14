import React from "react";

import ListView from "../../components/listView";
import CardView from "../../components/cardView";
import * as Styled from "./styles";

const Favorities = ({
    list,
    listType,
    _handleFavorite = () => {},
    _viewContact = () => {},
}) => {
    const renderList = () =>
        list.map((favorite, index) => (
            <ListView
                key={`favotite_${favorite.shortName}_${index}`}
                data={favorite}
                active={true}
                onClickFavorite={(shortName) => _handleFavorite(shortName)}
                onClickItem={(shortName) => _viewContact(shortName)}
            />
        ));

    const renderCardList = () => (
        <Styled.CardListContainer>
            {list.map((favorite, index) => (
                <CardView
                    key={`favotite_${favorite.shortName}_${index}`}
                    data={favorite}
                    active={true}
                    onClickFavorite={(shortName) => _handleFavorite(shortName)}
                    onClickItem={(shortName) => _viewContact(shortName)}
                />
            ))}
        </Styled.CardListContainer>
    );

    return (
        <>
            {!!list.length && (
                <>
                    <Styled.TitleContainer marginBottom={listType === "list"}>
                        <Styled.BodyTitle>Favorities</Styled.BodyTitle>
                    </Styled.TitleContainer>

                    {listType === "list" ? renderList() : renderCardList()}

                    <Styled.Separator />
                </>
            )}
        </>
    );
};

export default React.memo(Favorities);
