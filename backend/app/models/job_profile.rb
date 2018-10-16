class JobProfile < ApplicationRecord
  belongs_to :user
  has_many :job_apps
  has_many :jobs, through: :job_apps
  has_many_attached :attachments
end
