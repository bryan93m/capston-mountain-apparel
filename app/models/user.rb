class User < ApplicationRecord
    has_secure_password
    has_many :orders
    has_many :order_details, through: :orders

    validates :email, presence: true, uniqueness: true

end
