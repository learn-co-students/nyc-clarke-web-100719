export function addLike(){
  return {type: "LIKE"}
}

export function removeLike(){
  return {type: "DISLIKE"}
}

export function changeText(e){
  return {
    type: "CHANGE_TEXT",
    payload: {newText: e.target.value, name: e.target.name}
  }
}

export function setPokemon(img_url){
  return {
    type: "FETCH_POKEMON",
    payload: img_url
  }
}

export function fetchPokemon(pokeID){
  return function(dispatch){
    // run a fetch

     fetch(`https://pokeapi.co/api/v2/pokemon/${pokeID}`)
    .then(res => res.json())
    .then(poke => {
      dispatch(setPokemon(poke.sprites.front_shiny))
    })
  }
}

// export function superAbstractThunkyThang(url, type, payload){
//   return function(dispatch){
//     fetch(url)
//     .then(res => res.json)
//     .then(data => {
//       dispatch({
//         type: type,
//         payload: payload
//       })
//     })
//   }
// }


