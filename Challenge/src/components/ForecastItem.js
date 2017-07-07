import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native'

const { height, width } = Dimension.get('window')
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

export default class ForecastItem extends React.Component {
  render () {
    return (
      <View style={styles.card}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text style={styles.cardTitle}>
            {this.props.date}
          </Text>
        </View>
        <Text style={styles.cardTitle}>
          Perkiraan Cuaca
        </Text>
        <Text style={styles.cardContent}>
          {this.props.description}
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, marginTop: 15 }}>
          <Text style={styles.cardTitle}>
            Temperatur
          </Text>
          <Text style={styles.cardContent}>
            {this.props.temp} ℃
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text style={styles.cardTitle}>
            Kelembaban
          </Text>
          <Text style={styles.cardContent}>
            {this.props.humidity} %
          </Text>
        </View>
      </View>
    )
  }
}