class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    if @user == @logged_in_user
      render :show
    else
      flash[:notification] = 'GOTAA LOG-IN && you can only view your own show page'
      redirect_to colors_path 
    end 
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to colors_path
    else
      flash[:errors] = @user.errors.full_messages
      redirect_to new_user_path
    end
  end

  private 

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
