class OrderDetailsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show, :update, :destroy]

    def index
        if current_user
            render json: current_user.order_details
        else
            render json: OrderDetail.all, status: :ok
        end
    end

    def show
        order_detail = OrderDetail.find(params[:id])
        render json: order_detail, status: :ok
    end

    def create
        if(params[:order_id] == nil)
            new_order = current_user.orders.create
            params[:order_id] = new_order.id
            order = OrderDetail.create!(order_detail_params)
            render json: order, status: :created
        else
            order = OrderDetail.create!(order_detail_params)
            render json: order, status: :created
        end
    end

    def update
        product = OrderDetail.find(params[:id])
        product.update(order_detail_params)
        render json: product
    end




    private

    def order_detail_params
        params.permit(:order_id, :product_id, :sizing_id, :price, :quantity )
    end
end
