import React from "react";

import ListView from "../../components/listView";
import CardView from "../../components/cardView";
import * as Styled from "./styles";

const Contacts = ({
    list,
    listType,
    _handleFavorite = () => {},
    _viewContact = () => {},
}) => {
    const renderList = () =>
        list.map((contact, index) => (
            <ListView
                key={`${contact.shortName}_${index}`}
                data={contact}
                active={false}
                onClickFavorite={(shortName) => _handleFavorite(shortName)}
                onClickItem={(shortName) => _viewContact(shortName)}
            />
        ));

    const renderCardList = () => (
        <Styled.CardListContainer>
            {list.map((contact, index) => (
                <CardView
                    key={`${contact.shortName}_${index}`}
                    data={contact}
                    active={false}
                    onClickFavorite={(shortName) => _handleFavorite(shortName)}
                    onClickItem={(shortName) => _viewContact(shortName)}
                />
            ))}
        </Styled.CardListContainer>
    );
    return listType === "list" ? renderList() : renderCardList();
};

export default React.memo(Contacts);
