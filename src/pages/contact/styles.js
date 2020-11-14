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
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(221, 230, 234, 1);
`;

export const InfoContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

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
    background: purple;
    margin-right: 10px;
    border-radius: 28px;
    ${({ src }) => src && `background-image: url('${src}')`};
    background-repeat: no-repeat;
    background-size: cover;
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

export const Text = styled.p`
    font-family: "Roboto";
    font-size: ${({ fontSize }) => fontSize ?? "12px"};
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

export const BodyContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
`;

export const StatisticsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-direction: column;
`;

export const Row = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
`;

export const Col = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const Box = styled.div`
    width: 100%;
    display: flex;
    flex: 0 33%;
    flex-direction: row;
    background: rgba(255, 255, 255, 1);
    border-radius: 8px;
    padding: 35px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    margin: 0 20px 20px 0;
    ${({ flex }) => flex && `flex: 0 ${flex}%`};
`;
export const RegionContainer = styled.div`
    margin-bottom: 25px;
`;

export const PlanContainer = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
`;

export const PlanImage = styled.img`
    width: 245px;
    height: auto;
    margin: 0 auto;
`;

export const ButtonContainer = styled.div`
    margin-top: 35px;
`;

export const TextContainer = styled.div`
    margin-top: 10px;
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
