import styled from "styled-components/native";


export const Container = styled.TouchableOpacity`
    width: 50%;  
    height: 100px;
  
    margin: 5px;
    background-color: #7205DC;
`;

export const BookButtonHeader = styled.View`
    width: 100%;
    height: 25%;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
    margin-left: 6px;
    color: #fff;
`;

export const BookButtonBody = styled.View`
    width: 100%;
    height: 50%;

    align-items: center;
    justify-content: center;
`;

export const BodyText = styled.Text`
    font-size: 35px;
    font-weight: bold;
    color: #3AF1A1;
`;

export const BookButtonFooter = styled.View`
    width: 100%;
    height: 25%;

    align-items: flex-end;
`;

export const FooterText = styled.Text`
    font-size: 15px;
    margin-right: 8px;
    color: #fff;
`;