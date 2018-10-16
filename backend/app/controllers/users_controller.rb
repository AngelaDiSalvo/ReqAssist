class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: user
    else
      render json: user.errors
    end
  end

  def update
    if user.valid?
      user.update(user_params)
      render json: user
    else
      render json: user.errors
    end

  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :user_type)
  end


end
