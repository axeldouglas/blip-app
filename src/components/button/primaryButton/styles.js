import styled from "styled-components";

export const Container = styled.button`
    background: rgba(44, 195, 213, 1);
    border: 0;
    border-radius: 8px;
    padding: 12px 20px;
    cursor: pointer;

    :focus {
        outline: none;
    }
`;

export const Text = styled.p`
    margin: 0;
    font-family: "Roboto";
    font-size: 12px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
`;
