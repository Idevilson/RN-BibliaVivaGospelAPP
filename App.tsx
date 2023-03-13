import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AtBookProvider } from "./src/hooks/AtBibleContext";
import { NtBookProvider } from "./src/hooks/NtBibleContext";
import { BibleVersionProvider } from "./src/hooks/BibleVersionContext";
import { DrawerNavigation } from './src/routes/index.routes';
import { SafeAreaView } from 'react-native';

export default function App() {
  return(
    <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <BibleVersionProvider>
                    <AtBookProvider>
                        <NtBookProvider>
                            <DrawerNavigation />
                        </ NtBookProvider>
                    </ AtBookProvider>
                </BibleVersionProvider>
            </NavigationContainer>
        </GestureHandlerRootView>
    </SafeAreaView>
  )
}
