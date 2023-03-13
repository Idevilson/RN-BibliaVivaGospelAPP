import React, { useState } from "react"

import {
    TouchableOpacity,
    FlatList,
} from "react-native";

import  Animated, {
    useAnimatedStyle,
    useSharedValue,
    useAnimatedGestureHandler
}  from "react-native-reanimated"

import {
    PanGestureHandler,
} from "react-native-gesture-handler";


import {
    AntDesign,
    Feather
} from '@expo/vector-icons';

import { useBook } from "../../../hooks/AtBibleContext";

import {
    Container,
    Verse,
    VerseNumber,
    TextContainer,
    FlatListContainer
} from "./styles";

import { useBibleVersion } from "../../../hooks/BibleVersionContext";
import {BotomLabelBibleVersion} from "../../../components/bottomLabelBibleVersion";
import { ConfigModal } from "../../../components/configModal";

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function VerseScreen() {
    const {
        versionSelected,
        setVersionSelected
    } = useBibleVersion();

    const {
        book,
        chapterNumber,
        setModalIsVisible,
        setFontSize,
        fontSize,
        storageFontSize,
        modalIsVisible
    } = useBook();

    const positionY = useSharedValue(330);
    const positionX = useSharedValue(341);

    const onGestureEvent = useAnimatedGestureHandler({
        onStart(event, ctx: any){
                ctx.positionX = positionX.value;
                ctx.positionY = positionY.value;
        },
        onActive(event, ctx: any){
            positionX.value = event.translationX + ctx.positionX;
            positionY.value = event.translationY + ctx.positionY;
        },

        onEnd(){

        }
    })

    const settingsButtonStyle = useAnimatedStyle(() => {
        return {
            transform : [
                { translateX: positionX.value },
                { translateY: positionY.value },
            ]
        }
    });
    
    function handleSettings(value: number){
        setFontSize(value);
        storageFontSize(value);
    }

    console.log("Tela dos versos");

    return (
        <Container>
            <FlatListContainer>
                <FlatList
                    data={book.chapters[chapterNumber]}
                    renderItem={({ item, index }) => (
                                <TextContainer>
                                    <VerseNumber>
                                        {" " + (index + 1) + " "}
                                    </VerseNumber>
                                    <Verse
                                        selectable={true}
                                        fontSize={fontSize}
                                        key={index}
                                    >
                                        {item}
                                    </Verse>
                                </TextContainer>
                    )}
                />
                <BotomLabelBibleVersion bibleVersion={versionSelected.label} />
            </FlatListContainer>

            <ConfigModal 
                modalIsVisible={modalIsVisible}
                versionSelected={versionSelected}
                fontSize={fontSize}
                setModalIsVisible={setModalIsVisible}
                setVersionSelected={setVersionSelected}
                handleSettings={handleSettings}
            />
            <PanGestureHandler onGestureEvent={onGestureEvent}>
                <Animated.View
                    style={[
                        settingsButtonStyle,
                        {
                            position: 'absolute',
                            backgroundColor: "#7205DC",
                            width: 50,
                            height: 50,
                            borderRadius: 25,

                            alignItems: "center",
                            justifyContent: "center"
                        }
                    ]}
                >
                    <ButtonAnimated onPress={() => setModalIsVisible(true)}>
                        <AntDesign name="setting" size={34} color="#ffffff" />
                    </ButtonAnimated>
                </Animated.View>
            </PanGestureHandler>
        </Container>
    )
}