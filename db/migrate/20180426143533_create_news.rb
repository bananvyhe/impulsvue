class CreateNews < ActiveRecord::Migration[5.1]
  def change
    create_table :news do |t|
      t.string :image
      t.text :desc

      t.timestamps
    end
  end
end
