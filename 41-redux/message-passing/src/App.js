import React from 'react';
import './App.css';
import Child from './Child';

class App extends React.Component {

  state = {
    likes: 0,
    text: "",
    darkMode: false,
    thangs: []
  }

  dispatch = (action) => {
    const newState = this.reducer(action)
    this.setState(newState)
  }

  // like = () => {
  //   this.setState({
  //     likes: this.state.likes + 1
  //   })
  // }

  reducer = (action) => {
    switch(action.type){
      case "LIKE":
        return {...this.state, likes: this.state.likes + 1}
      case "DISLIKE":
        return {...this.state, likes: this.state.likes - 1}
      case "DARK":
        return {...this.state, darkMode:  !this.state.darkMode}
      case "TEXT":
        return {...this.state, text: action.payload.target.value}
      case "THANG":
        return {...this.state, thangs: [...this.state.thangs, this.state.text], text: ""}
      default:
        return this.state
    }
  }

  renderThangs = () => {
    return this.state.thangs.map(thang => {
      return <li>{thang}</li>
    })
  }

  render(){
    return (
      <div className={"App" + (this.state.darkMode ? " dark" : "")}>
        <button onClick={() => this.dispatch({type: "DARK"})}>Dark mode</button>
        <h3>{this.state.text}</h3>
        <input 
          name="text" 
          value={this.state.text} 
          onChange={(e) => this.dispatch({type: "TEXT", payload: e})}/>
        <button onClick={(e) => {
          e.preventDefault()
          this.dispatch({type: "THANG"})
        }}>Add thang!</button>
        <h4>{this.state.likes} likes</h4>
        <button onClick={() => this.dispatch({type: "LIKE"})}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        <button onClick={() => this.dispatch({type: "DISLIKE"})}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>

        {this.renderThangs()}
      </div>
    );
  }
}

export default App;
