import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'
import { connect } from 'react-redux'

import { getCurrentWeather } from '../actions'

const { height, width } = Dimensions.get('window')
const cardHeight = 0.1 * height
const cardWidth = 0.75 * width
const styles = StyleSheet.create({
  card: {
    height: 240,
    width: cardWidth,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderRadius: 6,
    padding: 20
  },
  cardTitle: {
    fontWeight: '500',
    fontSize: 23
  },
  cardContent: {
    fontStyle: 'italic',
    fontSize: 20
  }
})

class CurrentWeather extends React.Component {
  componentDidMount () {
    this.props.getCurrentWeather()
  }

  render () {
    return (
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text style={styles.cardTitle}>
            Kota
          </Text>
          <Text style={styles.cardContent}>
            {this.props.currentWeather.name}
          </Text>
        </View>
        <Text style={styles.cardTitle}>
          Perkiraan Cuaca
        </Text>
        <Text style={styles.cardContent}>
          {this.props.currentWeather.description}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, marginTop: 15 }}>
          <Text style={styles.cardTitle}>
            Temperatur
          </Text>
          <Text style={styles.cardContent}>
            {this.props.currentWeather.temp} ℃
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text style={styles.cardTitle}>
            Kelembaban
          </Text>
          <Text style={styles.cardContent}>
            {this.props.currentWeather.humidity} %
          </Text>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeather: state.weather.currentWeather
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentWeather: () => dispatch(getCurrentWeather())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather)