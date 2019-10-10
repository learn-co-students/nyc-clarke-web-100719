class Movie
  attr_reader :title, :duration

  @@all = []

  def initialize(title, duration)
    @title = title
    @duration = duration

    @@all << self
  end

  def reviews
    Review.all.select do |review|
      review.movie == self
    end
  end

  def users
    reviews.map { |review| review.user }
  end


  def self.all
    @@all
  end

  def self.find_by_title(title)
    @@all.find do |movie|
      title == movie.title
    end
  end
end