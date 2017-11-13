import React from 'react';
import { TabNavigator } from 'react-navigation';
import Menu from './components/Menu';
import List from './components/List';

const RootNavigator = TabNavigator({
  Main: {
    screen: List,
  },
  Menu: {
    screen: Menu,
  },
});

export default RootNavigator;
