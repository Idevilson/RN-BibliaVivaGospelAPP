import React, {
  useEffect,
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import bibleDataAA from '../../biblia/aa/NT.json';
import bibleDataACF from '../../biblia/acf/NT.json';
import bibleDataNVI from '../../biblia/nvi/NT.json';

import { useBibleVersion } from './BibleVersionContext';

interface bookDataProps {
  abbrev: string;
  chapters: string[][];
  name: string;
}

interface BibleContextData {
  bibleData: bookDataProps[];
  book: bookDataProps;
  bookName: string;
  setBookName: Dispatch<SetStateAction<string>>;
  chapterNumber: number;
  handleSetChapterNumber: (value: number) => void;
  handleSelectBook: (bookName: string) => void;
  modalIsVisible: boolean;
  setModalIsVisible: Dispatch<SetStateAction<boolean>>;
  storageFontSize: (value: number) => void;
  setFontSize: Dispatch<SetStateAction<number>>;
  fontSize: number;
}

const NtBibleContext = createContext<BibleContextData>({} as BibleContextData);

interface BibleProviderProps {
  children: ReactNode;
}

import AsyncStorage from '@react-native-async-storage/async-storage';

function NtBookProvider({ children }: BibleProviderProps) {
  const [bibleData, setBibleData] = useState<bookDataProps[]>(bibleDataAA);
  const [book, setBook] = useState(bibleData[0]);
  const [bookName, setBookName] = useState(bibleData[0].abbrev);
  const [chapterNumber, setChapterNumber] = useState(0);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [fontSize, setFontSize] = useState(15);

  const { versionSelected } = useBibleVersion();

  useEffect(() => {
    if (versionSelected.value === '0') {
      setBibleData(bibleDataAA);
      handleSelectBook(bookName);
    } else if (versionSelected.value === '1') {
      setBibleData(bibleDataACF);
      handleSelectBook(bookName);
    } else if (versionSelected.value === '2') {
      setBibleData(bibleDataNVI);
      handleSelectBook(bookName);
    }
  }, [versionSelected.value, bookName]);

  async function storageFontSize(value: number) {
    try {
      await AsyncStorage.setItem('@fontSize', String(value));
    } catch (error) {
      console.log(error);
    }
  }
  async function getFontSize() {
    try {
      const value = await AsyncStorage.getItem('@fontSize');

      if (value !== null) {
        setFontSize(Number(value));
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleSelectBook(bookName: string): void {
    const book = bibleData.find((book) => book.abbrev === bookName);

    setBook(book);
  }
  function handleSetChapterNumber(value: number) {
    setChapterNumber(value - 1);
  }

  useEffect(() => {
    getFontSize();
  }, []);

  return (
    <NtBibleContext.Provider
      value={{
        bibleData,
        book,
        bookName,
        setBookName,
        chapterNumber,
        handleSelectBook,
        handleSetChapterNumber,
        setModalIsVisible,
        modalIsVisible,
        storageFontSize,
        setFontSize,
        fontSize,
      }}
    >
      {children}
    </NtBibleContext.Provider>
  );
}

function useBook(): BibleContextData {
  return useContext(NtBibleContext);
}

export { NtBookProvider, useBook };
