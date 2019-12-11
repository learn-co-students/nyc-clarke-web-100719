import React from 'react'
import PokemonCard from './PokemonCard'

class MainBody extends React.Component {

  state = {
    pokemons: [],
    openPokemonId: null
  }

  changeOpen = (id) => {
    this.setState({
      openPokemonId: id
    })
  }

  fetchPokemon = () => {
    fetch("http://localhost:3001/user_pokemons")
    .then(res => res.json())
    .then((data) => {
      this.setState({pokemons: data})
    })
  }

  renderCards(){
    // this.props.searchTerm

    let cardsToDisplay;

    if (this.props.onlyForSale){
      cardsToDisplay = this.state.pokemons.filter(poke => poke.for_sale)
    } else {
      cardsToDisplay = this.state.pokemons
    }

    cardsToDisplay = cardsToDisplay.filter(poke => poke.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))

    return cardsToDisplay.map(poke => {
      return (
        <PokemonCard
          key={poke.id} 
          id={poke.id} 
          name={poke.name}
          img_url={poke.pokemon.img_url}
          username={poke.user.name}
          price={poke.price}
          species={poke.pokemon.name}
          for_sale={poke.for_sale}
          open={poke.id === this.state.openPokemonId}
          changeOpen={this.changeOpen}
        />
      )
    })
  }

  render(){

    return (
      <div>
        <button onClick={this.fetchPokemon} >Fetch Pokemon For Sale!</button>
         <div className="main-body">
          {this.renderCards()}
        </div>
      </div>
    )
  }
}

export default MainBody