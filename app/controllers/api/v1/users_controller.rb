class Api::V1::UsersController < ApplicationController
  # before_filter :authenticate_user!, except: [:show]
  respond_to :json

  def show
    @user = User.find(params[:id])
    respond_with @user
  end

  def create
    user = User.new(user_params)
    if user.save
      return render :layout => false, json: { user: user }, status: 201, location: [:api, user]
    else
      return render :layout => false, json: { error: user.errors }, status: 422
    end
  end

  private

    def user_params
      params.require(:user).permit(:email, :password, :password_confirmation)
    end

end
