import React from 'react'
import PokemonCard from './PokemonCard'

class MainBody extends React.Component {

  // constructor(props){
  //   super(props)

  //   // to initialize state
  //   this.state = {
  //     pokemons: [],
  //   }

  //   // bind all functions
  //   this.fetchPokemon = this.fetchPokemon.bind(this)
  // }

  state = {
    pokemons: []
  }

  fetchPokemon = () => {
    fetch("http://localhost:3001/user_pokemons")
    .then(res => res.json())
    .then((data) => {
      // mutating state (DONT DO THIS)
      // this.state.pokemons = data
      // this.forceUpdate()

      this.setState({pokemons: data})
    })
  }

  renderCards(){
    console.log(this.state.pokemons)
    return this.state.pokemons.map(poke => {
      return (
        <PokemonCard
          key={poke.id} 
          id={poke.id} 
          name={poke.name}
          img_url={poke.pokemon.img_url}
          username={poke.user.name}
          price={poke.price}
          species={poke.pokemon.name}
        />
      )
    })
  }

  render(){
    return (
      <div>
        <button onClick={this.fetchPokemon} >Fetch Pokemon For Sale!</button>
        {this.renderCards()}
      </div>
    )
  }
}

export default MainBody