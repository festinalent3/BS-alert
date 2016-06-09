class ApplicationController < ActionController::API
  # helper_methods :find_domain, :alert_eval

  def find_domain(domain_params)
    Domain.find_by(domain_params)
  end

  def alert_eval(domain, alert_params)
  end
end
