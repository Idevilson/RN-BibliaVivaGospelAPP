import React from 'react';

import { StyleSheet, TouchableOpacity, FlatList, View, Modal } from 'react-native';

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
} from 'react-native-reanimated';

import { PanGestureHandler } from 'react-native-gesture-handler';

import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import Slider from '@react-native-community/slider';
import { Select } from '@mobile-reality/react-native-select-pro';

import { AntDesign, Feather } from '@expo/vector-icons';

import { useBook } from '../../../hooks/NtBibleContext';

import {
  Container,
  Verse,
  VerseNumber,
  NumberFontSize,
  HeaderModal,
  Label,
  BodyModal,
  BottomModal,
  Button,
  LabelButton,
  TextContainer,
  SelectContainer,
} from './styles';

import { useBibleVersion } from '../../../hooks/BibleVersionContext';

const ButtonAnimated = Animated.createAnimatedComponent(TouchableOpacity);

export function VerseScreen() {
  const { setVersionSelected, versionSelected } = useBibleVersion();

  const {
    book,
    chapterNumber,
    setModalIsVisible,
    modalIsVisible,
    setFontSize,
    fontSize,
    storageFontSize,
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

  console.log('Tela dos versos');

  return (
    <Container>
      <View style={styles.Container}>
        <FlatList
          data={book.chapters[chapterNumber]}
          renderItem={({ item, index }) => (
            <TextContainer>
              <VerseNumber>{' ' + (index + 1) + ' '}</VerseNumber>
              <Verse selectable={true} fontSize={fontSize} key={index}>
                {item}
              </Verse>
            </TextContainer>
          )}
        />
      </View>

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

      <View style={styles.ModalContainer}>
        <Modal visible={modalIsVisible} transparent={true} animationType={'fade'}>
          <SelectProvider>
            <View style={styles.ModalContainer}>
              <View style={styles.ModalView}>
                <Label>TAMANHO DA FONTE</Label>

                <HeaderModal>
                  <Feather name="minus" size={24} color="black" />
                  <NumberFontSize fontSize={fontSize}>{fontSize}</NumberFontSize>
                  <Feather name="plus" size={24} color="black" />
                </HeaderModal>

                <BodyModal>
                  <Slider
                    style={{
                      width: 250,
                      height: 40,
                    }}
                    minimumValue={15}
                    maximumValue={35}
                    step={1}
                    onSlidingComplete={(value) => handleSettings(value)}
                    thumbTintColor="#7205DC"
                    minimumTrackTintColor="#7205DC"
                    maximumTrackTintColor="#000000"
                  />

                  <Label>VERSÃO DA BÍBLIA</Label>
                  <SelectContainer>
                    <Select
                      defaultOption={versionSelected}
                      onSelect={(value) => setVersionSelected(value)}
                      options={[
                        { value: '0', label: 'VERSÃO AA' },
                        { value: '1', label: 'VERSÃO ACF' },
                        { value: '2', label: 'VERSÃO NVI' },
                      ]}
                    />
                  </SelectContainer>
                </BodyModal>

                <BottomModal>
                  <Button onPress={() => setModalIsVisible(false)}>
                    <LabelButton>FECHAR</LabelButton>
                  </Button>
                </BottomModal>
              </View>
            </View>
          </SelectProvider>
        </Modal>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingLeft: 5,
    paddingRight: 5,
    marginBottom: 20,
  },
  ModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ModalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 8,
  },
});
