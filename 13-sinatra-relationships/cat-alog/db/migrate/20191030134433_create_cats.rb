class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string 'name'
      t.string 'breed'
      t.string 'img_url'
      t.integer 'age'
    end 
  end
end
