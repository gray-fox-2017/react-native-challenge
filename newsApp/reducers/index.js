import { combineReducers } from 'redux'

import ListArticlesReducer from './listArticlesReducer';
import SelectSourcesReducer from './selectSourcesReducer';

export default combineReducers({
  selectSources : SelectSourcesReducer,
  listArticles : ListArticlesReducer
})
