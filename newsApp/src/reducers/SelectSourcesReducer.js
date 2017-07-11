const initialState = []

export default(state = initialState, {type, payload})=>{
  switch(type){
    case 'SELECT_SOURCES' : {
      var newState = {...state, result:payload}
      return newState
    }
    default: return state
  }
}
