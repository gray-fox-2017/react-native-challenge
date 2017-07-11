import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Item
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux'

import SelectListSources from './SelectSources';
import ListArticles from './ListNews';

import { ListNews } from '../actions/ListNewsAction'
import { SelectSources } from '../actions/SelectSourcesAction'


const styles= StyleSheet.create({
  content:{
    margin:5
  }
})

class Content extends Component {
  render(){
    return(
      <View style={styles.content}>
        {/* <SelectListSources /> */}
        <ListArticles />
      </View>
    )
  }

  componentWillMount(){

    this.props.GetArticles()
    this.props.GetSources()
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    GetArticles: ()=>{
      dispatch(ListNews())
    },
    GetSources: ()=>{
      dispatch(SelectSources())
    }
  }
}

export default connect(null, mapDispatchToProps)(Content);
