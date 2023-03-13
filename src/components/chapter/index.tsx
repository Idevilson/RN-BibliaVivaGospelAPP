import React, { memo } from "react";
import { useNavigation } from "@react-navigation/native";

import  {
    Container,
    ChapterNumber
} from "./styles";
import {useBook} from "../../hooks/AtBibleContext";

interface dataProps {
    abbrev: string;
    chapters: [];
    name: string;
}

interface chapterProps {
    chapterData?: dataProps;
    index: number;
}

function ChapterComponent({ chapterData, index }: chapterProps) {
    const navigation = useNavigation();
    const { handleSetChapterNumber } = useBook();
    function handleCallChalterScreen() {
        handleSetChapterNumber(index);
        navigation.navigate("VERSÍCULOS", { data: chapterData });
    }

    return (
        <>
            <Container
                onPress={() => handleCallChalterScreen()}
            >
                <ChapterNumber>
                    { index }
                </ChapterNumber>
            </Container>
        </>
    )
}

export const Chapter = memo(ChapterComponent, (prevProps, nextProps) => {
    return prevProps.index === nextProps.index;
})