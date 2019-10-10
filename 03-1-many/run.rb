require 'pry'
require_relative './lib/user'
require_relative './lib/tweet'

user1 = User.new("coffee_dad")
user2 = User.new("Xx_reddarkness_xX")
user3 = User.new("Revolution_Damnation")
user4 = User.new("The13DaysOfEvil")
user5 = User.new("ninjaPrincess")

tweet1 = Tweet.new("getting coffee", user1)
tweet2 = Tweet.new("learning ruby", user5)
tweet3 = Tweet.new("life is pointless", user2)
tweet4 = Tweet.new("learning coffee", user3)
tweet5 = Tweet.new("coffee is pointless", user4)


binding.pry