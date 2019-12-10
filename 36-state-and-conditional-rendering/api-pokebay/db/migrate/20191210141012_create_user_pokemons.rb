class CreateUserPokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :user_pokemons do |t|
      t.string :name
      t.integer :price
      t.boolean :for_sale
      t.belongs_to :user, foreign_key: true
      t.belongs_to :pokemon, foreign_key: true

      t.timestamps
    end
  end
end
