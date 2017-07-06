import React from 'react'
import {
  View
} from 'react-native'
import { Provider } from 'react-redux'

import CurrentWeather from '../components/CurrentWeather'
import CitySearch from '../components/CitySearch'
import store from '../store'

export default class Weather extends React.Component {
  static navigationOptions = {
    title: 'Data Cuaca'
  }
  render () {
    return (
      <Provider store={store}>
        <View style={{ alignItems: 'center' }}>
          <CitySearch />
          <CurrentWeather />
        </View>
      </Provider>
    )
  }
}