import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  tabBarIcon,
  Button,
  TouchableHighlight,
  tabBarLabel
} from 'react-native';

// import {Link} from 'react-router-dom';
// import { connect } from 'react-redux';


class EnemyData extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    let dt;
    if (typeof this.props.cenemy !== 'undefined') {
      let cenemy = this.props.cenemy
      let pic = {uri: 'https://api.adorable.io/avatars/285/'+ cenemy.name +'.png'}
      // alert(cenemy.name);
      dt =
      <View>
        <Text>Dalam enemy data</Text>
        <Text>{cenemy.name} -- {cenemy.gender} </Text>
        <Image source={ pic } style={{width:200, height:200}} />
        <Text>
        {cenemy.name} is a {cenemy.gender} {cenemy.species} from {cenemy.homeworld} with height {cenemy.height  || 'secret'} cm and mass {cenemy.mass || 'secret'} kg.
               {cenemy.gender === 'male'? 'He'  : 'She'} has {cenemy.hair_color} hair, evil-looking {cenemy.eye_color} eye and {cenemy.skin_color || 'unknown'} skin.
        </Text>
        <Text>
          We have to defeat him for the Glory of Trump
        </Text>
      </View>
    } else {
      <View> We havent get a clear result</View>
    }
    // console.log('---------------------------------------3')
    // console.log(this.props.enemies);
    return (
      <View>
      { dt }
      </View>
    )
  }
}
export default EnemyData;
