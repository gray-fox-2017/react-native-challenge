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
    alignItems: 'center'
  },
});


class newsApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color:'black'}}>
          NEWSAPI.ORG
        </Text>
        <Content />
      </View>
    );
  }
}

export default newsApp;
