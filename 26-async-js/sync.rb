require 'rest-client'
require 'json'
require 'pry'

puts "Welcome to PokeWorld!!!!"
response = RestClient.get("https://pokeapi.co/api/v2/pokemon/2")
pokemon = JSON.parse(response) #Javascript Object Notation 
puts "Your pokemon is #{pokemon["name"]}!"
# binding.pry

