class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  def write_review(movie, content)
    Review.new(self, movie, content)
  end

  def
  
  def reviews
    # Look through all the reviews ever created.
    # only keep the reviews written by this user.
    # each
    # map
    # select
    # find
    Review.all.select do |review|
      review.user == self
    end
  end

  def movies
    # my_movies = []
    # reviews.each do |review|
    #   my_movies << review.movie
    # end
    # my_movies
    reviews.map { |review| review.movie }
  end

  def minutes_spent_watching_movies
    # look at all the movies that I'VE reviewed
    # add up the duration
    total_duration = 0
    movies.each do |movie|
      total_duration += movie.duration
    end
    total_duration
  end
end