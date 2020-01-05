import React from 'react';
import { connect } from 'react-redux'

class Child extends React.Component {


  render(){
    return (
      <div>
        I'm a baby
        {this.props.likes}
      </div>
    );
  }
}

function msp(state){
  return {
    likes: state.likes
  }
}

function mdp(dispatch){
  
}

export default connect(msp)(Child);
