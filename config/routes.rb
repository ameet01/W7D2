Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :todos, only: [:update, :destroy, :show, :index, :create]
  end

  root to: 'static_pages#root'
end
