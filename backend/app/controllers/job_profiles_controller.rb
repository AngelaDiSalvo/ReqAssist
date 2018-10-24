class JobProfilesController < ApplicationController

  def index
    if current_user.user_type == "client"
      job_profiles = JobProfile.all
    elsif current_user.user_type == "applicant"
      job_profiles = current_user.job_profiles
    end
    render json: job_profiles
  end

  def show
    if current_user.user_type == "client"
      job_profile = JobProfile.find(params[:id])
    elsif current_user.user_type == "applicant"
      job_profile = current_user.job_profiles
    end
    render json: job_profile
  end

  def create
    if current_user.user_type == "applicant"
      job_profile = JobProfile.new(job_profile_params)
      byebug

      if job_profile.valid?
        job_profile.save

        render json: job_profile
      else
        render json: job_profile.errors
      end
    end
  end

  def update
    if current_user.user_type == "applicant" || current_user.user_type == "client"
      job_profile = JobProfile.find(params[:id])
      job_profile.update(job_profile_params)
      render json: job_profile
    end
  end

  private

  def job_profile_params
    params.require(:job_profile).permit(:user_id, :name, :phone, :home_zip, :travel_radius, :experience, :min_wage_rate, :score, :comments, position_type: [])
  end

end
