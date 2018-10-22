class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]

  # def index
  #   users = User.all
  #   render json: users
  # end

  def show
    if current_user.user_type == "client"
      user = User.find(params[:id])
    elsif (current_user.user_type == "employer" || current_user.user_type == "applicant")
      if current_user.id == params[:id].to_i
        user = current_user
      else
        return render json: {message: "Please log in"}
      end
    end
    render json: user
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: {
        user: user,
        token: encode_token({ user_id: user.id }) }
    else
      render json: user.errors
    end
  end

  def profile
    render json: current_user
  end

  # def update
  #   if user.valid?
  #     user.update(user_params)
  #     render json: user
  #   else
  #     render json: user.errors
  #   end
  #
  # end


  private

  def user_params
    params.require(:user).permit(:email, :password, :user_type)
  end


end
