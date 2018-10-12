class Job < ApplicationRecord
  belongs_to :employer
  belongs_to :job_status
  has_many :job_apps
  has_many :applicants, through: :job_apps

  has_many_attached :attachments
end
