
import React, { Component } from 'react'
import {
  AppRegistry,
  View
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

import Landing from './src/screens/Landing'
import Weather from './src/screens/Weather'

class Challenge extends Component {
  render() {
    return (
      <View>
        <Weather />
      </View>
    );
  }
}

const App = StackNavigator({
  Landing: { screen: Landing },
  Weather: { screen: Weather }
})

AppRegistry.registerComponent('Challenge', () => App);
