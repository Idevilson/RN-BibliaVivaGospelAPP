import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { Container } from './styles';
import { Chapter } from '../../../components/chapter';
import { useBook } from '../../../hooks/AtBibleContext';

export function ChaptersScreens() {
  const { book } = useBook();

  return (
    <Container>
      <FlatList
        style={styles.FlatList}
        data={book.chapters}
        initialNumToRender={10}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: 'center', alignItems: 'center' }}
        renderItem={({ item, index }) => <Chapter index={index + 1} key={index} />}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  FlatList: {
    width: '100%',
    backgroundColor: '#fff',
  },
});
