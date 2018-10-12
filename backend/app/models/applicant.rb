class Applicant < ApplicationRecord
  has_secure_password
  has_many :job_apps
  has_many :jobs, through: :job_apps

  has_many_attached :attachments
end
