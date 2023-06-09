import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createMaterialTopTabNavigator();

import { ChaptersScreens } from '../screens/AntigoTestamento/ChaptersScreens';
import { VerseScreen } from '../screens/AntigoTestamento/VerseScreen';
import { Books } from '../screens/AntigoTestamento/Home';
import { Loading } from '../components/loading';
import { TopLabelBibleVersion } from '../components/topLabelBibleVersion';
import { useBibleVersion } from '../hooks/BibleVersionContext';

import { AtBookProvider } from '../hooks/AtBibleContext';

export function AtTopTabs() {
  const { versionSelected } = useBibleVersion();

  return (
    <AtBookProvider>
      <TopLabelBibleVersion bibleVersion={versionSelected.label} />
      <Tab.Navigator initialRouteName={'LIVROS'} tabBarPosition={'bottom'}>
        <Tab.Screen
          name={'LIVROS'}
          component={Books}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="book-multiple" size={24} color="#7205DC" />
            ),
            lazy: true,
            lazyPlaceholder: () => <Loading />,
            tabBarActiveTintColor: '#7205DC',
            tabBarLabelStyle: { fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: '#7205DC' },
          }}
        />

        <Tab.Screen
          name={'CAPÍTULOS'}
          component={ChaptersScreens}
          options={{
            tabBarIcon: () => (
              <MaterialCommunityIcons name="numeric-3-box-multiple" size={24} color="#7205DC" />
            ),
            lazy: true,
            lazyPlaceholder: () => <Loading />,
            tabBarActiveTintColor: '#7205DC',
            tabBarLabelStyle: { fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: '#7205DC' },
          }}
        />

        <Tab.Screen
          name={'VERSÍCULOS'}
          component={VerseScreen}
          options={{
            tabBarIcon: () => <MaterialIcons name="library-books" size={24} color="#7205DC" />,
            lazy: true,
            lazyPlaceholder: () => <Loading />,
            tabBarActiveTintColor: '#7205DC',
            tabBarLabelStyle: { fontWeight: 'bold' },
            tabBarIndicatorStyle: { backgroundColor: '#7205DC' },
          }}
        />
      </Tab.Navigator>
    </AtBookProvider>
  );
}
