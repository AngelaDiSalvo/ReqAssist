class JobApp < ApplicationRecord
  belongs_to :job_profile
  belongs_to :job
end
