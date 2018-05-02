class CreateFeedbacks < ActiveRecord::Migration[5.1]
  def change
    create_table :feedbacks do |t|
      t.string :name
      t.string :surname
      t.string :email
      t.string :tel
      t.text :text

      t.timestamps
    end
  end
end
