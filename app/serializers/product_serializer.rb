class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :description, :image, :stock, :gender
end
