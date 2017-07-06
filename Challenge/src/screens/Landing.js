import React from 'react'
import { Container, Button, Text } from 'native-base'
import { View } from 'react-native'

const styles = {
  container: {
    flex: 1,
    alignItems: 'center'
  },
  mainHeader: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    margin: 10,
  },
  navigateButton: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto'
  }
}

export default class Landing extends React.Component {
  static navigationOptions = {
    title: 'Home'
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.mainHeader}>
          HacktivBMKG
        </Text>
        <Button
          style={styles.navigateButton}
          onPress={() => navigate('Weather')}
        >
          <Text>
            Perkiraan Cuaca
          </Text>
        </Button>
        <Button style={styles.navigateButton}>
          <Text>
            Data Gempa
          </Text>
        </Button>
      </View>
    )
  }
}