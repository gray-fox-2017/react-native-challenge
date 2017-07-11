const initialState = []

export default(state = initialState, {type, payload})=>{
  switch (type) {
    case 'LIST_NEWS':{
      var newState = {...state, result:payload}
      return newState
    }
    default: return state
  }
}
