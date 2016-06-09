class ApiRequestHandler
  def initialize(domain, alert, domain_params, alert_params)
    @domain = domain
    @alert = alert
    @domain_params = { weburl: domain_params }
    @alert_params = { ipaddress: alert_params }
  end


  def create_response
    if create_alert
      create_alert
    else
      @alert.errors
    end
  end

  def create_alert
    if domain_present?
      alert = @domain.alerts.new(@alert_params)
      return false if !alert.save
      { domain_id: @domain.id, count: @domain.alerts.count, alerted: !!alert }
    else
      domain = create_domain
      alert = domain.alerts.new(@alert_params)
      return false if !alert.save
      { domain_id: domain.id, count: domain.alerts.count, alerted: !!alert }
    end
  end

  def create_domain
    domain = Domain.new(@domain_params)
    return false if !domain.save
    domain
  end

  def index_response
    if domain_present?
      { domain_id: @domain.id,
      count: @domain.alerts.count,
      alerted: !!@alert }
    else
      { count: 0, alerted: false }
    end
  end

  private

    def alert_present?
      !!@alert
    end

    def domain_present?
      !!@domain
    end
end