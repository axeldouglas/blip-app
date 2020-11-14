import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 8px 0;
`;

export const IconContainer = styled.div`
    width: 100%;
    max-width: 45px;
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
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    padding: 16px 24px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s;

    :hover {
        transform: scale(1.01);
    }
`;

export const IdentityContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.div`
    width: 30px;
    height: 30px;
    background: purple;
    margin-right: 10px;
    border-radius: 15px;
    ${({ src }) => src && `background-image: url('${src}')`};
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Text = styled.p`
    font-family: "Roboto";
    font-size: 12px;
    font-weight: ${({ fontWeight }) => fontWeight ?? "normal"};
    color: rgba(91, 107, 116, 1);
    margin: 0;
    text-transform: capitalize;
`;

export const DateContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`;
