const defaultState = {
  someSecondState: "beef"
}

function secondReducer(state = defaultState, action){
  switch(action.type){
    case "LIKE":
      return {...state, someSecondState: "steak"}
    default: 
      return state
  }
}

export default secondReducer