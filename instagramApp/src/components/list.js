import React from 'react'
import {
  Text,
  View,
  Button
} from 'react-native';
import { StackNavigator } from 'react-navigation'

export default class list extends React.Component {
  static navigationOptions = {
    title: 'just a list'
  }
  render() {
    console.log("navigate", this.props);
    return (
      <View>
        <Text>
          This is List!
        </Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Back"
          color="#841584"
        />
      </View>
    )
  }
}
