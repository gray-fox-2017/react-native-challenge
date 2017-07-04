import axios from 'axios';

export const ListArticles = () =>{
  return(dispatch) => {
    axios.get(`https://newsapi.org/v1/articles?source=techcrunch&sortBy=latest&apiKey=7d0b4c6fd5cf46d18f00aa8c4ffc7c56`)
    .then(response=>{
      return dispatch({
        type: 'LIST_ARTICLES',
        payload: response.data
      })
      this.setDataNews()
    })
    .catch(err=>{
      console.log(err);
    })
  }
}
