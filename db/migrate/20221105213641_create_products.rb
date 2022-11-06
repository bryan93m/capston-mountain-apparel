class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.float :price
      t.string :description
      t.string :image
      t.integer :stock
      t.string :gender

      t.timestamps
    end
  end
end
