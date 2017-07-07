import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'

import { findCityCurrent } from '../actions'

const styles = StyleSheet.create({
  mainHeader: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    margin: 15,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  textInput: {
    margin: 15,
    textAlign: 'center',
    width: 150,
    height: 50
  }
})

class CitySearch extends React.Component {
  constructor () {
    super ()
    this.state = {
      text: ''
    }
  }

  _enterSearch () {
    this.props.findCityCurrent(this.state.text)
    this.setState({
      text: ''
    })
  }

  render () {
    return (
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.mainHeader}>
          Data Cuaca
        </Text>
        <Text style={styles.instructions}>
          Cari kondisi cuaca terkini di kotamu
        </Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this._enterSearch()}
          value={this.state.text}
          placeholder='Nama kota'
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findCityCurrent: (city) => dispatch(findCityCurrent(city))
  }
}

export default connect(null, mapDispatchToProps)(CitySearch)