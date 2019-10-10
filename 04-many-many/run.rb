require 'pry'

require_relative './lib/user'
require_relative './lib/movie'
require_relative './lib/review'


user1 = User.new("coffee_dad")
user2 = User.new("pumpkinFest")
user3 = User.new("TheREALKanye.West")

movie1 = Movie.new("Top Gun", 143)
movie2 = Movie.new("IT", 700)
movie3 = Movie.new("50 Shades of Black", 69)
movie4 = Movie.new("Hackers", 1337)
movie5 = Movie.new("Gone With the Wind", 76)
movie6 = Movie.new("The Land Before Time", 90)

movie11 = Movie.new("The Matrix", 134)
movie12 = Movie.new("The Matrix Reloaded", 151)
movie13 = Movie.new("The Matrix Revolution", 120)
movie14 = Movie.new("The Mummy", 100)
movie15 = Movie.new("21 Jump Street", 91)
movie16 = Movie.new("Shrek", 111)


review1 = Review.new(user1, movie3, "Loved it!! 😍")


binding.pry

