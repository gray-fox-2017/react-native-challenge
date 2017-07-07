import React from 'react'
import {
  View
} from 'react-native'

import CurrentWeather from '../components/CurrentWeather'
import CitySearch from '../components/CitySearch'

export default class Weather extends React.Component {
  static navigationOptions = {
    title: 'Data Cuaca'
  }
  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <CitySearch />
        <CurrentWeather />
      </View>
    )
  }
}