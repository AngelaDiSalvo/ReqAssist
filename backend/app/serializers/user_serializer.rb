class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :password_digest, :user_type, :job_profiles, :jobs, :posted_jobs

end