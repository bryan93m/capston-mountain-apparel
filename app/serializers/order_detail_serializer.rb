class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  has_one :order
  has_one :product
  has_one :sizing
end
