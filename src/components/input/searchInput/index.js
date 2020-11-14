import React from "react";

import * as Styled from "./styles";

const SearchInput = ({ value, onChange = () => {} }) => {
    return (
        <Styled.Container>
            <Styled.Input
                type="text"
                placeholder="Search"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </Styled.Container>
    );
};

export default SearchInput;
