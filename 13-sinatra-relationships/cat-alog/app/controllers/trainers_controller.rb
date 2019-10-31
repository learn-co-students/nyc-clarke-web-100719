class TrainersController < ApplicationController
  # INDEX Action
  get '/trainers' do
    @trainers = Trainer.all
    erb :"trainers/index"
  end

  get '/trainers/new' do
    @cats = Cat.all
    erb :"trainers/new"
  end

  post '/trainers' do  
    Trainer.create(params[:trainer])
    catId = params[:trainer][:cat_id]
    redirect "cats/#{catId}"
  end 
end
