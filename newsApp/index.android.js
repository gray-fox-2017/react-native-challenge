/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { TabNavigator } from 'react-navigation';
// import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home'
import NewsScreen from './src/screens/News'
import CameraScreen from './src/screens/Camera'

const App = TabNavigator({
  Home: {screen : HomeScreen},
  News: {screen : NewsScreen},
  Camera: {screen : CameraScreen}
})

// const AppStack = StackNavigator({
//   Home: {screen : HomeScreen},
//   Camera: {screen : CameraScreen}
// })

AppRegistry.registerComponent('newsApp', () => App);
// AppRegistry.registerComponent('newsApp', () => AppStack);
