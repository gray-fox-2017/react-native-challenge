import React from 'react'
import {
  Container,
  Text,
  Button
} from 'native-base'
import DatePicker from 'react-native-datepicker'

class Earthquake extends React.Component {
  static navigationOptions = {
    title: 'Data Gempa Bumi'
  }

  constructor () {
    super ()
    this.state = {
      startDate: new Date().toISOString().split('T')[0],
      endDate: new Date().toISOString().split('T')[0]
    }
  }

  render () {
    const { navigate } = this.props.navigation
    return (
      <Container style={{ alignItems: 'center' }}>
        <Text>Data Gempa Bumi</Text>
        <Text>Tanggal Awal</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.startDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          maxDate={this.state.endDate}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({startDate: date})}}
        />
        <Text>Tanggal Akhir</Text>
        <DatePicker
          style={{width: 200}}
          date={this.state.endDate}
          mode="date"
          placeholder="select date"
          format="YYYY-MM-DD"
          minDate={this.state.startDate}
          maxDate={new Date()}
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 4,
              marginLeft: 0
            },
            dateInput: {
              marginLeft: 36
            }
            // ... You can check the source to find the other keys.
          }}
          onDateChange={(date) => {this.setState({endDate: date})}}
        />
        <Button
          onPress={() => navigate('EarthquakeSearch', { startDate: this.state.startDate, endDate: this.state.endDate, name: 'Tada' })}
        >
          <Text>
            Cari Gempa
          </Text>
        </Button>
      </Container>
    )
  }
}

export default Earthquake