import React, { Component } from 'react'
import {
  AppRegistry
} from 'react-native'
import {
  StackNavigator
} from 'react-navigation'

import Landing from './screens/Landing'
import Weather from './screens/Weather'
import Earthquake from './screens/Earthquake'
import EarthquakeSearch from './screens/EarthquakeSearch'

export default App = StackNavigator({
  Landing: { screen: Landing },
  Weather: { screen: Weather },
  Earthquake: { screen: Earthquake },
  EarthquakeSearch: {
    screen: EarthquakeSearch,
    navigationOptions: ({navigation}) => ({
      title: `Gempa (${navigation.state.params.startDate} - ${navigation.state.params.endDate})`
    })
  }
})