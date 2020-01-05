const defaultState = {
  likes: 2000,
  text: "",
  darkMode: false,
  thangs: [],
  beef: "steak"
}

function reducer(prevState = defaultState, action){
  switch(action.type){
    case "LIKE":
      return {...prevState, likes: prevState.likes + 1}
    case "DISLIKE":
      return {...prevState, likes: prevState.likes - 1}
    case "DARK_MODE":
      return {...prevState, darkMode: !prevState.darkMode}
    case "CHANGE_TEXT":
      return {...prevState, [action.payload.name]: action.payload.newText}
    case "ADD_THANG":
      return {...prevState, thangs: [...prevState.thangs, prevState.text], text: ""}
    default: 
      return prevState
  }
}


export default reducer