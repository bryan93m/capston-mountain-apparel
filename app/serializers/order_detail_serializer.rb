class OrderDetailSerializer < ActiveModel::Serializer
  attributes :id, :price, :quantity
  has_one :order
  has_one :product
end
