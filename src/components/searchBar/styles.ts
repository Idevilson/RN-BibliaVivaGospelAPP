import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 40px;

  margin-bottom: 10px;
  border-width: 1px;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  width: 85%;
  height: 100%;
  border-radius: 5px;
  padding-left: 15px;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 100%;
  width: 15%;

  justify-content: center;
  align-items: center;
`;
