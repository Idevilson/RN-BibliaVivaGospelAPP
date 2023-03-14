import React from 'react';
import { TouchableOpacity, FlatList, Share, Alert } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

import { useBook } from '../../../hooks/AtBibleContext';
import { useBibleVersion } from '../../../hooks/BibleVersionContext';

import { ConfigModal } from '../../../components/configModal';
import { FooterChapterScreen } from '../../../components/footerChapterScreen';

import {
  Container,
  Verse,
  VerseNumber,
  TextContainer,
  FlatListContainer,
  ItemButton,
} from './styles';
import { AntDesign } from '@expo/vector-icons';

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function VerseScreen() {
  const { versionSelected, setVersionSelected } = useBibleVersion();

  const {
    book,
    chapterNumber,
    setModalIsVisible,
    setFontSize,
    fontSize,
    storageFontSize,
    modalIsVisible,
  } = useBook();

  const positionY = useSharedValue(330);
  const positionX = useSharedValue(341);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart(event, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = event.translationX + ctx.positionX;
      positionY.value = event.translationY + ctx.positionY;
    },

    onEnd() {},
  });

  const settingsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: positionX.value }, { translateY: positionY.value }],
    };
  });

  function handleSettings(value: number) {
    setFontSize(value);
    storageFontSize(value);
  }

  async function handleShareVersicle(
    item: string,
    index: number,
    bookName: string,
    Chapter: number
  ) {
    console.log(item, index);

    try {
      const result = await Share.share({
        message: `${bookName} capítulo:${Chapter + 1} Versículo:${index + 1} "${item}"`,
      });

      console.log(result);
    } catch (error) {
      Alert.alert(error.message);
    }
  }

  return (
    <Container>
      <FlatListContainer>
        <FlatList
          style={{
            height: '95%',
          }}
          data={book.chapters[chapterNumber]}
          renderItem={({ item, index }) => (
            <ItemButton
              onLongPress={() => handleShareVersicle(item, index, book.name, chapterNumber)}
            >
              <TextContainer>
                <VerseNumber>{' ' + (index + 1) + ' '}</VerseNumber>
                <Verse selectable={true} fontSize={fontSize} key={index}>
                  {item}
                </Verse>
              </TextContainer>
            </ItemButton>
          )}
        />
        <FooterChapterScreen chapterName={book.abbrev} />
      </FlatListContainer>

      <ConfigModal
        modalIsVisible={modalIsVisible}
        versionSelected={versionSelected}
        fontSize={fontSize}
        setModalIsVisible={setModalIsVisible}
        setVersionSelected={setVersionSelected}
        handleSettings={handleSettings}
      />

      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View
          style={[
            settingsButtonStyle,
            {
              position: 'absolute',
              backgroundColor: '#7205DC',
              width: 50,
              height: 50,
              borderRadius: 25,

              alignItems: 'center',
              justifyContent: 'center',
            },
          ]}
        >
          <ButtonAnimated onPress={() => setModalIsVisible(true)}>
            <AntDesign name="setting" size={34} color="#ffffff" />
          </ButtonAnimated>
        </Animated.View>
      </PanGestureHandler>
    </Container>
  );
}
