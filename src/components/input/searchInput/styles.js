import styled from "styled-components";

export const Container = styled.div`
    width: 300px;
    height: 40px;
`;

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: 1px solid rgba(214, 226, 232, 1);
    border-radius: 8px;
    padding: 0px 20px;
    color: rgba(155, 173, 189, 1);

    :focus {
        outline: none;
    }
`;
