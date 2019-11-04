class CreatePotlucks < ActiveRecord::Migration[5.2]
  def change
    create_table :potlucks do |t|
      t.string :title

      t.timestamps
    end
  end
end
