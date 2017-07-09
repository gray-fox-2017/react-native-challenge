import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  // Navigator,
  // Text,
  // View,
  // ScrollView
} from 'react-native';


import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Content, Footer } from './src/components'


import store from './src/store/index';


export default class androidfyjadul extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <Content />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(62, 16, 65)'
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  content: {
    flex: 9,
    backgroundColor: 'skyblue'
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

AppRegistry.registerComponent('androidfyjadul', () => androidfyjadul);
