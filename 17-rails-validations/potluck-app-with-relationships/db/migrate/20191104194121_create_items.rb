class CreateItems < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name
      t.references :potluck, foreign_key: true
      t.belongs_to :attendee, foreign_key: true

      t.timestamps
    end
  end
end
