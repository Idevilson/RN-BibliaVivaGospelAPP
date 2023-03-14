import React, { useState, memo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { useBook } from '../../../hooks/AtBibleContext';
import { BookButton } from '../../../components/bookButton';
import { SearchBar } from '../../../components/searchBar';

import { Container } from './styles';

interface bookDataProps {
  abbrev: string;
  chapters: string[][];
  name: string;
}

function BooksComponent() {
  const { bibleData } = useBook();
  const [books, setBooks] = useState<bookDataProps[]>(bibleData);

  function handleSearchBook(bookName: string) {
    const book = bibleData.filter((item) =>
      item.name
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .includes(bookName)
    );

    setBooks(book);
  }

  return (
    <Container>
      <SearchBar
        setSearchText={(bookName) => handleSearchBook(String(bookName))}
        onPress={() => console.log('Funcionando!')}
      />

      <FlatList
        data={books}
        style={styles.FlatList}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        renderItem={({ item, index }) => (
          <BookButton
            id={index + 1}
            bookName={item.abbrev}
            bookFullName={item.name}
            key={item.abbrev}
            data={item.chapters}
          />
        )}
      />
    </Container>
  );
}

export const Books = memo(BooksComponent);

const styles = StyleSheet.create({
  FlatList: {
    width: '100%',
  },
});
