import React from 'react';
import { connect } from 'react-redux'
import { fetchPokemon } from './actionCreators'


class Child extends React.Component {

  render(){
    return (
      <div>
        I'm a baby
        {this.props.likes}
        <button onClick={() => this.props.fetchPokemon(25)} >Also Fetch Pokemon</button>
      </div>
    );
  }
}

function msp(state){
  return {
    likes: state.likes
  }
}

const mdp = {
  fetchPokemon
}

export default connect(msp, mdp)(Child);
