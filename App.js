import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Menu from './components/Menu';
import List from './components/List';

const NavigatorStyle = {
    tabBarOptions: {
        indicatorStyle: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
            fontSize: 14
        },
        style: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
            backgroundColor: '#7E57C2'
        }
    }
}

const RootNavigator = TabNavigator({
  Main: {
    screen: List,
  },
  Menu: {
    screen: Menu,
  },
}, NavigatorStyle);

export default RootNavigator;
