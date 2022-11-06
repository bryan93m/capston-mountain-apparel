class CreateSizings < ActiveRecord::Migration[7.0]
  def change
    create_table :sizings do |t|
      t.string :size
      t.float :price

      t.timestamps
    end
  end
end
