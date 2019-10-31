class CreateTrainers < ActiveRecord::Migration
  def change
    create_table :trainers do |t|
      t.string 'name'
      t.string 'img_url'
      t.integer 'cat_id'
    end 
  end
end
