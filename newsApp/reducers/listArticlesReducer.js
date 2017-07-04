const initialState = [];
export default(state = initialState, {type, payload}) => {
  switch(type){
    case 'LIST_ARTICLES' : {
      let newState = {...state, result: payload}
      return newState
    }
    default: return state
  }
}
