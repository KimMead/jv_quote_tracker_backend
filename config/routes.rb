Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
resources :quotes, only: [:index, :create, :destroy]
resources :categories, only: [:index]
end
