import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Content from './components/Content'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});


class newsApp extends Component {
  render() {
    return (
      <View>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Content />
      </View>
    );
  }
}

export default newsApp;
