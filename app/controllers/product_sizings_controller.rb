class ProductSizingsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]

    def index 
        product_sizes = ProductSizing.all
        render json: product_sizes, status: :ok
    end

    def show 
        product_size = ProductSizing.find(params[:id])
        render json: product_size, status: :ok
    end
end
