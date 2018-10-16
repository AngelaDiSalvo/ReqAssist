class User < ApplicationRecord
  has_secure_password
  has_many :posted_jobs, foreign_key: "employer_id", class_name: :Job
  has_many_attached :attachments
end

class Job < ApplicationRecord
  belongs_to :user, foreign_key: "employer_id", class_name: :User
  belongs_to :job_status
  has_many :job_apps
  has_many :job_profiles, through: :job_apps
  has_many_attached :attachments
end

class JobProfile < ApplicationRecord
  belongs_to :user
  has_many :job_apps
  has_many :jobs, through: :job_apps
  has_many_attached :attachments
end

class JobApp < ApplicationRecord
  belongs_to :job_profile
  belongs_to :job
end

class JobStatus < ApplicationRecord
  has_many :jobs
end
