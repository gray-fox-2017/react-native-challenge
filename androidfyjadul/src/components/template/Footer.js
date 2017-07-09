import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';

class Footer extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.subtitle}>Copyright 2017 by ppsari</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  footer: {
    flex: 0.5,
    backgroundColor: 'teal',
    paddingTop: 0,
    paddingBottom: 0
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
  },
});

export default Footer