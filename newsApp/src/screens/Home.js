import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  }
  render(){
    return(
      <View>
        <Text>Just Home</Text>
      <Button
        title="Camera"
        color="#25a21f"
        onPress={() =>
            navigate('Camera')
          }
      />
      </View>
    )
  }
}

export default HomeScreen;
