import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  tabBarIcon,
  tabBarLabel,
  Image
} from 'react-native';


import FrmTrump from '../components/trumpOpinion/FrmTrump';
import ContentTrump from '../components/trumpOpinion/ContentTrump';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state= {
      username: ''
    }
  }
  static navigationOptions = {
    tabBarLabel : 'Home',
    tabBarIcon: ({tintColor}) => {
      <Image
        source={{ uri : 'https://thumb7.shutterstock.com/display_pic_with_logo/1145729/428434771/stock-vector-monster-demon-or-enemy-flat-icon-for-games-and-websites-428434771.jpg'}}
        style={[styles.icon, tintColor: tintColor]}
      />
    },
    // title : 'Home'
  }
  render () {
    return (
      <View>
        <Text>Discover what Trump think about you</Text>
        <FrmTrump / >
        <ContentTrump />
      </View>
    )


  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  }
})

export default Home;