require 'pry'
require_relative './config/environment'

user1 = User.new("Brad")
user2 = User.new("Babs")
user3 = User.new("Brito")

project1 = Project.new('fund me for my yoyo idea', 6000, user1)
project2 = Project.new('fund me for my hamburger idea', 100, user2)
project3 = Project.new('fund me for my bubble tea idea', 400, user1)

pledge1 = Pledge.new(user3, project1, 50)
pledge2 = Pledge.new(user3, project1, 150)
pledge3 = Pledge.new(user2, project2, 250)



binding.pry