# class is the KIND of those things.
# instance is one of those things.

# player1 = {
#     player_name: "Alan Anderson",
#     number: 0,
#     shoe: 16,
#     points: 22,
#     rebounds: 12,
#     assists: 12,
#     steals: 3,
#     blocks: 1,
#     slam_dunks: 1
# }

class Player
  attr_accessor :points
  attr_reader :rebounds, :steals
  attr_writer :name

  @@all = []

  @@things_basketball_player_say = [
    "And ONE!",
    "FOUL REF",
    "Taco Tuesday 🌮"
  ]

  def initialize(name)
    @name = name
    @points = 0
    @assists = 0
    @rebounds = 0
    @steals = 0
    @catch_phrases = []

    @@all << self
  end

  def name
    "Hello, my name is #{@name}."
  end

  def add_points
    @points += 2
  end

  def spaghetti
    "spaghetti"
  end

  def say_generic_bball_phrase
    # instance methods CAN reference class variables
    @@things_basketball_player_say.sample
  end


  # class methods below
  def self.meatball
    # class method CANNOT reference an instance variable (how do we know which instance?)
    "meatball from the player class"
  end

  def self.all
    @@all
  end
end