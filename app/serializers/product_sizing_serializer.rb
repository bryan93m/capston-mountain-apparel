class ProductSizingSerializer < ActiveModel::Serializer
  attributes :id
  has_one :product
  has_one :sizing
end
