
import React, { Component } from 'react';
import axios from 'axios'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions
} from 'react-native';


export default class Challenge extends Component {
  constructor () {
    super ()
    this.state = {
      currentWeather: {},
      text: '',
      description: '',
      data: {}
    }

    this._enterSearch = this._enterSearch.bind(this)
  }

  _getCurrentWeather () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=Jakarta&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.setState({
        currentWeather: response.data,
        description: response.data.weather[0].description,
        data: response.data.main
      })
    })
    .catch(err => console.log(err))
  }

  _enterSearch () {
    axios.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.state.text + '&APPID=e8fa0052e0118e027517a03e5b1da02e')
    .then(response => {
      this.setState({
        currentWeather: response.data,
        description: response.data.weather[0].description,
        data: response.data.main
      })
    })
    .catch(err => console.log(err))
  }

  componentDidMount () {
    this._getCurrentWeather()
  }

  render() {
    const { height, width } = Dimensions.get('window')
    const cardWidth = 0.75 * width
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>
          HacktivBMKG
        </Text>
        <Text style={styles.instructions}>
          To get started, input your city here
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this._enterSearch()}
          value={this.state.text}
          placeholder='City name'
        />
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <View style={styles.card}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text style={styles.cardTitle}>
              Kota
            </Text>
            <Text style={styles.cardContent}>
              {this.state.currentWeather.name}
            </Text>
          </View>
          <Text style={styles.cardTitle}>
            Perkiraan Cuaca
          </Text>
          <Text style={styles.cardContent}>
            {this.state.description}
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15, marginTop: 15 }}>
            <Text style={styles.cardTitle}>
              Temperatur
            </Text>
            <Text style={styles.cardContent}>
              {Math.round(this.state.data.temp - 273)} ℃
            </Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
            <Text style={styles.cardTitle}>
              Kelembaban
            </Text>
            <Text style={styles.cardContent}>
              {this.state.data.humidity} %
            </Text>
          </View>
        </View>
        <Text style={styles.instructions}>
          Perkiraan cuaca tiga hari kedepan
        </Text>
      </View>
    );
  }
}

const { height, width } = Dimensions.get('window')
const cardHeight = 0.1 * height
const cardWidth = 0.75 * width
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  mainHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    margin: 15,
    textAlign: 'center',
    width: 150,
    height: 50
  },
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
});

AppRegistry.registerComponent('Challenge', () => Challenge);
