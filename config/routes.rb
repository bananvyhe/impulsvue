Rails.application.routes.draw do
  devise_for :users
	resources :teams
	resources :childs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "indexpage#index"
end
