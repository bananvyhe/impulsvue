Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users
	resources :teams
	resources :childs
	resources :programms
	resources :employees
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "indexpage#index"
end
