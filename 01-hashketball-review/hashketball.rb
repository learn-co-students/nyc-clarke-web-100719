# each - do some logic to each thing
# map  - what ever the block returns, 
#      - put that in a new array
# select - keep the value when block returns true
# find - returns the first thing that the block return true on

# iterate and just do some logic for each number
# some_numbers = [1,2,3,77,4]
# # p some_numbers
# # some_numbers.each { |x| x = x * 2}
# # p some_numbers

# p some_numbers
# some_other_numbers = some_numbers.map do |num|
#   "💩"
# end
# p some_numbers
# p some_other_numbers

# even_more_numbers = some_numbers.select do |num|
#   num % 2 == 0
# end
# p "============================="

# p even_more_numbers


# found_number = some_numbers.find do |num|
#   false
# end

# p found_number

require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end

def all_players
  game_hash[:away][:players].concat(game_hash[:home][:players])
end

def find_player(player_name)
  all_players.find do |player_hash| 
    player_hash[:player_name] == player_name
  end
end

def num_points_scored(player_name_input)
  # game_hash.each do |home_or_away, team_data_hash|
  #   team_data_hash[:players].each do |player_name, player_data|
  #     if player_name_input == player_name
  #       return player_data[:points]
  #     end
  #   end
  # end

  # all_players.each do |player_name, player_data|
  #   if player_name_input == player_name
  #     return player_data[:points]
  #   end
  # end

  find_player(player_name_input)[:points]
end



binding.pry



