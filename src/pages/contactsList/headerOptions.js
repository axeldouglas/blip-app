import React from "react";

import { PrimaryButton, IconButton } from "../../components/button";
import { SearchInput } from "../../components/input";
import * as Styled from "./styles";

const HeaderOptions = ({
    search,
    _setSearch = () => {},
    _handleOrder = () => {},
    _setListType = () => {},
}) => {
    return (
        <Styled.HeaderOptions>
            <Styled.OptionContainer>
                <SearchInput
                    value={search}
                    onChange={(value) => _setSearch(value)}
                />
            </Styled.OptionContainer>
            <Styled.OptionContainer>
                <PrimaryButton onClick={() => _handleOrder("name")}>
                    Order by name
                </PrimaryButton>
            </Styled.OptionContainer>
            <Styled.OptionContainer>
                <PrimaryButton onClick={() => _handleOrder("created")}>
                    Order by creation
                </PrimaryButton>
            </Styled.OptionContainer>
            <Styled.OptionContainer>
                <IconButton
                    icon="organize-blocks"
                    size={23}
                    onClick={() => _setListType("card")}
                />
            </Styled.OptionContainer>
            <Styled.OptionContainer>
                <IconButton
                    icon="organize-list"
                    size={23}
                    onClick={() => _setListType("list")}
                />
            </Styled.OptionContainer>
        </Styled.HeaderOptions>
    );
};

export default React.memo(HeaderOptions);
