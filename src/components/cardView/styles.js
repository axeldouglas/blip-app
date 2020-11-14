import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    padding: 12px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;

    :hover {
        transform: scale(1.01);
    }
`;

export const IconContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const Icon = styled.img`
    height: 24px;
    width: 24px;
    cursor: pointer;
    transition: transform 0.2s;

    :hover {
        transform: scale(1.1);
    }
`;

export const ItemContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Image = styled.div`
    width: 55px;
    height: 55px;
    background: purple;
    margin-bottom: 20px;
    border-radius: 28px;
    ${({ src }) => src && `background-image: url('${src}')`};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Text = styled.p`
    font-family: "Roboto";
    font-size: ${({ fontSize }) => fontSize ?? "12px"};
    font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
    color: rgba(91, 107, 116, 1);
    text-transform: capitalize;
`;

export const Info = styled.div`
    margin: 5px 0 25px 0;
`;
