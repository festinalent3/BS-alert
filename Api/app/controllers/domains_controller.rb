class DomainsController < ApplicationController
  before_action :set_domain, only: [:show, :update, :destroy]
  # { weburl: "trump.com", action: "show"}
  # GET /domains
  def index
    @domain = Domain.find_by(weburl: params[:weburl])
    @alert = Alert.find_by(ipaddress: params[:ipaddress], domain: @domain)
    render json: { count: @domain.alerts.count, alerted: !!@alert }
  end

  # GET /domains/1
  def show
    render json: @domain
  end

  # POST /domains
  def create
    @domain = Domain.find_by(domain_params)
    if !!@domain
      @alert = @domain.alerts.new(alert_params)
      if @alert.save
        render json: { count: @domain.alerts.count, alerted: !!@alert }
      else
        render json: @alert.errors, status: :unprocessable_entity
      end
    else
      @domain = Domain.new(domain_params)
      if @domain.save
        @alert = @domain.alerts.new(alert_params)
        if @alert.save
          render json: { count: @domain.alerts.count, alerted: !!@alert }
        else
          render json: @alert.errors, status: :unprocessable_entity
        end
      else
        render json: @domain.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /domains/1
  def update
    if @domain.update(domain_params)
      render json: @domain
    else
      render json: @domain.errors, status: :unprocessable_entity
    end
  end

  # DELETE /domains/1
  def destroy
    @domain.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_domain
      @domain = Domain.find(params[:id])
    end

    def alert_params
      params.permit(:ipaddress)
    end

    # Only allow a trusted parameter "white list" through.
    def domain_params
      params.permit(:weburl)
    end
end
