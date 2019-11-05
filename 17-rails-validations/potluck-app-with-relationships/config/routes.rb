Rails.application.routes.draw do
  resources :items, only: [:new, :index, :create]
  # LIMIT MEE
  # resources :potlucks

  # get '/attendees', to: 'attendees#index'
  # get '/attendees/new', to: 'attendees#new'
  # get '/attendees/:id', to: 'attendees#show'
  # post '/attendees', to: 'attendees#create'
  # delete '/attendees/:id', to: 'attendees#destroy'

  # resources :attendees, only: [:index, :show, :new, :create, :destroy, :edit, :update]
  resources :attendees
end