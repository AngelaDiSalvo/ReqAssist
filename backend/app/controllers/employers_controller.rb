class EmployersController < ApplicationController

  def index
    employers = Employer.all
    render json: employers
  end

  def show
    employer = Employer.find(params[:id])
    render json: employer
  end

  def create
    employer = Employer.new(employer_params)

    if employer.valid?
      employer.save
      render json: employer
    else
      render json: employer.errors
    end
  end

  def update
    if employer.valid?
      employer.update(employer_params)
      render json: employer
    else
      render json: employer.errors
    end

  end


  private

  def employer_params
    params.require(:employer).permit(:email, :password, :company_name, :phone)
  end


end
