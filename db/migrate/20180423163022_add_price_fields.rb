class AddPriceFields < ActiveRecord::Migration[5.1]
  def change
  	add_column :players, :graph, :string
  	add_column :players, :group, :string
  	add_column :players, :ind, :string
  end
end
