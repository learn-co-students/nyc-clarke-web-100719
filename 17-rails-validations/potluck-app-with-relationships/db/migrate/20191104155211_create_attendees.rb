class CreateAttendees < ActiveRecord::Migration[5.2]
  def change
    create_table :attendees do |t|
      t.string :name
      t.integer :age
      t.string :slogan
      t.string :img_url

      t.timestamps
    end
  end
end
