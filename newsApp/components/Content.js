import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import SelectSources from './SelectSources';
import ListNews from './ListNews';

//IMPORT actions
import { SelectSourcesNews } from '../actions/selectSourcesAction';
import { ListArticles } from '../actions/listArticlesAction';

const styles= StyleSheet.create({
  content:{
    margin:5
  }
})

class Content extends Component {
  render(){
    return(
      <View style={styles.content}>
        <SelectSources />
        <ListNews />
      </View>
    )
  }

  componentDidMount(){
    this.props.GetSelectSources()
    this.props.GetListArticles()
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    GetSelectSources: ()=>{
      dispatch(SelectSourcesNews())
    },
    GetListArticles: ()=>{
      dispatch(ListArticles())
    }
  }
}
export default connect(null, mapDispatchToProps)(Content);
