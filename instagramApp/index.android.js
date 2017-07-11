import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import list from './src/components/list'
import camera from './src/components/camera'

export default class trialProject extends Component {
  static navigationOptions = {
    title: 'Home'
  }
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to My React Native App!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Button
          onPress={() => navigate('list')}
          title="Next"
          color="#841584"
        />
        <Button
          onPress={() => navigate('camera')}
          title="Open a cam"
          color="#bbbb"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const App = StackNavigator({
  home: { screen: trialProject },
  list: { screen: list },
  camera: { screen: camera }
})

AppRegistry.registerComponent('trialProject', () => App);
