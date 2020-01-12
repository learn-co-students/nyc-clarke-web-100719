const defaultState = {
  likes: 2000,
  text: "",
  darkMode: false,
  thangs: [],
  beef: "steak",
  pokemonImg: ""
}

function reducer(prevState = defaultState, action){
  console.log("FIRST", action)
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
    case "FETCH_POKEMON":
      return {...prevState, pokemonImg: action.payload}
    default: 
      return prevState
  }
}


export default reducer