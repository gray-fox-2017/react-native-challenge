
import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

import Landing from './src/screens/Landing'
import Weather from './src/screens/Weather'

const App = StackNavigator({
  Landing: { screen: Landing },
  Weather: { screen: Weather }
})

AppRegistry.registerComponent('Challenge', () => App);
