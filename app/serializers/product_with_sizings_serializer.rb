class ProductWithSizingsSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :stock, :gender
  has_many :sizings
end
