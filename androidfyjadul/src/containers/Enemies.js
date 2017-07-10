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
import { connect } from 'react-redux';

import Enemy from '../components/Enemy';
import EnemiesData from '../components/EnemiesData';
import { getEnemies } from '../actions';

let ic_enemies = {
  uri: 'https://thumb7.shutterstock.com/display_pic_with_logo/1145729/428434771/stock-vector-monster-demon-or-enemy-flat-icon-for-games-and-websites-428434771.jpg'
}

class Enemies extends Component {
  constructor(props) {
    super(props);
    modalVisible = false;
    this.setModalVisible = this.setModalVisible.bind(this);
    this.state = {
      modalVisible : false,
      id: null
    }
  }

  componentDidMount() {
    this.props.getEnemies();
  }
  setModalVisible(visible, id = null) {
    if (id !== null) {
      this.setState({id:id});
    }

    // alert('being called')
    this.setState({modalVisible: visible});
  }

  static navigationOptions = {
    tabBarLabel : 'Enemies',
    tabBarIcon: ({tintColor}) => {
      <Image
        source={ic_enemies}
        style={[styles.icon, tintColor: tintColor]}
      />
    },
  }
  render () {
    let subtitle =
      <Text style={styles.h3}>As a big fans of Trump, we have many enemies. :| Here top 10 Nemesis of our idol.
      Memorize their informations to make sure you wont attack innocent civilian in our FanWAR.
      </Text>

    let modal =
      <View style={{marginTop: 22}}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={{marginTop: 22}}>
         <Enemy id={this.state.id}/>
          <View>

            <Text>Hello World!</Text>
            <Button title="Back to enemies" onPress={() => {
              this.setModalVisible(false)
            }}>
              <Text>Hide Modal</Text>
            </Button>
          </View>
         </View>
        </Modal>
      </View>

      // if (typeof this.props.enemies != 'undefined') {
      //   let all = this.props.enemies.map( (en,idx) => <EnemiesData key={idx} setModalVisible={()=>this.setModalVisible(idx) } enemy={en.name}/> );
      //   dt =
      //    <View>
      //     <Text>Yippe</Text>
      //     <Text>{this.props.enemies[0]}</Text>
      //     {all}
      //   </View>
      // } else dt = <Text>Trump decided to be kind</Text>

    let dt;

     dt = typeof this.props.enemies != 'undefined' ?
      (<EnemiesData data={this.props.enemies} setModalVisible={this.setModalVisible}/>) :
      (<div>Trump decided to be kind</div>)

    return (
      <View>
        {subtitle}
        {modal}
        {dt}
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

//
const mapDispatchToProps = (dispatch) => {
  return { getEnemies: () => dispatch(getEnemies()) }
}

//
const mapStateToProps = (state) => {
  return {
    enemies: state.enemy.enemies
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Enemies);

// export default Enemies;