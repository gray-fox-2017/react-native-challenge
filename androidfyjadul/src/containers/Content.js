// import React, { Component } from 'react';
// import {
//   AppRegistry
// } from 'react-native';
import {TabNavigator} from 'react-navigation';

import  HomeScreen  from './Home'
import  EnemiesScreen  from './Enemies'
// import CameraScreen from './'

const Content = TabNavigator({
  Home: {screen : HomeScreen},
  Enemies : {screen: EnemiesScreen},
  // Camera: {screen: CameraScreen}
})

export default Content