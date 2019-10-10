
class Tweet
  attr_reader :content, :date, :user

  @@all = []

  def initialize(content, user)
    @content = content
    @date = Time.now.strftime("%d/%m/%Y %H:%M")
    @user = user

    user.tweets << self
    @@all << self
  end

  def self.all
    @@all
  end

end