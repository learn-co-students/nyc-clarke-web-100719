class Item < ApplicationRecord
  belongs_to :potluck
  belongs_to :attendee
end
