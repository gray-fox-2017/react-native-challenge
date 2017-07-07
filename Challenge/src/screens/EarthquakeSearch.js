import React from 'react'
import {
  TouchableHighlight
} from 'react-native'
import {
  Container,
  Text,
  Content,
  List,
  ListItem
} from 'native-base'
import { provider, connect } from 'react-redux'

import { getEarthquakes } from '../actions'

class EarthquakeSearch extends React.Component {
  constructor () {
    super ()
    this.state = {
      tes: 'Blablabla'
    }
  }
  componentDidMount () {
    const { startDate, endDate } = this.props.navigation.state.params
    this.props.getEarthquakes(startDate, endDate)
  }

  render () {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Hasil Pencarian</Text>
            </ListItem>
            {this.props.earthquakeData.map((earthquake, index) => (
              <ListItem key={index}>
                <TouchableHighlight onPress={() => {}}>
                  <Text>{earthquake.properties.title}</Text>
                </TouchableHighlight>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    earthquakeData: state.earthquake.earthquakeData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getEarthquakes: (from, to) => dispatch(getEarthquakes(from, to))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EarthquakeSearch)