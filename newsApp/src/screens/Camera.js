import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Camera from 'react-native-camera';

class CameraScreen extends Component {
  render(){
    return(
      <View>
        {/* <Camera
          ref={(cam)=>{this.camera = cam}}
          style={styles.preview}
          aspect={Camera.constans.Aspect.fill}
        /> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  preview:{
    flex: 1,
  }
})

export default CameraScreen;
