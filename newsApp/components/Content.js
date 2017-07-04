import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Picker,
  Item
} from 'react-native';
import axios from 'axios';

import SelectSources from './SelectSources';
import ListNews from './ListNews';

class Content extends Component {
  constructor(){
    super();
    this.state={
      language:'',
      sources:[],
      news:[]
    }
  }

  setDataSources(sources){
    this.setState({
      sources
    })
  }

  setDataNews(news){
    this.setState({
      news
    })
  }

  getDataSources(){
    axios.get('https://newsapi.org/v1/sources?language=en&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56')
    .then(response=>{
      this.setDataSources(response.data.sources)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  getDataNews(){
    axios.get('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56')
    .then(response=>{
      this.setDataNews(response.data.articles)
    })
    .catch(err=>{
      console.log(err);
    })
  }

  render(){
    return(
      <View>
        <SelectSources sources={this.state.sources} />
        <ListNews news={this.state.news} />
      </View>
    )
  }

  componentDidMount(){
    this.getDataSources()
    this.getDataNews()
  }

}

export default Content;
