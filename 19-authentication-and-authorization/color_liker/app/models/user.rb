class User < ApplicationRecord
  has_many :votes
  # has_many :colors, through: :votes
  has_secure_password

  # def password=(secret)
  #   self.password_digest = BCrypt::Password.create(secret)
  # end 


  # def authenticate(secret)
  #   BCrypt::Password.new(self.password_digest)  == secret
  # end 

end
