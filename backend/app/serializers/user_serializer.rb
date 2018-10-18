class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :user_type, :job_profiles, :jobs, :posted_jobs

  has_many :posted_jobs, serializer: JobSerializer
  # has_many :posted_jobs



end
