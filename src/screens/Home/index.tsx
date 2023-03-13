import React from "react";
import { useNavigation } from  "@react-navigation/native";

import { Header } from "../../components/header";

import { Container, ButtonsContainer } from "./styles";
import { HomeButton } from "../../components/homeButton";


export function Home(){

    const navigation = useNavigation();

    return(
        <Container>
            <Header />

            <ButtonsContainer>
                <HomeButton
                    backgroundColor="#7205DC"
                    titleProps="ANTIGO TESTAMENTO"
                    functionProps={() => navigation.navigate('AtTopTabs')}
                    titleColor={"#3AF1A1"}
                />

                <HomeButton
                    backgroundColor="#3AF1A1"
                    titleProps="NOVO TESTAMENTO"
                    functionProps={() => navigation.navigate('NtTopTabs')}
                    titleColor="#7205DC"
                />
            </ButtonsContainer>
        </Container>
    )
}