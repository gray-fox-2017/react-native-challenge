import axios from 'axios';

export const SelectSourcesNews = () => {
  return (dispatch) => {
    axios.get('https://newsapi.org/v1/sources?language=en&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56')
    .then(response=>{
      console.log("Masuk ke Actiuons");
      return dispatch({
        type: 'SELECT_SOURCES',
        payload: response.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
