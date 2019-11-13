class VotesController < ApplicationController
  # skip_before_action :verify_authenticity_token

   # skip_before_action :verify_authenticity_token
   def create
    @vote = Vote.create(color_id: params[:color_id], user_id: @logged_in_user.id)
    redirect_to colors_path
  end


end
