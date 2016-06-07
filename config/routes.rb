require 'api_constraints'

Rails.application.routes.draw do
  namespace :api, default: { format: :json } do
    scope module: :v1, constraints: ApiConstraints.new(version: 1, default: true) do
	    resources :urls
    end
  end
end