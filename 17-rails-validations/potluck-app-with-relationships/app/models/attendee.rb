class Attendee < ApplicationRecord
  has_many :items, dependent: :destroy 
  has_many :potlucks, through: :items 

  validates :name, :age, :slogan, presence: :true
  # validates :age, presence: :true
  # validates :slogan, presence: :true
  validates :name, uniqueness: :true 
  validates :age, numericality: {greater_than: 0, less_than: 150}
  
  validate :can_not_be_names_greg

  def can_not_be_names_greg
    if self.name && self.name.downcase === 'greg'
      self.errors.add(:name, 'Can not take my name')
    end 
  end 
end
