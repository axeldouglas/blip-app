import styled from "styled-components";

export const Main = styled.div`
    width: 100%;
    background: rgba(245, 248, 249, 1);
    min-height: 100vh;
`;

export const Container = styled.div`
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px 60px 50px 60px;
`;

export const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex: 1;

    ${({ marginBottom }) =>
        !!marginBottom &&
        `
        margin-bottom: 60px;
    `}
`;

export const HeaderTitle = styled.h1`
    font-family: "Roboto";
    font-size: 26px;
    font-weight: bold;
    color: rgba(86, 97, 110, 1);
`;

export const HeaderOptions = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex: 2;
`;

export const OptionContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;

    :first-child {
        margin: 0;
    }
`;

export const BodyContainer = styled.div`
    width: 100%;
`;

export const BodyTitle = styled.h2`
    font-family: "Roboto";
    font-size: 26px;
    font-weight: bold;
    color: rgba(96, 123, 156, 1);
`;

export const Separator = styled.div`
    width: 100%;
    border-top: 1px solid rgba(221, 230, 234, 1);
    margin: 32px 0;
`;

export const CardListContainer = styled.div`
    display: grid;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(190px, 190px));
    margin-top: 25px;
`;

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(221, 230, 234, 1);
    margin-top: 70px;
`;

export const CopyRights = styled.p`
    font-family: "Roboto";
    font-size: 10px;
    font-weight: normal;
    color: rgba(131, 143, 158, 1);
    margin: 20px 0 0;
`;
