import styled from 'styled-components/native';

interface ButtonProps {
  isActive: boolean;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
`;

export const BackChapterButton = styled.TouchableOpacity<ButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

export const NextChapterButton = styled.TouchableOpacity<ButtonProps>`
  width: 50px;
  height: 50px;
  border-radius: 50px;

  align-items: center;
  justify-content: center;
`;

export const ChapterInfoContainer = styled.View`
  flex-direction: row;
`;

export const ChapterNumber = styled.Text`
  font-size: 45px;
`;

export const ChapterName = styled.Text`
  font-size: 45px;
`;
