class Attendee < ApplicationRecord
  has_many :items 
  has_many :potlucks, through: :items 
end
