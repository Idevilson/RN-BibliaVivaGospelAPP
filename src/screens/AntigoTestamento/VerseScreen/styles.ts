import styled from "styled-components/native";

interface Props {
    fontSize: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Verse = styled.Text<Props>`
  font-size: ${props => (props.fontSize)}px;
  text-align: justify;
  
  margin-bottom: 5px;
`;

export const TextContainer = styled.Text`
  text-align: justify;
`;

export const VerseNumber = styled.Text`
  font-size: 25px;
  color: #7205DC;
`;


export const FlatListContainer = styled.View`
  padding-left: 5;
  padding-right: 5;
  margin-bottom: 20;
`;