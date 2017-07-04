import React, {Component} from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import store from './store/configurationStore'
import { Provider } from 'react-redux';

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
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={{color:'black'}}>
            NEWSAPI.ORG
          </Text>
          <Content />
        </View>
      </Provider>
    );
  }
}

export default newsApp;
