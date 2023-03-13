import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

import Modal from "react-native-modal";
import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import Slider from '@react-native-community/slider';
import { Select } from '@mobile-reality/react-native-select-pro';

import { 
    BodyModal, 
    BottomModal, 
    Button, 
    HeaderModal, 
    Label, 
    LabelButton, 
    NumberFontSize, 
    SelectContainer 
} from "./styles";

import {
    Feather
} from '@expo/vector-icons';

interface versionSelectedProps {
    value: string;
    label: string;
}

interface ConfigModalProps {
    modalIsVisible: boolean;
    fontSize: number;
    versionSelected: versionSelectedProps;
    setVersionSelected: React.Dispatch<React.SetStateAction<versionSelectedProps>>;
    setModalIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
    handleSettings: (value: number) => void;
}

export function ConfigModal({ 
    modalIsVisible,
    versionSelected,
    fontSize,
    setModalIsVisible,
    handleSettings,
    setVersionSelected
}: ConfigModalProps) {


    return(
        <Modal
            isVisible={modalIsVisible}
        >
        <SelectProvider>
            <View style={styles.ModalContainer}>
                        <View style={styles.ModalView}>
                            <Label>TAMANHO DA FONTE</Label>

                            <HeaderModal>
                                <Feather
                                    name="minus"
                                    size={24}
                                    color="black"
                                />
                                <NumberFontSize fontSize={fontSize}>{fontSize}</NumberFontSize>
                                <Feather
                                    name="plus"
                                    size={24}
                                    color="black"
                                />
                            </HeaderModal>

                            <BodyModal>
                                <Slider
                                    style={{
                                        width: 250,
                                        height: 40,
                                    }}
                                    minimumValue={15}
                                    maximumValue={35}
                                    step={1}
                                    onSlidingComplete={(value) => handleSettings(value)}
                                    thumbTintColor="#7205DC"
                                    minimumTrackTintColor="#7205DC"
                                    maximumTrackTintColor="#000000"
                                />

                                <Label>VERSÃO DA BÍBLIA</Label>
                                <SelectContainer>
                                    <Select
                                        defaultOption={versionSelected}
                                        animated={true}
                                        onSelect={(value) => setVersionSelected(value)}
                                        options={[
                                            { value: "0" , label: "VERSÃO AA"},
                                            { value: "1", label: "VERSÃO ACF"},
                                            { value: "2", label: "VERSÃO NVI"}
                                        ]}
                                    />
                                </SelectContainer>
                            </BodyModal>

                            <BottomModal>
                                <Button onPress={() => setModalIsVisible(false)}>
                                    <LabelButton>FECHAR</LabelButton>
                                </Button>
                            </BottomModal>
                        </View>
                    </View>
            </SelectProvider>
    </Modal>
    )
}


const styles = StyleSheet.create({
    Container: {
        paddingLeft: 5,
        paddingRight: 5,
        marginBottom: 20
    },
    ModalContainer: {

    },
    ModalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 25,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 8
    },
    modalVersicleButton: {
        width: "100%",
    }
})