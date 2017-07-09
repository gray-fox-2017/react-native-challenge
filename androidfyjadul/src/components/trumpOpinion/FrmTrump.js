import React from 'react'
import { connect } from 'react-redux';
import { getOpinion } from '../../actions';
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


class FrmTrump extends React.Component {
  constructor() {
    super();
    this.state = {
      username: ''
    }
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    console.log('mount')
  }

  changeUsername(username) {
    this.setState({username: username})
  }

  render () {
    return (
      <TextInput
        editable = {true}
        maxLength = {40}
        onChangeText = {(text)=> {this.changeUsername(text)} }
        onSubmitEditing= {()=>
          {
            alert('submit '+this.state.username);
            this.props.getOpinion(this.state.username);
          }
        }
      />
    )

    // return (
    //   <form onSubmit={((e)  => {
    //     e.preventDefault();
    //     this.props.getOpinion(this.state.username)
    //     // dispatch(getOpinion(this.state.username));
    //     this.changeUsername('');
    //   })}>
    //     <div className="field">
    //       <p className="control">
    //         <input className="input" type="text" placeholder="Input your name"
    //         onChange={(e) => this.changeUsername(e.target.value)}
    //         value={this.state.username}
    //         />
    //         <button type="submit"> Get Opinion </button>
    //       </p>
    //     </div>
    //   </form>
    // )
  }
}


const mapDispatchToProps = (dispatch) => {
  console.log('dispatch')
  return {
    getOpinion: (username) => dispatch(getOpinion(username))
  }
}


export default connect(null,mapDispatchToProps)(FrmTrump);