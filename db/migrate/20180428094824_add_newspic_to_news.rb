class AddNewspicToNews < ActiveRecord::Migration[5.1]
  def change
    add_column :news, :newspic, :string
  end
end
