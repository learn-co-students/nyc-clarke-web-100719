require 'rest-client'

class TriviaApi
  def initialize
    @url = "https://opentdb.com/api.php?amount=1&category=20"
  end

  def fetch_data
    RestClient.get(@url)
  end

  def parse_response(response)
    JSON.parse response.body
  end

  def get_results(parsed_response)
    parsed_response["results"]
  end

  def get_random_question
    get_results(parse_response(fetch_data))[0]
  end

end