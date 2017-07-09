import React from 'react'
import { connect } from 'react-redux';
import {
  AppRegistry,
  TextInput,
  Text,
  View,
  StyleSheet,
  tabBarIcon,
  tabBarLabel,
  Image
} from 'react-native';


class ContentTrump extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { trump } = this.props;
    let pic = {uri: null};
    if(typeof trump.face !== 'undefined') pic.uri = trump.face;

    return (
      <View>
        <Image source={pic} style={{width:50,height:50}}/>
        <Text>{trump.opinion}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // alert(state)
  return {
    trump: state.trump
  }
}


export default connect(mapStateToProps,null)(ContentTrump);