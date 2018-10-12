class ApplicantsController < ApplicationController

  def index
    applicants = Applicant.all
    render json: applicants
  end

  def show
    applicant = Applicant.find(params[:id])
    render json: applicant
  end

  def create
    applicant = Applicant.new(applicant_params)

    if applicant.valid?
      applicant.save
      render json: applicant
    else
      render json: applicant.errors
    end
  end

  def update

  end

  private

  def applicant_params
    params.require(:applicant).permit(:name, :phone, :email, :password, :home_zip, :travel_radius, :position_type, :experience, :language)
  end

end
