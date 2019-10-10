class User
  attr_reader :username

  def initialize(username)
    @username = username
  end

  # each
  # map
  # select
  # find

  def tweets
    # lets loook at all the tweets every created.
    # only pick out the tweets that belong to me.
        # my_tweets = []
        # Tweet.all.each do |tweet|
        #   if tweet.user.username == self.username
        #     my_tweets << tweet
        #   end
        # end
        # my_tweets
    Tweet.all.select { |tweet| tweet.user == self }
  end

end