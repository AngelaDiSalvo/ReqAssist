class User < ApplicationRecord
  has_secure_password
  has_many :job_profiles
  has_many :jobs, through: :job_profiles
  has_many :posted_jobs, foreign_key: "employer_id", class_name: :Job
  has_many_attached :attachments
end
