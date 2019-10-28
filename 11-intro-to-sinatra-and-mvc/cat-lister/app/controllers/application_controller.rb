require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/cats" do
    @cats = Cat.all
    erb :index
  end
  
  get "/cats/new" do
    erb :new
  end

  post "/cats" do 
    cat = Cat.create(params)

    redirect to "/cats/#{cat.id}"
  end 

  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    erb :show
  end



end
