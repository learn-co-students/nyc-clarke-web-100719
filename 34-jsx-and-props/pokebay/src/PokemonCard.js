import React from 'react'

class PokemonCard extends React.Component {

  render(){
    return(
      <div>
        <img src={this.props.img_url}/>
        <h3>{this.props.name}</h3>
        <h5>Species: {this.props.species}</h5>
        <h5>${this.props.price}</h5>
        <h5>Seller: {this.props.username}</h5>
      </div>
    )
  }
}

export default PokemonCard