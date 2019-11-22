class CreateTweets < ActiveRecord::Migration[6.0]
  def change
    create_table :tweets do |t|
      t.string :user
      t.string :content
      t.integer :likes
      t.integer :retweets

      t.timestamps
    end
  end
end
