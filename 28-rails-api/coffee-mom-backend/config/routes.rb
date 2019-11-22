Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # resources :tweets
  # to '/tweets', 'api/v1/tweets#index'

  namespace :api do # /api
    namespace :v1 do # /v1
      resources :tweets, :users # my normal controller and endpoint behavior
    end

    # if I want v2 to be accessible as well I need to also namespace it here 
    # namespace :v2 do
    # end

  end

end
