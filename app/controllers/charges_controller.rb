require 'stripe'
class ChargesController < ApplicationController
    skip_before_action :authorize_user, only: [:create]

    # def calculate_total_price()
    #     total_price = 0
    #     current_user.orders.order_values.each do |order_detail|
    #         total_price += order_detail.product.price * order_detail.quantity
    #     end
    #     total_price
    # end
        
    def create
        Stripe.api_key = 'sk_test_51M1e5VEQvqjaEBjAyO6Vt1RRhhRvQLoRI01HHDFC8ZO0bqUNc1E4MAu4K5vx6ix4anNepWT7XNtvHtJlRRWpyaEZ006p8RFolu'
        
        
        
        # payment_intent = Stripe::PaymentIntent.create({
        #     amount: calculate_total_price,
        #     currency: 'usd',
        #     automatic_payement_methods:{
        #         enabled: true,
        #     }
        #     render json: {client_secret: payment_intent.client_secret}
        # })
        payment_intent = Stripe::PaymentIntent.create(
            amount: params[:amount],
            currency: params[:charge][:currency],
            source: params[:stripeToken],
            payment_method_types: ['card'],
          )
          puts payment_intent
          render json: {
            clientSecret: payment_intent["client_secret"],
          }
        end
end
