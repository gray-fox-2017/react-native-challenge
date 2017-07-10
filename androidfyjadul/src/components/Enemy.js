import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getEnemy } from '../actions';
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
import EnemyData from '../components/EnemyData';

let cid = null;

export class Enemy extends Component {
  constructor(props) {
    super(props);
    cid = this.props.id;
  }

  componentDidMount() {
    if (typeof this.props.getEnemy !== 'undefined') this.props.getEnemy();
  }

  render() {
    let dt_enemy = <View></View>;
    dt_enemy = typeof this.props.currEnemy != 'undefined' ?
      (<EnemyData cenemy={this.props.currEnemy}/>) :
      (<View> Searching...</View>)
    return (
      <View>
        <Text>Masuk enemy</Text>
        {dt_enemy}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return { getEnemy: () => {if (cid !== null) dispatch(getEnemy(cid))}, }
}

const mapStateToProps = (state) => {
  return {
    currEnemy: state.enemy.currEnemy,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Enemy);