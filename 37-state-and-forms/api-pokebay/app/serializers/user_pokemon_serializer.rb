class UserPokemonSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :for_sale
  has_one :user
  has_one :pokemon
end
