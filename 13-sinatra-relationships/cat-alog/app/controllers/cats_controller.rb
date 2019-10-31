class CatsController < ApplicationController

  # INDEX
  get "/cats" do
    @cats = Cat.all
    erb :"cats/index"
  end

  # NEW 
  get "/cats/new" do  
    erb :"cats/new"
  end

  # SHOW
  get "/cats/:id" do
    @cat = Cat.find(params[:id])
    @welcome = 'some welcome'
    erb :"cats/show"
  end

  # EDIT
  get "/cats/:id/edit" do   
    @cat = Cat.find(params[:id])
    erb :"cats/edit"
  end 

  #CREATE
  post "/cats" do
    cat = Cat.create(params)
    redirect "/cats/#{cat.id}"
  end

  #UPDATE
  patch "/cats/:id" do
    cat = Cat.find(params[:id])
    cat.update(params[:cat])

    redirect "/cats/#{@cat.id}"
  end 

  delete '/cats/:id' do
    @cat = Cat.find(params[:id])
    @cat.destroy

    redirect '/cats'
  end
end 