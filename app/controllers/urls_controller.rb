class UrlsController < ApplicationController
	def index

	end
	def create
    @url = Url.new(url_params)
    if @url.save
      redirect_to urls_path
    else
      render json:{error: "message: resource not created"}
    end
  end

  private

    def url_params
    params.permit(:url, :name)
  end
end
