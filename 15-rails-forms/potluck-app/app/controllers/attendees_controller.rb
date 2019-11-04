class AttendeesController < ApplicationController

  def index
    @attendees = Attendee.all
    render :index
  end

  def show
    @attendee = Attendee.find(params[:id])
    render :show
  end

  def new
    @attendee = Attendee.new
    render :new
  end

  def create
    @attendee = Attendee.create(attendee_params)
    redirect_to attendee_path(@attendee) #"/attendees/#{@attendee.id}"
  end

  def destroy
    @attendee = Attendee.find(params[:id])
    @attendee.destroy

    redirect_to attendees_path
  end

  private

  def attendee_params
    params.require(:attendee).permit(:name, :contribution)
  end


end
