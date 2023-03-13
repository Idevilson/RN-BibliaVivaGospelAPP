import React from "react";
import ModalDropdown from "react-native-modal-dropdown";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, DrawerActions } from "@react-navigation/native";

import { Container, ButtonContainer } from "./styles";
import { useBibleVersion } from "../../hooks/BibleVersionContext";

export function Header(){
    const navigation = useNavigation();
    const { setVersionSelected } = useBibleVersion();

    function handleSeletedModalDropDown(version: string){
        if(version === "Versão AA"){
            setVersionSelected( { value: "0" , label: "VERSÃO AA"});
        } else if(version === "Versã ACF") {
            setVersionSelected( { value: "1", label: "VERSÃO ACF"});
        } else if(version === "Versão NVI") {
            setVersionSelected( { value: "2", label: "VERSÃO NVI"});
        }
    }

    return(
        <Container>
            <ButtonContainer
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            >  
                <AntDesign 
                    name="menuunfold" 
                    size={30} 
                    color="#7205DC" 
                />
            </ButtonContainer>    

                <ModalDropdown 
                    options={['Versão AA', 'Versã ACF', 'Versão NVI']}
                    animated={true}

                    onSelect={(version) => handleSeletedModalDropDown(version)}

                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 50,
                        borderRadius: 5,
                        width: 150,
                        marginLeft: "20%"
                    }}   
                    
                    textStyle={{
                        fontSize: 23,
                        color: "#7205DC"
                    }}
                    
                    dropdownTextStyle={{
                        fontSize: 20,
                    }}

                    dropdownStyle={{
                        width: 150,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: -13
                    }}

                    defaultValue="VERSÃO AA"
                    defaultIndex={-1}
                />
        </Container>
    )
}