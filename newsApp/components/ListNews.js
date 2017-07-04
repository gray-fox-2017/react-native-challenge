import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';

class ListNews extends Component {
  constructor(props){
    super(props)
  }
  render(){
    const news = this.props.news
    const {height, width} = Dimensions.get('window')
    if(news){
      return(
        <View style={{height:height-(height/5)}}>
          <ScrollView>
            {
              news.map((newInfo, index)=>{
                return(
                  <View key={index}>
                    <Text style={{fontWeight:'bold'}}>{newInfo.title}</Text>
                    <Text style={{fontSize: 10}}>{newInfo.author} || {newInfo.publishedAt}</Text>
                    <Image style={{width:width, height:height/4}} source={{uri:newInfo.urlToImage}}/>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      )
    }
  }
}
export default ListNews;
