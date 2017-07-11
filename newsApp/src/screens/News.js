import React, {Component} from 'react';
import { View } from 'react-native';

import Content from '../components/Content';

class NewsScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'News',
  }
  render(){
    return(
      <View>
        <Content />
      </View>
    )
  }
}

export default NewsScreen;
