class CreateCats < ActiveRecord::Migration
  def change
    create_table :cats do |t|
      t.string 'name'
      t.string 'breed'
      t.integer 'age'
      t.string 'img_url'
    end
  end
end
