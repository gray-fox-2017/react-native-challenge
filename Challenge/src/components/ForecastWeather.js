import React from 'react'
import {
  View
} from 'react-native'
import { connect } from 'react-redux'

import { getForecasts } from '../actions'
import ForecastItem from './ForecastItem'

class ForecastWeather extends React.Component {
  componentDidMount () {
    this.props.getForecasts()
  }

  render () {
    return (
      <View>
        {this.props.forecastWeathers.map((weather, index) => (
          (weather.dt_txt.includes("06:00:00")) ? <ForecastItem
                                                    description={weather.weather[0].description}
                                                    date={new Date(weather.dt_txt).toDateString()}
                                                    humidity={weather.main.humidity}
                                                    temp={Math.round(weather.main.temp - 273)}
                                                    key={index}
                                                  /> : ''
        ))}
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    forecastWeathers: state.weather.forecastWeathers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getForecasts: () => dispatch(getForecasts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ForecastWeather)