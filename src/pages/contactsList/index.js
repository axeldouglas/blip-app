import React, { useCallback, useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import moment from "moment";

import * as ContactActions from "../../store/modules/contacts/actions";
import { sortByKey } from "../../utils/sortArray";
import TopBar from "../../components/topBar";
import HeaderOptions from "./headerOptions";
import Favorities from "./favorities";
import Contacts from "./contacts";
import * as Styled from "./styles";

const ContactsList = ({ contacts, favorities, history }) => {
    const dispatch = useDispatch();

    const [listType, setListType] = useState("list");
    const [search, setSearch] = useState("");
    const [contactsList, setContactsList] = useState([]);
    const [favoritiesList, setFavoritiesList] = useState([]);

    useEffect(() => {
        if (!!contacts.length) {
            const tempContacts = contacts
                .filter((contact) => !favorities.includes(contact.shortName))
                .map((item) => {
                    return {
                        ...item,
                        created: moment(item.created).isValid()
                            ? item.created
                            : "",
                    };
                });
            const tempFavorities = contacts
                .filter((contact) => favorities.includes(contact.shortName))
                .map((item) => {
                    return {
                        ...item,
                        created: moment(item.created).isValid()
                            ? item.created
                            : "",
                    };
                });

            setContactsList(tempContacts);
            setFavoritiesList(tempFavorities);
        }
    }, [contacts, favorities]);

    const handleFavorite = (shortName, action) => {
        if (action === "add") {
            dispatch(ContactActions.addFavorite({ shortName }));
        } else {
            const list = favoritiesList
                .filter((favorite) => favorite.shortName !== shortName)
                .map((item) => item.shortName);

            dispatch(ContactActions.removeFavorite({ favoriteList: list }));
        }
    };

    const viewContact = useCallback((shortName) => {
        history.push("/contact", { shortName });
        // eslint-disable-next-line
    }, []);

    const handleOrder = (action) => {
        const contactsSortedList = sortByKey(contactsList, action, 1);
        const favoritiesSortedList = sortByKey(favoritiesList, action, 1);

        setContactsList([...contactsSortedList]);
        setFavoritiesList([...favoritiesSortedList]);
    };

    return (
        <Styled.Main>
            <TopBar />
            <Styled.Container>
                <Styled.HeaderContainer>
                    <Styled.TitleContainer>
                        <Styled.HeaderTitle>My Contacts</Styled.HeaderTitle>
                    </Styled.TitleContainer>

                    <HeaderOptions
                        search={search}
                        _setSearch={(value) => setSearch(value)}
                        _handleOrder={(key) => handleOrder(key)}
                        _setListType={(type) => setListType(type)}
                    />
                </Styled.HeaderContainer>
                <Styled.BodyContainer>
                    {!!favoritiesList.length && (
                        <Favorities
                            list={favoritiesList.filter((item) =>
                                item.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )}
                            listType={listType}
                            _handleFavorite={(shortName) =>
                                handleFavorite(shortName, "remove")
                            }
                            _viewContact={(shortName) => viewContact(shortName)}
                        />
                    )}
                    {!!contactsList.length && (
                        <Contacts
                            list={contactsList.filter((item) =>
                                item.name
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            )}
                            listType={listType}
                            _handleFavorite={(shortName) =>
                                handleFavorite(shortName, "add")
                            }
                            _viewContact={(shortName) => viewContact(shortName)}
                        />
                    )}
                </Styled.BodyContainer>
                <Styled.FooterContainer>
                    <Styled.CopyRights>
                        © 2019, BLiP Todos os direitos reservados | Termos de
                        Uso
                    </Styled.CopyRights>
                </Styled.FooterContainer>
            </Styled.Container>
        </Styled.Main>
    );
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.list,
    favorities: state.contacts.favoriteList,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
