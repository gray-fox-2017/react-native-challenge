import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {
  AppRegistry,
  Text,
  View,
  Modal,
  Image,
  StyleSheet,
  TouchableHighlight,
  tabBarLabel
} from 'react-native';

// import { connect } from 'react-redux';


class EnemiesData extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    // alert(this.props.data)
    // let enemyRow =
    // (typeof this.props.enemy === 'undefined')?
    // <View></View> :
    // <View>
    //
    // </View>
//onPress={() => { this.props.setModalVisible(true) }}

// <TouchableHighlight key={idx} >
//   <Text>Kepanggil yayyy</Text>
//   <Image source={{uri: 'https://api.adorable.io/avatars/285/'+this.props.enemy+'.png'}}/>
// </TouchableHighlight>
//  this.props.data.map( (enemy,idx) => `<Text key=${idx}>${enemy.name}</Text>`)
// <Image
//   style={{width: 50, height: 50}}
//   source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
// />
//
    return (
      <View>
      {
        (typeof this.props.data !== 'undefined' && this.props.data.length > 0 )  ?
          this.props.data.map( (enemy,idx) => {
            let pic = {uri: 'https://api.adorable.io/avatars/285/'+ enemy.name +'.png'}
            return (
              <TouchableHighlight key={idx} onPress={()=>{ this.props.setModalVisible(true,idx) }}>
                <View >
                  <Image source={ pic } style={{width:30, height:30}} />
                  <Text>{enemy.name}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        :
        <Text>Ga ada</Text>
      }
      </View>
    )

  }
}

const styles = StyleSheet.create({
  icon: {
    width: 26,
    height: 26,
  },
  h3: {
    fontSize: 20,
  },
  listEnemies: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  enemy : {
    width:200,
    height:200,
    backgroundColor: 'skyblue',
    marginBottom: 10
  }
})

export default EnemiesData;