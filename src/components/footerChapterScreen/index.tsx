import React, { useState } from 'react';

import {
  BackChapterButton,
  ChapterNumber,
  Container,
  NextChapterButton,
  ChapterInfoContainer,
  ChapterName,
} from './styles';

import { Feather } from '@expo/vector-icons';
import { useBook } from '../../hooks/AtBibleContext';

interface chapterNameProps {
  chapterName: string;
}

export function FooterChapterScreen({ chapterName }: chapterNameProps) {
  const [isBackChapterButtonEnable, SetIsBackChapterButtonEnable] = useState(false);
  const [isNextChapterButtonEnable, SetIsNextChapterButtonEnable] = useState(false);

  const { book, chapterNumber, handleSetChapterNumber } = useBook();

  function handleChangeToPrevChpter() {
    if (chapterNumber === 0) {
      console.log(chapterNumber, 'ação inválida');

      return null;
    }

    handleSetChapterNumber(chapterNumber - 1);
  }

  function handleChangeToNextChpter() {
    if (chapterNumber >= book.chapters.length - 1) {
      console.log('ação inválida');
      return null;
    }

    console.log(chapterNumber);

    handleSetChapterNumber(chapterNumber + 1);
  }

  return (
    <Container>
      <BackChapterButton
        onPress={() => handleChangeToPrevChpter()}
        isActive={isBackChapterButtonEnable}
      >
        <Feather name="arrow-left-circle" size={45} />
      </BackChapterButton>

      <ChapterInfoContainer>
        <ChapterName> {chapterName} </ChapterName>
        <ChapterNumber> {chapterNumber + 1} </ChapterNumber>
      </ChapterInfoContainer>

      <NextChapterButton
        onPress={() => handleChangeToNextChpter()}
        isActive={isNextChapterButtonEnable}
      >
        <Feather name="arrow-right-circle" size={45} />
      </NextChapterButton>
    </Container>
  );
}
