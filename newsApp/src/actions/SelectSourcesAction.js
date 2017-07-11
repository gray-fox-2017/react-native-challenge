import axios from 'axios';

export const SelectSources = () =>{
  return(dispatch)=>{
    axios.get('https://newsapi.org/v1/sources?language=en&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56')
    .then(response=>{
      return dispatch({
        type: 'SELECT_SOURCE',
        payload: response.data.sources
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
