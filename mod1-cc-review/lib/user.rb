class User
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def create_project(name, goal_amount)
    Project.new(name, goal_amount, self)
  end

  def back_project(project, amount)
    Pledge.new(self, project, amount)
  end

  # method to return all projects I've created
  def my_projects
    # Look at all the project
    # see which project's creator is equal to self
    Project.all.select do |project|
      project.creator == self
    end
  end

  # method to return all pledges I've made
  def pledges
    # Look through all pledges
    # only keep the ones where pledge.user == self
    Pledge.all.select do |pledge|
      pledge.user == self
    end
  end

  # method to return all projects I've donated to
  def backed_projects
    pledges.map { |pledge| pledge.project }
  end
end