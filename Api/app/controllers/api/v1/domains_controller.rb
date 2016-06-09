module Api::V1
  class DomainsController < ApplicationController
    before_action :set_domain, only: [:show, :update, :destroy]

    # GET /domain
    def index
      render json: index_apihandler.index_response
    end

    # POST /domains
    def create
      render json: create_apihandler.create_response
    end

    # DELETE /domains/1
    def destroy
      @alert.destroy
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_domain
        @aler = Domain.find_by(weburl: params[:weburl]).alerts.find_by(ipaddress: params[:ipaddress])
      end

      def alert_params
        params.permit(:ipaddress)
      end

      def index_apihandler
        domain = Domain.find_by(weburl: params[:weburl])
        alert = Alert.find_by(ipaddress: params[:ipaddress], domain: domain)
        ApiRequestHandler.new( domain, alert, params[:weburl], params[:ipaddress] )
      end

      def create_apihandler
        domain = Domain.find_by(domain_params)
        alert = Alert.find_by(alert_params, domain: domain)
        ApiRequestHandler.new( domain, alert, domain_params[:weburl], alert_params[:ipaddress] )
      end

      # Only allow a trusted parameter "white list" through.
      def domain_params
        params.permit(:weburl)
      end
  end
end
