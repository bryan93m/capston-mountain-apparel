class OrdersController < ApplicationController
    skip_before_action :authorize_user

    def index
        render json: Order.all
    end

    def show 
        order = Order.find(params[:id])
        render json: order
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    def clearOrder
        current_user.orders.destroy_all
        render json: current_user.orders
    end

    def update
        order = Order.find(params[:id])
        render json: order.update(order_params)
    end
    

    private 

    def order_params
        params.permit(:user_id, :product_id, :total)
    end
end
