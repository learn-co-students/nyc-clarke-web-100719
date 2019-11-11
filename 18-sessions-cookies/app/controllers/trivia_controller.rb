class TriviaController < ApplicationController
  def random
    trivia_api = TriviaApi.new
    @trivia_question = trivia_api.get_random_question
    @choices = @trivia_question["incorrect_answers"]
    @choices.push(@trivia_question["correct_answer"])


    session[:correct_answer] = @trivia_question["correct_answer"]
    @choices.shuffle!

    render :random
  end


  def answer

    # check user choice
    # if user choice == correct answer
     # do something

    if params[:answer] == session[:correct_answer]
      if session[:score]
        session[:score] = session[:score] + 100
      else
        session[:score] = 100
      end

    end

    redirect_to '/'

    # if user choice != correct anser
      # do something else
  end
end