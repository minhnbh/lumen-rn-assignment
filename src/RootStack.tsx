import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Container from './Container';
import {Image} from 'react-native';
import imageIcon from './assets/icons';
import styles from './styles';

const RootStack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const EmptyComponent = () => null;

const BOTTOM_TABS = [
  {
    name: 'Home',
    component: Container,
    Icon: () => <Image source={imageIcon.home} />,
  },
  {
    name: 'Notification',
    component: EmptyComponent,
    Icon: () => <Image source={imageIcon.bell} />,
  },
  {
    name: 'Card',
    component: EmptyComponent,
    Icon: () => <Image source={imageIcon.card} />,
  },
  {
    name: 'Profile',
    component: EmptyComponent,
    Icon: () => <Image source={imageIcon.user} />,
  },
];

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator barStyle={styles.barStyle}>
      {BOTTOM_TABS.map(item => (
        <Tab.Screen
          key={`bottom_tab_${item.name}`}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: '',
            tabBarIcon: item.Icon,
            tabBarBadge: item.name === 'Notification' ? '' : undefined,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export const Root = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator initialRouteName={BOTTOM_TABS[0].name}>
        <RootStack.Screen
          name="tab"
          component={BottomTabsNavigator}
          options={{headerShown: false}}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
