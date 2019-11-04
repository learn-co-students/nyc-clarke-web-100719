class ItemsController < ApplicationController

  def new 
    @item = Item.new 
    @attendees = Attendee.all
    @potlucks = Potluck.all
    # render :new 
  end 

  def create 
    @item = Item.create(item_params)

    redirect_to @item.attendee
    # redirect_to attendee_path(@item.attendee)

  end 

  private 

  def item_params
    params.require(:item).permit(:name, :attendee_id, :potluck_id)
  end 

end
