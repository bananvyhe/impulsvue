class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :mail
      t.string :adress
      t.string :tel
      t.string :map

      t.timestamps
    end
  end
end
