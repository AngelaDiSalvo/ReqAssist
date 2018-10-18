class JobProfile < ApplicationRecord
  belongs_to :user
  has_many :job_apps
  has_many :jobs, through: :job_apps
  has_many_attached :attachments

  serialize :position_type, Array
end
