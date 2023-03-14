import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { AtTopTabs } from './atTabs';
import { NtTopTabs } from './ntTabs';

const Stack = createNativeStackNavigator();

export function StackContainer() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'AtTopTabs'} component={AtTopTabs} />
      <Stack.Screen name={'NtTopTabs'} component={NtTopTabs} />
    </Stack.Navigator>
  );
}
