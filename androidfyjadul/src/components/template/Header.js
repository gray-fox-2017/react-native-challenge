import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Image
} from 'react-native';

let pic;
class Header extends Component {
  constructor(props) {
    super(props)
    pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
  }
  render() {
    return (
      <View style={styles.headerC}>
        <View style={styles.rowC}>
          <View style={styles.logoC}>
            <Image source={pic} style={{resizeMode: 'stretch', flex:1}}/>
          </View>
          <View style={styles.titleC}>
            <Text style={styles.title}>TRUMPISME</Text>
            <Text style={styles.subtitle}>Mengakrabkan diri dengan konsep TRUMP</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerC: {
    flex: 2,
    backgroundColor: 'powderblue'
  },
  rowC: {
    flex: 1,
    flexDirection: 'row'
  },
  logoC: {
    flex: 2
  },
  titleC: {
    flex: 8,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333333',
    marginBottom: 5,
  },
});

export default Header