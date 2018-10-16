class Job < ApplicationRecord
  belongs_to :user, foreign_key: "employer_id", class_name: :User
  belongs_to :job_status
  has_many :job_apps
  has_many :job_profiles, through: :job_apps
  has_many_attached :attachments
end
