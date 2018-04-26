Rails.application.routes.draw do
  resources :news
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
	resources :teams
	resources :childs
	resources :programms
	resources :employees
	resources :indexpages
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "indexpage#index"
end
