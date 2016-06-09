Rails.application.routes.draw do
  resources :domains do
    resources :alerts
  end
  resource :alerts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
