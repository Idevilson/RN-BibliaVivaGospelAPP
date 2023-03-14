import React, { memo } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  BookButtonHeader,
  HeaderText,
  BookButtonBody,
  BodyText,
  BookButtonFooter,
  FooterText,
} from './styles';

import { useBook } from '../../hooks/AtBibleContext';

interface BookButtonProps {
  id: number;
  bookName: string;
  bookFullName: string;
  data?: any;
}

function BookButtonComponent({ id, bookName, bookFullName, data }: BookButtonProps) {
  const navigation = useNavigation();
  const { setBookName } = useBook();
  function handleCallChapter() {
    setBookName(bookName);
    navigation.navigate('CAPÍTULOS', { bookData: data });
  }

  return (
    <Container onPress={() => handleCallChapter()}>
      <BookButtonHeader>
        <HeaderText> {id} </HeaderText>
      </BookButtonHeader>
      <BookButtonBody>
        <BodyText> {bookName} </BodyText>
      </BookButtonBody>
      <BookButtonFooter>
        <FooterText> {bookFullName} </FooterText>
      </BookButtonFooter>
    </Container>
  );
}

export const BookButton = memo(BookButtonComponent, (prevProps, nextProps) => {
  return Object.is(prevProps.data, nextProps.data);
});
