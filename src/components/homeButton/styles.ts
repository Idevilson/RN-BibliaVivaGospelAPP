import { TouchableOpacity } from "react-native-gesture-handler";
import styled from "styled-components/native";

interface ButtonProps {
    backgroundColor: string;
}

interface TitleProps {
    titleColor: string;
}

export const Button = styled(TouchableOpacity)<ButtonProps>`
    background-color: ${(ButtonProps) => ButtonProps.backgroundColor};

    width: 270px;
    height: 169px;
    border-radius: 23px;

    align-items: center;
    justify-content: center;

    margin-bottom: 120px;
`;

export const TitleButton = styled.Text<TitleProps>`
    font-size: 30px;

    font-weight: bold;
    text-align: center;
    
    color: ${
        (ButtonProps) => ButtonProps.titleColor === "#7205DC" ? 
        "#7205DC" : "#3AF1A1"
    };
`;