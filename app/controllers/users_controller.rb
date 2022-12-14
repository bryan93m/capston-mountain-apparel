class UsersController < ApplicationController
    skip_before_action :authorize_user, only: [:create, :show, :update]

    def index
        users = User.all
        render json: users
    end

    def show
        render json: current_user, status: :ok
    end

    def create
        @user = User.new(user_params)
        if @user.save
            UserMailer.with(user: @user).user_created.deliver_later
        end
        render json: @user, status: :created
    end

    def update
        current_user.update!(user_params)
        render json: current_user, status: :ok
    end


    private
    def user_params
        params.permit(:first_name, :last_name, :email, :password)
    end
end
