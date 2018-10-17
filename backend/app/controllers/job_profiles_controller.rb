class JobProfilesController < ApplicationController

  def index
    job_profiles = JobProfile.all
    render json: job_profiles
  end

  def show
    job_profile = JobProfile.find(params[:id])
    render json: job_profile
  end

  def create
    job_profile = JobProfile.new(job_profile_params)

    if job_profile.valid?
      job_profile.save

      render json: job_profile
    else
      render json: job_profile.errors
    end
  end

  def update

  end

  private

  def job_profile_params
    params.require(:job_profile).permit(:user_id, :name, :phone, :home_zip, :travel_radius, :position_type, :experience, :min_wage_rate)
  end

end
