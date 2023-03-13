import react from "react";

import {
    Container,
    BibleVersion
} from "./styles";

interface topLabelBibleVersionProps {
    bibleVersion: string;
}

export function BotomLabelBibleVersion({ bibleVersion }: topLabelBibleVersionProps){

    return (
        <Container>
            <BibleVersion>
                { bibleVersion }
            </BibleVersion>
        </Container>
    )
}