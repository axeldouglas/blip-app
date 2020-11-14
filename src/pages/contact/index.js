import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import moment from "moment-timezone";

import planImage from "../../assets/images/plano.png";
import usersImage from "../../assets/images/user.png";
import msgReceivedImage from "../../assets/images/union.png";
import msgSentImage from "../../assets/images/sent.png";

import TopBar from "../../components/topBar";
import Media from "../../components/media";
import { PrimaryButton } from "../../components/button";
import { formatNumber } from "../../utils/formatNumber";
import * as Styled from "./styles";

const ContactsList = ({ contacts }) => {
    const { state } = useLocation();

    const [contact, setContact] = useState({});
    const [shortName, setShortName] = useState("");
    const [name, setName] = useState("");
    const [created, setCreated] = useState("");
    const [image, setImage] = useState("");
    const [userActived, setUserActived] = useState(0);
    const [messageReceived, setMessageReceived] = useState(0);
    const [messageSent, setMessageSent] = useState(0);

    useEffect(() => {
        const { shortName } = state;

        if (!!shortName.length && !!contacts.length) {
            const tempContact = contacts.filter(
                (item) => item.shortName === shortName
            );

            !!tempContact.length && setContact(tempContact[0]);
        }
    }, [state, contacts]);

    useEffect(() => {
        if (!!Object.keys(contact).length) {
            !!contact.shortName && setShortName(contact.shortName);
            !!contact.name && setName(contact.name);
            !!contact.image && setImage(contact.image);

            const date = moment(contact.created);
            date.isValid() && setCreated(date.format("DD/MM/YYYY"));

            const { user, message } = contact.analytics;
            !!Object.keys(user).length &&
                !!user.actived &&
                setUserActived(formatNumber(user.actived));
            if (!!Object.keys(message).length) {
                !!message.received &&
                    setMessageReceived(formatNumber(message.received));
                !!message.sent && setMessageSent(formatNumber(message.sent));
            }
        }
    }, [contact]);

    return (
        <Styled.Main>
            <TopBar />
            <Styled.Container>
                <Styled.HeaderContainer>
                    <Styled.InfoContainer>
                        <Media
                            image={image}
                            title={name}
                            description={`Id: ${shortName}`}
                        />
                        <Styled.DateContainer>
                            <Styled.Text>
                                {!!created && `Created at ${created}`}
                            </Styled.Text>
                        </Styled.DateContainer>
                    </Styled.InfoContainer>
                </Styled.HeaderContainer>
                <Styled.BodyContainer>
                    <Styled.StatisticsContainer>
                        <Styled.Row>
                            <Styled.Box flex={33}>
                                <Styled.Col>
                                    <Styled.RegionContainer>
                                        <Styled.Text>
                                            Region and idiom
                                        </Styled.Text>
                                        <Styled.TextContainer>
                                            <Styled.Text fontWeight="bold">
                                                EUA - English (EN)
                                            </Styled.Text>
                                        </Styled.TextContainer>
                                    </Styled.RegionContainer>
                                    <Styled.Text>Timezone</Styled.Text>
                                    <Styled.TextContainer>
                                        <Styled.Text fontWeight="bold">
                                            (UTC -03:00) Brasília
                                        </Styled.Text>
                                    </Styled.TextContainer>
                                </Styled.Col>
                            </Styled.Box>
                            <Styled.Box flex={62}>
                                <Media
                                    image={usersImage}
                                    imageSize="inerit"
                                    color="rgba(44, 195, 213, 1)"
                                    title={userActived}
                                    description="Usuários ativos"
                                />
                            </Styled.Box>
                        </Styled.Row>
                        <Styled.Row>
                            <Styled.Box flex={55}>
                                <Media
                                    image={msgReceivedImage}
                                    imageSize="inerit"
                                    color="rgba(77, 230, 123, 1)"
                                    title={messageReceived}
                                    description="Mensagens recebidas"
                                />
                            </Styled.Box>
                            <Styled.Box flex={40}>
                                <Media
                                    image={msgSentImage}
                                    imageSize="inerit"
                                    color="rgba(81, 123, 242, 1)"
                                    title={messageSent}
                                    description="Mensagens enviadas"
                                />
                            </Styled.Box>
                        </Styled.Row>
                    </Styled.StatisticsContainer>
                    <Styled.PlanContainer>
                        <Styled.PlanImage src={planImage} alt="Plan Image" />
                        <Styled.Text>Status account</Styled.Text>
                        <Styled.TextContainer>
                            <Styled.Text fontSize="14px" fontWeight="bold">
                                {!!contact.plan && contact.plan}
                            </Styled.Text>
                        </Styled.TextContainer>
                        <Styled.ButtonContainer>
                            <PrimaryButton onClick={() => console.log("wa")}>
                                Update account
                            </PrimaryButton>
                        </Styled.ButtonContainer>
                    </Styled.PlanContainer>
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
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
