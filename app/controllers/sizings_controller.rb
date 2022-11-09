class SizingsController < ApplicationController
    skip_before_action :authorize_user, only: [:index, :show]

    def index
        sizes = Sizing.all
        render json: sizes, status: :ok
    end

    def show
        sizes = Sizing.find(params[:id])
        render json: sizes, status: :ok
    end
end
