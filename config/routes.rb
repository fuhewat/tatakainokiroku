Rails.application.routes.draw do
  devise_for :users
  root to: "battles#index"
   resources :battles, only:[:index, :new, :create, :show, :update]
   resources :users, only:[:show]
  end
