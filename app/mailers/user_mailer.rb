class UserMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.user_mailer.user_created.subject
  #
  def user_created
    @user = params[:user]
    mail(to: @user.email, subject: "Welcome to Mountain Apparel!")
  end
end
