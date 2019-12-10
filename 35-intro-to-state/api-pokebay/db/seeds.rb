# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



50.times do |x|
  response = RestClient.get("https://pokeapi.co/api/v2/pokemon/#{x+1}")

  data = JSON.parse(response)
  Pokemon.create(
    name: data["name"],
    img_url: data["sprites"]["front_default"],
    generation: 1
  )
end

10.times do
  user = User.create(
    name: Faker::Name.name,
    balance: (400..2000).to_a.sample
  )

  (3..6).to_a.sample.times do
    UserPokemon.create(
      name: Faker::TvShows::RickAndMorty.character,
      price: (30..100).to_a.sample,
      for_sale: [true,false].sample,
      user: user,
      pokemon: Pokemon.all.sample
    )
  end
end




