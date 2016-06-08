class Api::V1::UsersController < ApplicationController
  before_filter :authenticate_user!, except: [:show]
  respond_to :json

  def show
    @user = User.find(params[:id])
    respond_with @user
  end

end
