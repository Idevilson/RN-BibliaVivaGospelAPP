import React, { Dispatch, SetStateAction } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Container, Input, SearchButton } from './styles';

interface SearchBarProps {
  setSearchText: Dispatch<SetStateAction<string>>;
  onPress: () => void;
}

export function SearchBar({ setSearchText, onPress }: SearchBarProps) {
  return (
    <Container>
      <Input placeholder="PESQUISAR" onChangeText={(value) => setSearchText(value.toLowerCase())} />

      <SearchButton onPress={onPress}>
        <FontAwesome name="search" size={25} color="#7205DC" />
      </SearchButton>
    </Container>
  );
}
