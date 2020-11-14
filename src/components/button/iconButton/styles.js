import styled from "styled-components";

export const Container = styled.div`
    cursor: pointer;
`;

export const Icon = styled.img`
    max-width: ${({ size }) => size ?? "100%"};
    max-height: ${({ size }) => size ?? "100%"};
`;
