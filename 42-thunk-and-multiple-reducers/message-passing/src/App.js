import React from 'react';
import './App.css';
import Child from './Child';
import { connect } from 'react-redux'
import { addLike, removeLike, changeText, fetchPokemon } from './actionCreators'

function App(props) {



  const renderThangs = () => {
    return props.thangs.map(thang => {
      return <li>{thang}</li>
    })
  }

  // const fetchPoke = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon/1")
  //   .then(res => res.json())
  //   .then(poke => {
  //     props.setPokemon(poke.sprites.front_shiny)
  //   })
  // }


    return (
      <div className={"App" + (props.darkMode ? " dark" : "")}>
        <button onClick={props.toggleDarkMode}>Dark mode</button>
        <h3>{props.text}</h3>
        <img src={props.pokemonImg}/>
        <button onClick={() => props.fetchPokemon(2)}>Fetch Pokemon</button>
        <input 
          name="text" 
          value={props.text} 
          onChange={props.changeText}/>
        <button onClick={props.addThang}>Add thang!</button>
        <h4>{props.likes} likes</h4>
        <button onClick={props.addLike}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={props.removeLike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>

        {renderThangs()}
        <Child />
      </div>
    );
} // end of App component

function msp(state){
  console.log("STATE", state)
  return {
    likes: state.first.likes,
    darkMode: state.first.darkMode,
    thangs: state.first.thangs,
    text: state.first.text,
    something: state.second.someSecondState,
    pokemonImg: state.first.pokemonImg
  }
}

const mdp = {
  addLike,
  removeLike,
  changeText,
  fetchPokemon
}

export default connect(msp, mdp)(App);



