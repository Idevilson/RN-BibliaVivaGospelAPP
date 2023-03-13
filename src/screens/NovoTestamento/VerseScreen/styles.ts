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

export const NumberFontSize = styled .Text<Props>`
  font-size: ${props => (props.fontSize)}px;
`;

export const HeaderModal = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 237px;
`;

export const Label = styled.Text`
  font-size: 25px;
  margin-bottom: 20px;
  align-self: center;
`;

export const BodyModal = styled.View``;

export const BottomModal = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    width: 237px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  
  border-radius: 5px;
  background-color: #7205DC;
  
  width: 90px;
  height: 30px;
  
  margin-top: 20px;
`;

export const LabelButton = styled.Text`
  font-size: 20px;
  color: #fff;
`;

export const SelectContainer = styled.View``;