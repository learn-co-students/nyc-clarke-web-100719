class AttendeesController < ApplicationController
  before_action :get_attendee, only: [:show, :edit, :update, :destroy]
  def index
    @attendees = Attendee.all
    render :index
  end

  def show
    # @attendee = Attendee.find(params[:id])
    # self.get_attendee
    render :show
  end

  def new
    @attendee = Attendee.new
    render :new
  end

  def create
    @attendee = Attendee.create(attendee_params)

    if @attendee.valid? 
      redirect_to attendee_path(@attendee) #"/attendees/#{@attendee.id}"
    else 
      flash[:messages] = @attendee.errors.full_messages
      redirect_to new_attendee_path
    end 
  end

  def edit 
    # @attendee = Attendee.find(params[:id])
    # render :edit 
  end 

  def update 
    # @attendee = Attendee.find(params[:id])

    if @attendee.update(attendee_params)
      redirect_to attendee_path(@attendee)
    else 
      flash[:messages] = @attendee.errors.full_messages
      redirect_to edit_attendee_path
    end 

    
  end 

  def destroy
    # @attendee = Attendee.find(params[:id])
    @attendee.destroy

    redirect_to attendees_path
  end

  private

  def attendee_params
    params.require(:attendee).permit(:name, :slogan, :img_url, :age)
  end

  def get_attendee 
    @attendee = Attendee.find(params[:id])
  end 

end
