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