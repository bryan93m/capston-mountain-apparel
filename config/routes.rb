Rails.application.routes.draw do
  resources :order_details
  resources :orders
  resources :product_sizings
  resources :products
  resources :sizings
  resources :users
  resources :charges, only: [:create]

  get '/auth', to: 'users#show'
  post '/login', to: 'sessions#create'
  post '/register', to: 'users#create'
  delete '/logout', to: 'sessions#destroy'
  delete '/clearOrder', to: 'orders#clearOrder'
  patch '/updateUser', to: 'users#update'
end
