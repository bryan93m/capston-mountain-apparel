class CreateProductSizings < ActiveRecord::Migration[7.0]
  def change
    create_table :product_sizings do |t|
      t.references :product, null: false, foreign_key: true
      t.references :sizing, null: false, foreign_key: true

      t.timestamps
    end
  end
end
