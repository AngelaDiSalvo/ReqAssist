class JobAppsController < ApplicationController

  def index
    job_apps = JobApp.all
    render json: job_apps
  end

  def show
    job_app = JobApp.find(params[:id])
    render json: job_app
  end

  def create
    job_app = JobApp.new(job_app_params)
    if job_app.valid?
      job_app.save
      job = Job.find(job_app.job_id)
      render json: job
    else
      render json: job_app.errors
    end
  end

  def destroy
    job_app.destroy
  end

end

private

def job_app_params
  params.require(:job_app).permit(:job_profile_id, :job_id)
end
