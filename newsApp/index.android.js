/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home'
import NewsScreen from './src/screens/News'

const App = TabNavigator({
  Home: {screen : HomeScreen},
  News: {screen : NewsScreen}
})

AppRegistry.registerComponent('newsApp', () => App);
