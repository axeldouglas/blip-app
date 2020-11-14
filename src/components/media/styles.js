import styled from "styled-components";

export const Media = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const MediaContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const MediaImage = styled.div`
    width: 56px;
    height: 56px;
    background: ${({ color }) => color ?? "purple"};
    margin-right: 10px;
    border-radius: 28px;
    ${({ src }) => src && `background-image: url('${src}')`};
    background-repeat: no-repeat;
    background-size: ${({ size }) => size ?? "cover"};
    background-position: center;
`;

export const MediaTitle = styled.h3`
    font-family: "Roboto";
    font-size: 18px;
    font-weight: bold;
    color: rgba(86, 97, 110, 1);
`;

export const MediaDescription = styled.p`
    font-family: "Roboto";
    font-size: 12px;
    font-weight: normal;
    color: rgba(91, 107, 116, 1);
    margin: 0;
`;
