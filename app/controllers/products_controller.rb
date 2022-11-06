class ProductsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]
    def index
        render json: Product.all, status: :ok
    end

    def show
        product = Product.find_by(id: params[:id])
        render json: product, serializer: ProductWithSizingsSerializer, status: :ok
    end

    private

end
