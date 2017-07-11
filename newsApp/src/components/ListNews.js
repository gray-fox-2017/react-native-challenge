import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  WebView
} from 'react-native';
import { connect } from 'react-redux';

const ListNews = (props)=>{
  const {height, width} = Dimensions.get('window')
  const news = props.listNews
  if(news){
    const articles = news.result
    console.log(news.result);
    return(
      <View style={{height:height-(height/5)}}>
        {/* <ScrollView>
          {
            articles.map((newInfo, index)=>{
              return(
                <View key={index} style={{marginBottom:10}}>
                  <Text style={{fontWeight:'bold'}}>{newInfo.title}</Text>
                  <Text style={{fontSize: 10}}>{newInfo.author} || {newInfo.publishedAt}</Text>
                  <Image style={{width:width, height:height/4}} source={{uri:newInfo.urlToImage}}/>
                  <Text style={{fontSize: 12}}>{newInfo.description}</Text>
                  <WebView
                    source={{uri: newInfo.url}}
                    style={{marginTop: 10}}
                  />
                </View>
              )
            })
          }
        </ScrollView> */}
      </View>
    )
  }else{
    <View>
      <Text>Loading...</Text>
    </View>
  }
}

const mapStateToProps = (state)=>{
  return{
    listNews:state.listArticles
  }
}
export default connect(mapStateToProps)(ListNews);
