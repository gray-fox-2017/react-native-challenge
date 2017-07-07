
import React from 'react'
import {
  AppRegistry
} from 'react-native'
import { Provider } from 'react-redux'

import App from './src/App'
import store from './src/store'

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('Challenge', () => Root);
