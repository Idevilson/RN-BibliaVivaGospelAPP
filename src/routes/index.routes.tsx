import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/drawer';

import { StackContainer } from './stackContainer.routes';
import { AntDesign, Foundation } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={StackContainer}
        options={{
          drawerActiveTintColor: '#7205DC',
          drawerIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
          drawerLabelStyle: { marginLeft: 1 },
        }}
      />

      <Drawer.Screen
        name="Anotações"
        component={StackContainer}
        options={{
          drawerActiveTintColor: '#7205DC',
          drawerIcon: ({ color }) => (
            <Foundation
              name="clipboard-notes"
              size={24}
              color={color}
              style={{
                marginLeft: 5,
              }}
            />
          ),
          drawerLabelStyle: { marginLeft: 5 },
        }}
      />

      <Drawer.Screen
        name="Configurações"
        component={StackContainer}
        options={{
          drawerActiveTintColor: '#7205DC',
          drawerIcon: ({ color }) => (
            <AntDesign
              name="setting"
              size={24}
              color={color}
              style={{
                marginLeft: 2,
              }}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export { DrawerNavigation };
