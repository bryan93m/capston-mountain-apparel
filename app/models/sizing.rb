class Sizing < ApplicationRecord
    has_many :product_sizings
    has_many :products, through: :product_sizings
end
