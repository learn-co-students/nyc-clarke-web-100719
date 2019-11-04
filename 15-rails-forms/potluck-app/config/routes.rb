Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get '/attendees', to: 'attendees#index'
  # get '/attendees/new', to: 'attendees#new'
  # get '/attendees/:id', to: 'attendees#show'
  # post '/attendees', to: 'attendees#create'
  # delete '/attendees/:id', to: 'attendees#destroy'

  resources :attendees, only: [:index, :show, :new, :create, :destroy]
end
