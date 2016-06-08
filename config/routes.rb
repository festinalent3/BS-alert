require 'api_constraints'

Rails.application.routes.draw do
  devise_for :users
  namespace :api, default: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
	    resources :users, :only => [:show]
    end
  end
end