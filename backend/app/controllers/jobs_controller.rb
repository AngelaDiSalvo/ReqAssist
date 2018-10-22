class JobsController < ApplicationController

  def index
    if current_user.user_type == "client"
      jobs = Job.all
    elsif current_user.user_type == "employer"
      jobs = current_user.posted_jobs
    end

    render json: jobs
  end

  # def show
  #   job = Job.find(params[:id])
  #   render json: job
  # end

  def create
    job = current_user.posted_jobs.build(job_params)
    # job = Job.new(job_params)
    if current_user.user_type == "employer" && job.valid?

      job.save
      render json: job
    else
      render json: job.errors
    end
  end

  # def update
  #
  # end

  def remove_job_app
    if current_user.user_type == "client"
      job = Job.find(params[:id])
      profile = job.job_profiles.find(params[:job][:job_profile_id])

       if profile
          job.job_profiles.delete(profile)
          render json: job
       end
    else 
      render json: {message: "you are not authorized: 401"}
    end

  end

  private

  def job_params
    params.require(:job).permit(:company_name, :phone, :position, :position_description, :job_zip, :requirements, :comments, :employer_id, :job_status_id)
  end

end
