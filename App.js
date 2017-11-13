import React from 'react';
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
