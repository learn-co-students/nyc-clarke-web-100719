import React from 'react'
import PokemonCard from './PokemonCard'

const pokemon = [
  {
    id: 7,
    name: "Shelldon",
    price: 87,
    species: "Squirtle",
    username: "jimmmy",
    generation: "1",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },  
  {
    id: 342,
    name: "Steve",
    price: 65,
    species: "Crawdaunt",
    username: "nick",
    generation: "3",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/342.png"
  },  
  {
    id: 635,
    name: "Polyp",
    price: 2,
    species: "Hydreigon",
    username: "gene",
    generation: "5",
    img_url: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/635.png"
  }
]

class MainBody extends React.Component {

  renderCards(){
    return pokemon.map(poke => {
      return (
        <PokemonCard
          key={poke.id} 
          name={poke.name}
          img_url={poke.img_url}
          username={poke.username}
          price={poke.price}
          species={poke.species}
        />
      )
    })
  }

  render(){
    return (
      <div>
        {this.renderCards()}
      </div>
    )
  }
}

export default MainBody