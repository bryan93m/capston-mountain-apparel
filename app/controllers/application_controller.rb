class ApplicationController < ActionController::API
    include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :record_unprocessable_entity

  before_action :authorize_user, except: :current_user


  def current_user
    user = User.find_by(id: session[:user_id])
    user
  end

  def authorize_user
    render json: { error: "Please Log In" }, status: :unauthorized unless current_user
  end

  private 

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def record_not_found
    render json: { error: "Record not found" }, status: :not_found
  end


end
