class Project
  # has_many   pledges
  # belongs_to user

  attr_reader :name, :goal_amount, :creator # actually a user
  @@all = []

  def initialize(name, goal_amount, creator)
    @name = name
    @goal_amount = goal_amount
    @creator = creator

    @@all << self
  end


  def pledges
    # pledge class
    # select
    # project == self
    # Iterate through all the Pledges ever created
    # only keep the ones where the project equals self
    Pledge.all.select do |pledge|
      pledge.project == self
    end
  end

  def backers # users who gave this project money
    pledges.map { |pledge| pledge.user }
  end

  def donation_amount
    donation_amount = 0
    pledges.each do |pledge|
      donation_amount += pledge.amount
    end
    donation_amount
  end


  def self.all
    @@all
  end

  def self.no_pledges
    # how can I see all the projects with NO pledges
    # Look all the projects
    # only pick the one, where there are no pledges
    Project.all.select do |project|
      project.pledges.length == 0
    end
  end

  # what should this class method do
  # look at all the projects, one by one
  # for each project, compared how much has been donated so far, with the goal amount
  # if donation amount is equal to or greater than the goal amount, then we keep that project

  def self.above_goal
    Project.all.select do |project|
      # calculate current donation_amount
        # go through all the pledges for this project
        # get the amount and add it to the donation_amount

      project.donation_amount >= project.goal_amount
    end
  end
end