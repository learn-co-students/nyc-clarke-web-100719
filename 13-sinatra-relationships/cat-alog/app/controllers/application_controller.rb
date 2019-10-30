require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
    set :method_override, true
  end
# ------------------------------------------------------

# INDEX
  get "/cats" do
    @cats = Cat.all
    erb :index
  end

# NEW 
  get "/cats/new" do  
    erb :new
  end

  # SHOW
  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    @welcome = 'some welcome'
    erb :show
  end

# EDIT
  get "/cats/:id/edit" do   
    @cat = Cat.find(params[:id])
    erb :edit
  end 

#CREATE
  post "/cats" do
    cat = Cat.create(params)
    redirect "/cats/#{cat.id}"
  end

#UPDATE
  patch "/cats/:id" do
    @cat = Cat.find(params[:id])
    @cat.update(params[:cat])

    redirect "/cats/#{@cat.id}"
  end 

  delete '/cats/:id' do
    @cat = Cat.find(params[:id])
    @cat.destroy

    redirect '/cats'
  end


end
