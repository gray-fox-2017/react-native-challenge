import React, {Component} from 'react';
import {
  View,
  Picker,
  Item,
  Text
} from 'react-native';
import { connect } from 'react-redux';

const SelectSources = (props)=>{
  console.log(props);
}
// class SelectSources extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       selected : '' || 'abc-news-au'
//     }
//   }
//
//   render(){
//     const sources = this.props.sources
//     if(sources){
//       return(
//         <View>
//           <Picker
//             selectedValue={this.state.selected}
//             onValueChange={(itemValue, itemIndex) => this.setState({selected: itemValue})}>
//           {
//             sources.map((source, index)=>{
//               return(
//                 <Picker.Item label={source.name} value={source.id} key={index}/>
//               )
//             })
//           }
//           </Picker>
//         </View>
//       )
//     }
//   }
// }
const mapStateToProps = (state) => {
  return{
    listSources: state
    //SelectSources
  }
}

export default connect(mapStateToProps)(SelectSources);
