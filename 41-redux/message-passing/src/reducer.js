const defaultState = {
  likes: 0,
  text: "",
  darkMode: false,
  thangs: []
}

// job is to return new state
function reducer(prevState = defaultState, action){
  // console.log("STATE", prevState)
  // console.log("ACTION", action)

  // whatever is returned from this function BECOMES your new state
  switch(action.type){
    case "LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "DISLIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "CHANGE_TEXT":
      return {...prevState, text: action.payload.newText}
    case "ADD_THANG":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    default: 
      return prevState
  }
}


export default reducer