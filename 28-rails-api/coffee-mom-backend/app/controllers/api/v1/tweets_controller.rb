class Api::V1::TweetsController < ApplicationController

    def index
        @tweets = Tweet.all
        render json: @tweets, status: 200
    end

    def show
        @tweet = Tweet.find(params[:id])
        # in no tweet case
        # render json: {error: 'No tweet with that id'}, status: 400
        render json: @tweet, status: 200
    end

    def create
        tweet = Tweet.create(
            user: params[:user],
            content: params[:content],
            likes: params[:likes],
            retweets: params[:retweets]
        )
        render json: tweet, status: 201
    end

end
