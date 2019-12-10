class UserPokemonsController < ApplicationController

  def index
    user_pokemons = UserPokemon.all

    render json: user_pokemons
  end
end
