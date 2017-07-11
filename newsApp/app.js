import React, {Component} from 'react'
import {
  AppRegistry
} from 'react-native';
import { TabNavigator } from 'react-navigation'

import HomeScreen from './src/screens/Home'
import NewsScreen from './src/screens/News'
import CameraScreen from './src/screens/Camera'

const App = TabNavigator({
  Home: {screen : HomeScreen},
  News: {screen : NewsScreen},
  Camera: {screen : CameraScreen}
})


export default App;
