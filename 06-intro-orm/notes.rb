require 'pry'

dog1_attributes = {
  name: "Spots",
  breed: "Mutt",
  age: 32,
  size: "Big",
  cute: true,
  favorite_food: "kibbles",
  temperament: "Mellow and Rude"
}

class HouseholdPet
  attr_accessor :name, :breed, :age, :size, :cute, :favorite_food, :temperament

  def initialize(dog_attributes)
    dog_attributes.each do |key, value|
      self.send("#{key}=", value)
    end
  end

  def speaks
    puts "#speaks method from household"
    "Feed me"
  end
end

class Dog < HouseholdPet
  def speaks
    super
    puts "#speaks method from Dog"
    "WOOF!"
  end
end

class Cat < HouseholdPet
  def speaks
    super
    puts "#speaks method from cat"
    "MEOW!"
  end
end

dog1 = Dog.new(dog1_attributes)
cat1 = Cat.new({})

binding.pry