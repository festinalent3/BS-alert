require 'api_versioning'

Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    scope module: :v1, constraints: ApiVersioning.new(version: 1, default: true) do
      resources :domains, :only => [:index, :create, :destroy]
    end
  end
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
