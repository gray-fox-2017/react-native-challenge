import { combineReducers } from 'redux';

import ListArticlesReducer from './ListNewsReducer';
import SelectSourcesReducer from './SelectSourcesReducer';

export default combineReducers({
  listSources: SelectSourcesReducer,
  listArticles: ListArticlesReducer
})
