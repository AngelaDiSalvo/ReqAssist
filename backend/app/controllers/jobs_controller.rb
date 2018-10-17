class JobsController < ApplicationController

  def index
    jobs = Job.all
    render json: jobs
  end

  def show
    job = Job.find(params[:id])
    byebug
    render json: job
  end

  def create
    job = Job.new(job_params)
    if job.valid?
      job.save
      render json: job
    else
      render json: job.errors
    end
  end

  def update

  end

  private

  def job_params
    params.require(:job).permit(:company_name, :phone, :position, :position_description, :job_zip, :requirements, :comments, :employer_id, :job_status_id)
  end

end
