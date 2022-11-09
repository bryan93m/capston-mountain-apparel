class Product < ApplicationRecord
    has_many :order_details
    has_many :orders, through: :order_details
    has_many :product_sizings
    has_many :sizings, through: :product_sizings


    
end
