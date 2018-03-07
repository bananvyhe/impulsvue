class CreateProgramms < ActiveRecord::Migration[5.1]
  def change
    create_table :programms do |t|

      t.timestamps
    end
  end
end
