import React from 'react';
import './App.css';
import Child from './Child';
import { connect } from 'react-redux'
import { addLike, removeLike, changeText } from './actionCreators'

function App(props) {

  const renderThangs = () => {
    return props.thangs.map(thang => {
      return <li>{thang}</li>
    })
  }

    console.log("PROPS", props)

    return (
      <div className={"App" + (props.darkMode ? " dark" : "")}>
        <button onClick={props.toggleDarkMode}>Dark mode</button>
        <h3>{props.text}</h3>
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
  return {
    likes: state.likes,
    darkMode: state.darkMode,
    thangs: state.thangs,
    text: state.text
  }
}

const mdp = {
  addLike,
  removeLike,
  changeText
}

export default connect(msp, mdp)(App);



